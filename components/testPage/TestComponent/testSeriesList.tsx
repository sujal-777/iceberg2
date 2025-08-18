'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TestCard from './TestCard';

const TestSeriesList = () => {
  const params = useParams();
  const examId = params?.examId
    ? Array.isArray(params.examId)
      ? params.examId[0]
      : params.examId
    : undefined;
  const [testSeries, setTestSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestSeries = async () => {
      try {
        const res = await fetch("https://icebreg-backend2.onrender.com/api/test-series");
        const allTests = await res.json();

        const filtered = allTests.filter(
          (test: any) => test.examId?._id === examId
        );

        setTestSeries(filtered);
      } catch (err) {
        console.error("Failed to fetch test series:", err);
      } finally {
        setLoading(false);
      }
    };

    if (examId) fetchTestSeries();
  }, [examId]);

  return (
    <div className="py-10 px-4 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Available Test Series</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading test series...</p>
      ) : testSeries.length === 0 ? (
        <p className="text-center text-gray-500">No test series found for this exam.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testSeries.map((test) => (
            <TestCard key={test._id} test={test} categoryId={test.examId?.categoryId} examId={examId as string} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestSeriesList;
