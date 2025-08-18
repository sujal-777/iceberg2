"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useUser } from "@clerk/nextjs";
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
  const params = useParams() as Record<string, string | undefined> | null;
  const examId = params?.examId;
  const testSeriesId = params?.testSeriesId;
  const categoryId = params?.categoryId;
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [testData, setTestData] = useState<any>(null);
const { user } = useUser();
  const userId = user?.id
  
localStorage.setItem("userId", String(userId));
  useEffect(() => {
    console.log(testSeriesId)
    async function fetchTestDetails() {
      try {
        const res = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/test-series/${testSeriesId}`);
        const data = await res.json();
        setTestData(data);
      } catch (err) {
        console.error('Error fetching test data:', err);
      }
    }
    if (testSeriesId) fetchTestDetails();
  }, [testSeriesId]);

  const handleBack = () => {
    router.back();
  };

  const handleStartExam = () => {
    if (!agreed) return;
    
    router.push(`/category/${categoryId}/exams/${examId}/attempt`);
    // console.log(userId, 'User ID for exam attempt'); // Log user ID for debugging
    // console.log(examId, 'Exam ID for attempt'); // Log exam ID for debugging
  };
// const handleStartExam = async () => {
//   if (!agreed) return;
//  console.log(userId, 'User ID for exam attempt'); // Log user ID for debugging
//     console.log(examId, 'Exam ID for attempt'); // Log exam ID for debugging
// console.log(testSeriesId, 'Test Series ID for exam attempt'); // Log test series ID for debugging
//   try {
//     // 1. Get user email from backend using clerkId (userId here is ClerkId)
//     const emailRes = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/auth/get-email/${userId}`);
//     const emailData = await emailRes.json();

//     if (!emailData.email) {
//       console.error("Email not found for this user");
//       return;
//     }
// console.log("User email:", emailData.email);
//     // 2. Apply for the test
//     const applyRes = await fetch("https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/apply/apply-test", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: emailData.email,
//         testId: testSeriesId, // ⚡ examId here should match your Test _id (not attempt id)
//       }),
//     });

//     const applyData = await applyRes.json();
//     console.log("Apply test response:", applyData);

//     // 3. Navigate to exam attempt page
//     if (applyRes.ok) {
//       router.push(`/category/${categoryId}/exams/${examId}/attempt`);
//     }
//   } catch (err) {
//     console.error("Error in handleStartExam:", err);
//   }
// };

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
          {testData?.name || 'Test Instructions'}
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-1.5 rounded-full">
              <Info className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Total Duration</div>
              <div>{testData?.duration || 0} Minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full border border-blue-300">
              <Keyboard className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Total Questions</div>
              <div>{testData?.numberOfQuestions || 0}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full border border-blue-300">
              <Menu className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Passing Marks</div>
              <div>{testData?.passingMarks || 0}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-100 p-1.5 rounded-full">
              <HelpCircle className="h-4 w-4 text-orange-600" />
            </div>
            <div className="text-xs">
              <div className="font-medium">Total Marks</div>
              <div>{testData?.totalMarks || 0}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <section>
          <h2 className="font-semibold mb-2">General Instructions</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>The total time allocated is <strong>{testData?.duration || 0} minutes</strong>.</li>
            <li>All questions are compulsory. There is no negative marking for wrong answers.</li>
            <li>The test consists of Multiple Choice Questions (MCQs).</li>
            <li>You can navigate between questions using the Next and Previous buttons.</li>
            <li>Your answers are automatically saved when you move to the next questions.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Marking Scheme</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Total Questions: {testData?.numberOfQuestions || 0}</li>
            <li>Each question carries 1 mark (or as specified).</li>
            <li>Total Marks: {testData?.totalMarks || 0}</li>
            <li>Passing Marks: {testData?.passingMarks || 0}</li>
          </ol>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Navigation Rules</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>You can navigate between questions using the Next and Previous Buttons.</li>
            <li>You can mark questions for review and revisit them later.</li>
            <li>The navigation panel shows all questions and allows quick navigation.</li>
            <li>Your completed questions will be saved.</li>
            <li>Once submitted, you cannot return to the test.</li>
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
