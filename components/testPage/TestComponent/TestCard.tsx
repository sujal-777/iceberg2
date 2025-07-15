'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import React from 'react';

interface TestCardProps {
  test: any;
  categoryId: any;
  examId: string;
}

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

const TestCard = ({ test, categoryId, examId }: TestCardProps) => {
  const router = useRouter();
  const { user } = useUser();

  if (!test) return null;

  const {
    _id: testSeriesId,
    name,
    duration,
    numberOfQuestions,
    totalMarks,
    createdDate,
  } = test;

  const formattedDate = new Date(createdDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const handleStart = () => {
  if (!user) {
    router.push('/login');
  } else {
    router.push(`/category/${categoryId}/exams/${examId}/instruction`);
  }
};


  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border p-5 shadow-md hover:shadow-lg transition-all mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="text-xs px-2 py-[2px] rounded-full bg-gray-200 text-gray-700">Not Started</span>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-700 mt-4">
        <div className="flex items-center gap-2">
          <img src={icons.duration} alt="Duration" className="w-6 h-6" />
          <span>{duration} Min</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span>Beginner</span>
          <img src={icons.level} alt="Level" className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2">
          <img src={icons.questions} alt="Questions" className="w-6 h-6" />
          <span>{numberOfQuestions} Questions</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span>{totalMarks} Marks</span>
          <img src={icons.marks} alt="Marks" className="w-6 h-6" />
        </div>
      </div>

      <div className="text-sm text-gray-500 flex items-center gap-2 mt-4">
        <img src={icons.calendar} alt="Calendar" className="w-6 h-6" />
        <span>{formattedDate}</span>
      </div>

      <button
        onClick={handleStart}
        className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all"
      >
        Start Now
      </button>
    </div>
  );
};

export default TestCard;
