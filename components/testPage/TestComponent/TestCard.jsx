// components/testPage/TestComponent/TestCard.jsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const icons = {
  duration: '/icon-5.png',
  questions: '/icon-8.png',
  marks: '/icon-6.png',
  level: '/icon-9.png',
  attempts: '/icon-10.png',
  score: '/icon-7.png',
  progress: '/icon-11.png',
  calendar: '/icon-10.png',
};

const statusStyles = {
  completed: 'bg-green-100 text-green-700',
  'in-progress': 'bg-yellow-100 text-yellow-700',
  'not-started': 'bg-gray-200 text-gray-700',
};

const TestCard = ({ test, examId }) => {
  const router = useRouter();
  const {
    _id: testSeriesId,
    title,
    duration,
    totalQuestions,
    totalMarks,
    level,
    createdAt,
  } = test;

  const status = 'completed'; // Placeholder
  const score = 156;          // Placeholder
  const progress = 65;        // Placeholder
  const attempts = 1245;      // Placeholder

  const formattedDate = new Date(createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handleStart = () => {
    // Navigate to the instruction page for this specific testSeriesId under its examId
    router.push(`/test-series/free-mock-test/ca-mock/${examId}/${testSeriesId}/instruction`);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-[360px] bg-white rounded-2xl border p-5 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-5 mx-auto sm:mx-0">
      
      {/* Title & Status */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 leading-snug">
          {title}
        </h2>
        <span className={`text-xs px-2 py-[2px] rounded-full font-medium capitalize ${statusStyles[status]}`}>
          {status.replace('-', ' ')}
        </span>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[15px] text-gray-700">
        <div className="flex items-center gap-2">
          <img src={icons.duration} alt="Duration" className="w-7 h-7" />
          <span>{duration} Min</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span>{level}</span>
          <img src={icons.level} alt="Level" className="w-7 h-7" />
        </div>

        <div className="flex items-center gap-2">
          <img src={icons.questions} alt="Questions" className="w-7 h-7" />
          <span>{totalQuestions} Questions</span>
        </div>
        {status === 'completed' && (
          <div className="flex items-center justify-end gap-2">
            <span>{score}/{totalMarks} Score</span>
            <img src={icons.score} alt="Score" className="w-7 h-7" />
          </div>
        )}
        {status === 'in-progress' && (
          <div className="flex items-center justify-end gap-2">
            <span>{progress}% Done</span>
            <img src={icons.progress} alt="Progress" className="w-7 h-7" />
          </div>
        )}
        {status === 'not-started' && (
          <div className="flex items-center justify-end gap-2">
            <span>{attempts} Attempts</span>
            <img src={icons.attempts} alt="Attempts" className="w-7 h-7" />
          </div>
        )}

        <div className="flex items-center gap-2">
          <img src={icons.marks} alt="Marks" className="w-7 h-7" />
          <span>{totalMarks} Marks</span>
        </div>
      </div>

      {/* Date */}
      <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
        <img src={icons.calendar} alt="Calendar" className="w-7 h-7" />
        <span>{formattedDate}</span>
      </div>

      {/* CTA - Now Routes Correctly */}
      <button
        onClick={handleStart}
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all text-base"
      >
        Start Now
      </button>
    </div>
  );
};

export default TestCard;
