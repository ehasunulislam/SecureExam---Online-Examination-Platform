// api/exams/route.js
import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const collection = await getCollection("exams");
    const exams = await collection.find({}).toArray();
    return NextResponse.json(exams);
  } catch (error) {
    console.error("GET /exams Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch exams" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("exams");

    const exam = {
      title: data.title,
      duration: data.duration, // in minutes
      batchIds: (data.batchIds || []).map((id) => new ObjectId(id)),
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      published: false, // default unpublished
      createdAt: new Date(),
      instructorId: new ObjectId(data.instructorId),
    };

    const result = await collection.insertOne(exam);

    return NextResponse.json({
      message: "Exam created successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("POST /exams Error:", error.message);
    return NextResponse.json(
      { error: "Failed to create exam" },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    const { examId, publish } = await req.json();
    const collection = await getCollection("exams");

    const result = await collection.updateOne(
      { _id: new ObjectId(examId) },
      { $set: { published: publish === true } },
    );

    return NextResponse.json({
      message: publish ? "Exam published successfully" : "Exam unpublished",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("PATCH /exams Error:", error.message);
    return NextResponse.json(
      { error: "Failed to update exam status" },
      { status: 500 },
    );
  }
}
