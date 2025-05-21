'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function TestAttemptPage() {
  const { examId, testSeriesId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`http://localhost:5000/api/test-series/${testSeriesId}/questions`);
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    }
    if (testSeriesId) fetchQuestions();
  }, [testSeriesId]);

  return (
    <div className="px-4 py-6 md:px-8 lg:px-12">
      <h1 className="text-2xl font-bold mb-4">Test Attempt</h1>

      {loading ? (
        <p className="text-gray-500">Loading questions…</p>
      ) : questions.length === 0 ? (
        <p className="text-gray-500">No questions found for this test.</p>
      ) : (
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div
              key={q._id}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <p className="font-medium mb-2">
                {idx + 1}. {q.question}
              </p>

              {q.type === 'single' && q.options && (
                <ul className="space-y-2">
                  {q.options.map((opt) => (
                    <li key={opt._id}>
                      <label className="flex items-center gap-2">
                        <input type="radio" name={`q-${q._id}`} value={opt.key} />
                        <span>{opt.key}. {opt.text}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}

              {q.type === 'descriptive' && q.questionPDF && (
                <div className="mt-2">
                  <a
                    href={q.questionPDF.publicURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Descriptive Question PDF
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
