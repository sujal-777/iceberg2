"use client"

import { useState, useEffect } from "react"
import { TestCard } from "@/components/AttemptSection/test-card"
import { TestDetailModal } from "@/components/AttemptSection/test-detail-modal"
import { TestCardSkeleton } from "@/components/AttemptSection/test-card-skeleton"

interface Answer {
  questionId: string
  answer: string
}

interface Examination {
  testSeriesId: string
  totalMarks: number
  status: "Passed" | "Failed"
  answers: Answer[]
  examDate: string
  score: number
  descriptiveAttempted: number
  descriptiveNotAttempted: number
  descriptiveScore: number
  descriptiveTotal: number
}

interface UserExamData {
  id: string
  userId: string
  examinations: Examination[]
  createdAt: string
  updatedAt: string
}

export default function Dashboard() {
  const [examData, setExamData] = useState<UserExamData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedExam, setSelectedExam] = useState<Examination | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Mock data based on the provided structure
    const mockData: UserExamData = {
      id: "68a4823ce20d1a8798f7a58e",
      userId: "688e1e11bf29d6fd67771188",
      examinations: [
        {
          testSeriesId: "68690b00c6bece85820cb9d6",
          totalMarks: 100,
          status: "Failed",
          answers: [
            { questionId: "68690bb0c6bece85820cb9d9", answer: "Peacock" },
            { questionId: "68690c07d2d5d7ae393798fb", answer: "Oxygen" },
          ],
          examDate: "2025-08-19T14:29:31.964+00:00",
          score: 2,
          descriptiveAttempted: 3,
          descriptiveNotAttempted: 62,
          descriptiveScore: 156,
          descriptiveTotal: 65,
        },
        {
          testSeriesId: "68690b00c6bece85820cb9d7",
          totalMarks: 150,
          status: "Passed",
          answers: [
            { questionId: "68690bb0c6bece85820cb9da", answer: "Tiger" },
            { questionId: "68690c07d2d5d7ae393798fc", answer: "Carbon" },
          ],
          examDate: "2025-08-18T10:15:22.123+00:00",
          score: 85,
          descriptiveAttempted: 45,
          descriptiveNotAttempted: 20,
          descriptiveScore: 180,
          descriptiveTotal: 65,
        },
        {
          testSeriesId: "68690b00c6bece85820cb9d8",
          totalMarks: 200,
          status: "Passed",
          answers: [
            { questionId: "68690bb0c6bece85820cb9db", answer: "Eagle" },
            { questionId: "68690c07d2d5d7ae393798fd", answer: "Hydrogen" },
          ],
          examDate: "2025-08-17T16:45:10.456+00:00",
          score: 145,
          descriptiveAttempted: 58,
          descriptiveNotAttempted: 7,
          descriptiveScore: 220,
          descriptiveTotal: 65,
        },
      ],
      createdAt: "2025-08-19T13:55:08.823+00:00",
      updatedAt: "2025-08-20T08:51:05.455+00:00",
    }

    // Simulate API call
    setTimeout(() => {
      setExamData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  const handleCardClick = (exam: Examination) => {
    setSelectedExam(exam)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedExam(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="space-y-2">
              <div className="h-8 bg-gray-200 rounded-lg w-64 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-96 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TestCardSkeleton key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Dashboard</h1>
          <p className="text-gray-600">Track your test performance and view detailed results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examData?.examinations.map((exam, index) => (
            <TestCard key={exam.testSeriesId} examination={exam} index={index} onClick={() => handleCardClick(exam)} />
          ))}
        </div>

        {examData?.examinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No test results found</div>
            <p className="text-gray-500 mt-2">Complete some tests to see your results here</p>
          </div>
        )}
      </div>

      <TestDetailModal examination={selectedExam} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

