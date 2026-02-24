"use client";

import { useState, useEffect } from "react";

export default function AddStudents({ batchId }) {
  const [emails, setEmails] = useState("");
  const [message, setMessage] = useState("");

  const handleAddStudents = async () => {
    const emailArray = emails.split(",").map((e) => e.trim());

    const res = await fetch("/api/batches", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ batchId, studentEmails: emailArray }),
    });

    const data = await res.json();
    if (res.ok) setMessage("Students added successfully!");
    else setMessage(data.error || "Failed to add students");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Students to Batch</h2>
      <textarea
        placeholder="Enter student emails, comma separated"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3"
      />
      <button
        onClick={handleAddStudents}
        className="px-4 py-2 bg-[#0D7C66] text-white rounded-lg hover:bg-[#41B3A2]"
      >
        Add Students
      </button>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  );
}
