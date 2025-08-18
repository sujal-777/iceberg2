'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ImageSection from "@/components/testPage/imagesection";
import MockTestPlatform from "@/components/testPage/mock-test-platform";
import TestCard from "@/components/testPage/TestComponent/TestCard";


export default function PAGE() {
  const { examId } = useParams(); // this is your exam ID
  const [testSeries, setTestSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!examId) return;

    const fetchTestSeries = async () => {
      try {
        const res = await fetch(`https://icebreg-backend2.onrender.com/api/exams/${examId}/test-series`);
        const data = await res.json();
        setTestSeries(data);
      } catch (err) {
        console.error('Error fetching test series:', err);
      } finally {
        setLoading(false);
      }
    };

    if (examId) fetchTestSeries ();
  }, [examId]);

  return (
    <div className="overflow-hidden space-y-4">
      <ImageSection />
      <MockTestPlatform />

      {loading ? (
        <p className="text-center text-gray-600 py-4">Loading test series...</p>
      ) : testSeries.length === 0 ? (
        <p className="text-center text-gray-600 py-4">No test series found for this exam.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {testSeries.map(test => (
            <TestCard key={test._id} test={test} examId={examId} />
          ))}
        </div>
      )}
      <br />
      <br />
    </div>
  );
}
