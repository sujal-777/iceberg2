// app/free-mock-test/ca-mock/[examId]/[testSeriesId]/instructions/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ChevronLeft,
  HelpCircle,
  Info,
  Keyboard,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function ExamInstructionsPage() {
  const { examId, testSeriesId } = useParams(); 
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [testTitle, setTestTitle] = useState('');

  useEffect(() => {
    async function fetchTitle() {
      try {
        const res = await fetch(`https://icebreg-backend2.onrender.com/api/test-series/${testSeriesId}`);
        const data = await res.json();
        setTestTitle(data.title || 'Test Instructions');
      } catch (err) {
        console.error('Error fetching test title:', err);
        setTestTitle('Test Instructions');
      }
    }
    if (testSeriesId) fetchTitle();
  }, [testSeriesId]);

  const handleBack = () => {
    router.back();
  };

  const handleStartExam = () => {
    if (!agreed) return;
    router.push(`/test-series/free-mock-test/ca-mock/${examId}/${testSeriesId}/attempt`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Instructions</h2>
      </div>

      <div className="bg-blue-100 p-4">
        <h1 className="text-lg font-semibold mb-4">
          {testTitle}
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-1.5 rounded-full">
              <Info className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Student</div>
              <div>Profile</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full border border-blue-300">
              <Keyboard className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Keyboard</div>
              <div>Shortcuts</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full border border-blue-300">
              <Menu className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Test Menu</div>
              <div>Options</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-100 p-1.5 rounded-full">
              <HelpCircle className="h-4 w-4 text-orange-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Help</div>
              <div>Center</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Put your instruction sections here (General, Marking, etc.) */}
        <section>
          <h2 className="font-semibold mb-2">General Instructions</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>The total time allocated is <strong>180 minutes</strong> and is to be completed in 3 hours.</li>
            <li>All questions are compulsory. There is no negative marking for wrong answers.</li>
            <li>The test consists of both Multiple Choice Questions (MCQ) and Descriptive Questions.</li>
            <li>You can navigate between questions using the Next and Previous buttons.</li>
            <li>Your answers are automatically saved when you move to the next questions.</li>
          </ol>
        </section>
        <section>
          <h2 className="font-semibold mb-2">
            The question palette at the right of screen shows the status of the following statuses of each of the
            questions numbered:
          </h2>
          <ul className="space-y-2 pl-6 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>You have not answered the question yet</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>You have answered the question</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>You have answered the question but marked it for review</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>You have not solved the question yet</span>
            </li>
          </ul>
          <p className="text-xs mt-2 pl-6">
            The Marked for Review status simply acts as a reminder that you have set to look at the question again.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Marking Scheme</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Each MCQ carries 1 mark. Total MCQs: 80 questions (80 marks).</li>
            <li>Each Descriptive Question carries 10 marks. Total Descriptive Questions: 12 questions (120 marks).</li>
            <li>The passing grade is 70% marks (140).</li>
            <li>Partial marking is applicable for descriptive questions.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Instructions for Descriptive Questions</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Answer all questions in your own handwriting. Use only blue or black ink pens.</li>
            <li>
              Start each answer on a new page. Write the beginning of each answer. Ensure written without proper
              numbering may not be evaluated.
            </li>
            <li>
              Be concise and to the point. Marks are awarded based on relevance, clarity and logical presentation.
            </li>
            <li>Avoid unnecessary elaboration.</li>
            <li>If question has multiple parts (a, b, c, etc), answer them together in sequence.</li>
            <li>
              If question has multiple sections (assumptions, calculations, conclusions, etc.), Section of the Act,
              Rules, etc. should be mentioned wherever applicable.
            </li>
            <li>
              Use proper headings, formats, and tables for practical problems (like journal entries, balance sheets,
              etc.).
            </li>
            <li>Attempt all questions in a neat style in numerical order.</li>
            <li>Write legibly. Illegible handwriting may lead to loss of marks.</li>
            <li>Do not write your roll number or any identification other than the Roll No. as per instructions.</li>
            <li>Follow the word limits (if specified) and manage your time wisely during the exam.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Navigation Rules</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>You can navigate between questions using the Next and Previous Buttons.</li>
            <li>You can mark questions for review and revisit them later.</li>
            <li>The navigation panel on the left shows all questions and allows panel navigation.</li>
            <li>You can revisit the test at any time. Your completed questions will be saved in order.</li>
            <li>Once submitted, you cannot return to the test.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Technical Requirements</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Ensure you have a reliable internet connection throughout the test.</li>
            <li>Do not refresh the page or navigate away during the test.</li>
            <li>Enable JavaScript and cookies in your browser.</li>
            <li>Disable any pop-up blockers that might interfere with the test.</li>
            <li>Use the on-screen keyboard in the pop-up if needed.</li>
          </ol>
        </section>
      </div>

      <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="agreement"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(!!checked)}
          />
          <label htmlFor="agreement" className="text-sm">
            I have read and agree to the instructions
          </label>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => router.push(`/test-series/free-mock-test/ca-mock/${examId}`)}
          >
            Back to Tests
          </Button>
          <Button
            disabled={!agreed}
            onClick={handleStartExam}
          >
            Start Exam
          </Button>
        </div>
      </div>
    </div>
  );
}
