// components/TestCardsSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


type Exam = {
  _id: string;
  title: string;
  testSeriesCount: number;
};

const allowedExamIds = [
  "682b7e3f506c24cdafbdeda8", // CA Foundation
  "6820b240788f162f4cd1f82c", // CA Intermediate
  "6820b254788f162f4cd1f82e", // CA Final
];

const examMetaData: Record<
  string,
  {
    successRate: number;
    lastAttempt: string;
  }
> = {
  "CA Foundation": {
    successRate: 78,
    lastAttempt: "12 May 2025",
  },
  "CA Intermediate": {
    successRate: 65,
    lastAttempt: "Not Attempted",
  },
  "CA Final": {
    successRate: 82,
    lastAttempt: "25 April 2025",
  },
};

const ExamCard = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get("/api/exams");
        const filtered = res.data.filter((exam: Exam) =>
          allowedExamIds.includes(exam._id)
        );
        setExams(filtered);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      }
    };

    fetchExams();
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 bg-white">


      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Explore Test Series
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exams.map((exam) => {
          const meta = examMetaData[exam.title] || {
            successRate: 75,
            lastAttempt: "Not Attempted",
          };

          return (
            <div
              key={exam._id}
              className="bg-blue-50 rounded-xl shadow-md p-6 w-full max-w-sm mx-auto border border-gray-300"
            >
              {/* Header */}
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <img src="/icon-study.png" alt="icon" className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {exam.title}
                </h3>
              </div>

              {/* Stats */}
              <div className="flex items-center text-sm text-gray-800 mb-2">
                <img src="/icon-rate.png" className="w-4 h-4 mr-2" />
                <span className="text-gray-600 mr-1">Success Rate:</span>
                <span className="text-green-600 font-medium">
                  {meta.successRate}%
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-800 mb-2">
                <img src="/icon-test.png" className="w-4 h-4 mr-2" />
                <span className="text-gray-600 mr-1">Tests Available:</span>
                <span className="font-medium">{exam.testSeriesCount}</span>
              </div>

              <div className="flex items-center text-sm text-gray-800 mb-4">
                <img src="/icon-callender.png" className="w-4 h-4 mr-2" />
                <span className="text-gray-600 mr-1">Last Attempt:</span>
                <span className="font-medium">{meta.lastAttempt}</span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  router.push(`/test-series/free-mock-test/ca-mock/${exam._id}`)
                }
                className="w-full text-sm border border-blue-500 text-blue-600 py-2 rounded-md font-medium hover:bg-blue-100 transition"
              >
                Continue
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExamCard;
