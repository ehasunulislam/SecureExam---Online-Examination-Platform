import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const data = await req.json();

    const questionsCollection = await getCollection("questions");
    const attemptsCollection = await getCollection("examAttempts");

    const questions = await questionsCollection
      .find({ examId: data.examId })
      .toArray();

    let score = 0;
    let totalMarks = 0;

    questions.forEach((q) => {
      totalMarks += q.marks;

      if (data.answers[q._id] === q.correctOption) {
        score += q.marks;
      }
    });

    const attempt = {
      examId: data.examId,
      studentId: data.studentId,
      answers: data.answers,
      score,
      totalMarks,
      submittedAt: new Date(),
    };

    await attemptsCollection.insertOne(attempt);

    return NextResponse.json({
      message: "Exam submitted",
      score,
      totalMarks,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit exam" },
      { status: 500 },
    );
  }
}
