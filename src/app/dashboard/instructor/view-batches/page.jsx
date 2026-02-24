"use client";

import { useEffect, useState } from "react";

export default function ViewBatchesPage() {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    async function fetchBatches() {
      try {
        const res = await fetch("/api/batches");
        const data = await res.json();
        setBatches(data);
      } catch (error) {
        console.error("Failed to fetch batches", error);
      }
    }
    fetchBatches();
  }, []);

  return (
    <main className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">All Batches</h1>
      <ul className="space-y-2">
        {batches.map((batch) => (
          <li key={batch._id} className="bg-gray-200 p-4 rounded">
            <p>
              <strong>Name:</strong> {batch.name}
            </p>
            <p>
              <strong>Students:</strong>{" "}
              {batch.students?.length > 0
                ? batch.students.join(", ")
                : "No students yet"}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
