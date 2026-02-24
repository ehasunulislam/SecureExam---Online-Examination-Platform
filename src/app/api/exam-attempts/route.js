import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("examAttempts");

    // Calculate marks automatically
    let totalMarks = 0;
    data.answers.forEach((ans) => {
      if (ans.answer === ans.correctAnswer) totalMarks += ans.marks;
    });

    const attempt = {
      examId: new ObjectId(data.examId),
      studentId: new ObjectId(data.studentId),
      answers: data.answers,
      totalMarks,
      submittedAt: new Date(),
    };

    const result = await collection.insertOne(attempt);

    return NextResponse.json({
      message: "Exam submitted successfully",
      insertedId: result.insertedId,
      totalMarks,
    });
  } catch (error) {
    console.error("POST /exam-attempts Error:", error.message);
    return NextResponse.json(
      { error: "Failed to submit exam" },
      { status: 500 },
    );
  }
}
