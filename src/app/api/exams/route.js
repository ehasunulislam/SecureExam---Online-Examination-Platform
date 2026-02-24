import { NextResponse } from "next/server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// GET exams
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const instructorId = searchParams.get("instructorId");

    const examsCollection = await getCollection("exams");
    const questionsCollection = await getCollection("questions");

    let query = {};
    if (instructorId) {
      query.instructorId = instructorId;
    }

    const exams = await examsCollection.find(query).toArray();

    const examsWithQuestions = await Promise.all(
      exams.map(async (exam) => {
        const questions = await questionsCollection
          .find({ examId: exam._id.toString() })
          .toArray();

        return {
          ...exam,
          questions,
        };
      }),
    );

    return NextResponse.json(examsWithQuestions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exams" },
      { status: 500 },
    );
  }
}

// CREATE exam
export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("exams");

    const exam = {
      title: data.title,
      duration: data.duration,
      batchIds: data.batchIds || [],
      instructorId: data.instructorId,
      startTime: data.startTime,
      endTime: data.endTime,
      published: false,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(exam);

    return NextResponse.json({
      message: "Exam created",
      insertedId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create exam" },
      { status: 500 },
    );
  }
}

// Publish exam
export async function PUT(req) {
  try {
    const data = await req.json();
    const collection = await getCollection("exams");

    await collection.updateOne(
      { _id: new ObjectId(data.examId) },
      {
        $set: { published: true },
      },
    );

    return NextResponse.json({
      message: "Exam published successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to publish exam" },
      { status: 500 },
    );
  }
}
