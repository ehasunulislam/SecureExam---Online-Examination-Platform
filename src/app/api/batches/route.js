// api/batches/route.js
import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const collection = await getCollection("batches");
    const batches = await collection.find({}).toArray();
    return NextResponse.json(batches);
  } catch (error) {
    console.error("GET /batches Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch batches" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("batches");

    const batch = {
      name: data.name,
      instructorId: data.instructorId, // instructor creating the batch
      studentEmails: data.studentEmails || [],
      createdAt: new Date(),
    };

    const result = await collection.insertOne(batch);

    return NextResponse.json({
      message: "Batch created successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("POST /batches Error:", error.message);
    return NextResponse.json(
      { error: "Failed to create batch" },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    const { batchId, studentEmails } = await req.json();
    const collection = await getCollection("batches");

    const result = await collection.updateOne(
      { _id: new ObjectId(batchId) },
      { $addToSet: { studentEmails: { $each: studentEmails } } },
    );

    return NextResponse.json({
      message: "Students added successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("PATCH /batches Error:", error.message);
    return NextResponse.json(
      { error: "Failed to add students" },
      { status: 500 },
    );
  }
}
