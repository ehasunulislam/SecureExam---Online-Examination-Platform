"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CreateBatch() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/batches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        instructorId: session.user.id,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`Batch "${name}" created successfully!`);
      setName("");
    } else {
      setMessage(data.error || "Failed to create batch");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Batch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Batch Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#0D7C66] text-white rounded-lg hover:bg-[#41B3A2]"
        >
          {loading ? "Creating..." : "Create Batch"}
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
    </div>
  );
}
