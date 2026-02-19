import exams from "@/data/exams.json";

export default function UpcomingExam() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
        Upcoming Exams
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">

        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              {exam.title}
            </h2>

            <p className="text-sm text-slate-500 mb-4">{exam.course}</p>

            <div className="space-y-1 text-sm text-slate-600">
              <p><span className="font-medium">Date:</span> {exam.date}</p>
              <p><span className="font-medium">Time:</span> {exam.time}</p>
              <p><span className="font-medium">Duration:</span> {exam.duration}</p>
              <p><span className="font-medium">Marks:</span> {exam.totalMarks}</p>
            </div>

            <button className="mt-5 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition">
              View Details
            </button>
          </div>
        ))}

      </div>
    </main>
  );
}
