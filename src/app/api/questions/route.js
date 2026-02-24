// api/questions/route.js
import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const collection = await getCollection("questions");
    const questions = await collection.find({}).toArray();
    return NextResponse.json(questions);
  } catch (error) {
    console.error("GET /questions Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("questions");

    const question = {
      examId: new ObjectId(data.examId),
      questionText: data.questionText,
      options: data.options, // ["A", "B", "C", "D"]
      correctAnswer: data.correctAnswer,
      marks: data.marks || 1,
      hints: data.hints || "",
      createdAt: new Date(),
    };

    const result = await collection.insertOne(question);

    return NextResponse.json({
      message: "Question added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("POST /questions Error:", error.message);
    return NextResponse.json(
      { error: "Failed to add question" },
      { status: 500 },
    );
  }
}
