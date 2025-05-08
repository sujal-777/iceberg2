"use client";

import ImageSection from "@/components/testPage/imagesection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MockTestPlatform from "@/components/testPage/mock-test-platform";

interface Exam {
  _id: string;
  title: string;
  description?: string;
  createdAt: string;
}

export default function CAMock() {
  const [exams, setExams] = useState<Exam[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get("/api/exams");
        setExams(res.data);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      }
    };

    fetchExams();
  }, []);

  // Mocked local frontend data for now
  const examMetaData: Record<
    string,
    { successRate: number; testsAvailable: number; lastAttempt: string }
  > = {
    "CA Foundation": {
      successRate: 82,
      testsAvailable: 12,
      lastAttempt: "April 28, 2025",
    },
    "CA Intermediate": {
      successRate: 76,
      testsAvailable: 18,
      lastAttempt: "April 30, 2025",
    },
    "CA Final": {
      successRate: 71,
      testsAvailable: 15,
      lastAttempt: "April 25, 2025",
    },
  };

  return (
    <div className="flex flex-col w-full max-w-auto mx-auto">
      {/* Hero Section */}
      <ImageSection />

      {/* Main Content */}
      <div className="px-4 py-8 md:px-6">
        <MockTestPlatform />

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exams.map((exam) => {
            const meta = examMetaData[exam.title] || {
              successRate: 75,
              testsAvailable: 10,
              lastAttempt: "Not Attempted",
            };

            return (
              <div
                key={exam._id}
                className="bg-blue-50 rounded-xl shadow p-5 flex flex-col items-center"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    🎓
                  </div>
                  <h2 className="text-lg font-semibold">{exam.title}</h2>
                </div>

                <div className="text-sm text-gray-700 mb-1">
                  📈 <span className="font-medium">Success Rate:</span>{" "}
                  {meta.successRate}%
                </div>
                <div className="text-sm text-gray-700 mb-1">
                  🧪 <span className="font-medium">Tests Available:</span>{" "}
                  {meta.testsAvailable}
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  📅 <span className="font-medium">Last Attempt:</span>{" "}
                  {meta.lastAttempt}
                </div>

                <button
                  onClick={() => router.push(`/test-series/${exam._id}`)}
                  className="bg-white border border-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
                >
                  Continue
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
