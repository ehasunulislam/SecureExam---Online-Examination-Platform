"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function QuestionBankPage() {
  const searchParams = useSearchParams();
  const examId = searchParams.get("examId"); // pass examId in query

  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState({ a: "", b: "", c: "", d: "" });
  const [correctOption, setCorrectOption] = useState("a");
  const [marks, setMarks] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!examId) return;
    fetch(`/api/questions?examId=${examId}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(console.error);
  }, [examId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questionText || !options.a || !options.b || !options.c || !options.d) {
      Swal.fire("Error", "Please fill all options", "warning");
      return;
    }

    setLoading(true);
    const response = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        examId,
        question: questionText,
        options,
        correctOption,
        marks: Number(marks),
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      Swal.fire("Success", "Question added", "success");
      setQuestions([...questions, data]);
      setQuestionText("");
      setOptions({ a: "", b: "", c: "", d: "" });
      setCorrectOption("a");
      setMarks(1);
    } else {
      Swal.fire("Error", data.error || "Failed to add question", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[#0D7C66]">Add Questions</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="mt-1 block w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["a", "b", "c", "d"].map((opt) => (
            <div key={opt}>
              <label className="block text-sm font-medium text-gray-700">{`Option ${opt.toUpperCase()}`}</label>
              <input
                type="text"
                value={options[opt]}
                onChange={(e) =>
                  setOptions({ ...options, [opt]: e.target.value })
                }
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="block text-sm font-medium text-gray-700">
            Correct Option
          </label>
          <select
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            {["a", "b", "c", "d"].map((opt) => (
              <option key={opt} value={opt}>
                {opt.toUpperCase()}
              </option>
            ))}
          </select>

          <label className="block text-sm font-medium text-gray-700">
            Marks
          </label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="border rounded-md px-3 py-2 w-20"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0D7C66] text-white py-2 rounded-lg hover:bg-[#41B3A2]"
        >
          {loading ? "Adding..." : "Add Question"}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Questions Added</h3>
        <ul className="list-disc pl-6 space-y-1">
          {questions.map((q, idx) => (
            <li key={q._id}>
              {idx + 1}. {q.question} ({q.marks} marks)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
