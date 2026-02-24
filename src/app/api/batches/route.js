import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";

// Helper function to send a message/notification to students
async function sendBatchNotification(studentEmails, batchName) {
  try {
    const messagesCollection = await getCollection("messages");

    const messages = studentEmails.map((email) => ({
      to: email,
      message: `You have been added to batch "${batchName}".`,
      createdAt: new Date(),
      read: false,
    }));

    if (messages.length > 0) {
      await messagesCollection.insertMany(messages);
    }
  } catch (err) {
    console.error("Failed to send batch notifications:", err);
  }
}

export async function GET() {
  try {
    const batchesCollection = await getCollection("batches");
    const batches = await batchesCollection.find({}).toArray();

    return NextResponse.json(batches);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch batches" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, studentEmails = [] } = data;

    if (!name) {
      return NextResponse.json(
        { error: "Batch name is required" },
        { status: 400 },
      );
    }

    // Ensure batch name is unique
    const batchesCollection = await getCollection("batches");
    const existing = await batchesCollection.findOne({ name: name.trim() });
    if (existing) {
      return NextResponse.json(
        { error: "Batch name already exists" },
        { status: 400 },
      );
    }

    const batch = {
      name: name.trim(),
      students: studentEmails.map((email) => email.trim()),
      createdAt: new Date(),
    };

    const result = await batchesCollection.insertOne(batch);

    // Send notification to students
    await sendBatchNotification(batch.students, batch.name);

    return NextResponse.json({
      message: "Batch created successfully",
      batchId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create batch" },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const batchId = searchParams.get("id");

    if (!batchId) {
      return NextResponse.json(
        { error: "Batch ID is required" },
        { status: 400 },
      );
    }

    const batchesCollection = await getCollection("batches");
    const result = await batchesCollection.deleteOne({
      _id: new ObjectId(batchId),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Batch not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Batch deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete batch" },
      { status: 500 },
    );
  }
}
