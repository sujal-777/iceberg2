"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Exam = {
  _id: string;
  name: string;
  categoryId: {
    _id: string;
    name: string;
  } | null;
  createdAt: string;
};

const STATIC_META = {
  successRate: 75,
  lastAttempt: "Not Attempted",
  testSeriesCount: 3,
};

export default function ExamsByCategoryPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const categoryId = Array.isArray(params?.categoryId) ? params.categoryId[0] : params?.categoryId;
  const router = useRouter();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/exams");
        const data = await res.json();
        const filtered = data.filter(
          (exam: Exam) => exam.categoryId?._id === categoryId
        );
        setExams(filtered);
      } catch (error) {
        console.error("Error fetching exams:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) fetchExams();
  }, [categoryId]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading exams...</p>;
  }

  if (!exams.length) {
    return <p className="text-center text-gray-500">No exams found in this category.</p>;
  }

  return (
    <section className="py-10 px-4 md:px-10 bg-white ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Select Exam Under: {exams[0].categoryId?.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exams.map((exam) => (
          <div
            key={exam._id}
            className="bg-blue-50 rounded-xl shadow-md p-6 w-full max-w-sm mx-auto border border-gray-300"
          >
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <img src="/icon-study.png" alt="icon" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{exam.name}</h3>
            </div>

            <div className="flex items-center text-sm text-gray-800 mb-2">
              <img src="/icon-rate.png" className="w-4 h-4 mr-2" />
              <span className="text-gray-600 mr-1">Success Rate:</span>
              <span className="text-green-600 font-medium">{STATIC_META.successRate}%</span>
            </div>

            <div className="flex items-center text-sm text-gray-800 mb-2">
              <img src="/icon-test.png" className="w-4 h-4 mr-2" />
              <span className="text-gray-600 mr-1">Tests Available:</span>
              <span className="font-medium">{STATIC_META.testSeriesCount}</span>
            </div>

            <div className="flex items-center text-sm text-gray-800 mb-4">
              <img src="/icon-callender.png" className="w-4 h-4 mr-2" />
              <span className="text-gray-600 mr-1">Last Attempt:</span>
              <span className="font-medium">{STATIC_META.lastAttempt}</span>
            </div>

            <button
              onClick={() => {
                router.push(`/category/${categoryId}/exams/${exam._id}`);
              }}
              className="w-full text-sm border border-blue-500 text-blue-600 py-2 rounded-md font-medium hover:bg-blue-100 transition"
            >
              Continue
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
