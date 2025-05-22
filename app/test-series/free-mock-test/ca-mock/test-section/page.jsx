// app/mock-test/[examId]/test-series/page.jsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function TestSeriesPage() {
  const { examId } = useParams();
  const [testSeries, setTestSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exams/${examId}/test-series`);
        setTestSeries(res.data);
      } catch (err) {
        console.error("Error fetching test series:", err);
      }
    }
    if (examId) fetchData();
  }, [examId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Test Series</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testSeries.map((test) => (
          <div
            key={test._id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition-all border"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{test.title}</h2>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {test.level}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{test.description || "No description provided"}</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>🕒 Duration: {test.duration} hr</li>
              <li>❓ Questions: {test.totalQuestions}</li>
              <li>⭐ Marks: {test.totalMarks}</li>
              <li>📅 Created: {new Date(test.createdAt).toLocaleDateString()}</li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
