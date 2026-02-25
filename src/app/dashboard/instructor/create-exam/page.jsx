// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// export default function CreateExamPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState(30); // default 30 min
//   const [batches, setBatches] = useState([]);
//   const [selectedBatches, setSelectedBatches] = useState([]);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch all batches for this instructor
//   useEffect(() => {
//     fetch("/api/batches")
//       .then((res) => res.json())
//       .then((data) => setBatches(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       !title ||
//       !duration ||
//       selectedBatches.length === 0 ||
//       !startTime ||
//       !endTime
//     ) {
//       Swal.fire("Error", "Please fill all fields", "warning");
//       return;
//     }

//     setLoading(true);

//     const response = await fetch("/api/exams", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title,
//         duration: Number(duration),
//         batchIds: selectedBatches,
//         startTime,
//         endTime,
//         instructorId: localStorage.getItem("userId"), // save instructor ID in localStorage
//       }),
//     });

//     const data = await response.json();
//     setLoading(false);

//     if (response.ok) {
//       Swal.fire("Success", "Exam created successfully", "success");
//       router.push("/dashboard/instructor/exam-list");
//     } else {
//       Swal.fire("Error", data.error || "Failed to create exam", "error");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-20">
//       <h2 className="text-2xl font-bold mb-6 text-[#0D7C66]">Create Exam</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Exam Title
//           </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="mt-1 block w-full border rounded-md px-3 py-2"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Duration (minutes)
//           </label>
//           <input
//             type="number"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="mt-1 block w-full border rounded-md px-3 py-2"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Batches
//           </label>
//           <select
//             multiple
//             value={selectedBatches}
//             onChange={(e) =>
//               setSelectedBatches(
//                 Array.from(e.target.selectedOptions, (option) => option.value),
//               )
//             }
//             className="mt-1 block w-full border rounded-md px-3 py-2"
//           >
//             {batches.map((batch) => (
//               <option key={batch._id} value={batch._id}>
//                 {batch.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Start Time
//             </label>
//             <input
//               type="datetime-local"
//               value={startTime}
//               onChange={(e) => setStartTime(e.target.value)}
//               className="mt-1 block w-full border rounded-md px-3 py-2"
//             />
//           </div>

//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700">
//               End Time
//             </label>
//             <input
//               type="datetime-local"
//               value={endTime}
//               onChange={(e) => setEndTime(e.target.value)}
//               className="mt-1 block w-full border rounded-md px-3 py-2"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-[#0D7C66] text-white py-2 rounded-lg hover:bg-[#41B3A2]"
//         >
//           {loading ? "Creating..." : "Create Exam"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";

export default function CreateExamPage() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(60);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedBatches, setSelectedBatches] = useState([]);

  useEffect(() => {
    async function fetchBatches() {
      const res = await fetch("/api/batches");
      const data = await res.json();
      setBatches(data);
    }
    fetchBatches();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !duration ||
      !startTime ||
      !endTime ||
      selectedBatches.length === 0
    ) {
      alert("All fields are required");
      return;
    }

    const res = await fetch("/api/exams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        duration,
        startTime,
        endTime,
        batchIds: selectedBatches,
      }),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      setTitle("");
      setDuration(60);
      setStartTime("");
      setEndTime("");
      setSelectedBatches([]);
    }
  };

  return (
    <main className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Create Exam</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Exam Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="datetime-local"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="datetime-local"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          multiple
          value={selectedBatches}
          onChange={(e) =>
            setSelectedBatches(
              Array.from(e.target.selectedOptions, (opt) => opt.value),
            )
          }
          className="w-full p-2 border rounded"
        >
          {batches.map((b) => (
            <option key={b._id} value={b._id}>
              {b.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
        >
          Create Exam
        </button>
      </form>
    </main>
  );
}
