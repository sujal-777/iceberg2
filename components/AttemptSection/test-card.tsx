"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, TrendingUp, FileText, CheckCircle2, XCircle } from "lucide-react"
import { motion } from "framer-motion"

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

interface TestCardProps {
  examination: Examination
  index: number
  onClick: () => void
}

const testNames = [
  "Principles and Practice of Accounting",
  "Business Law & Business Correspondence",
  "Business Mathematics & Statistics",
  "Business Economics & Business Environment",
  "Comprehensive Test - Paper 1 & 2",
  "Comprehensive Test - Paper 3 & 4",
]

const subjectColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-green-600",
  "from-orange-500 to-orange-600",
  "from-pink-500 to-pink-600",
  "from-indigo-500 to-indigo-600",
]

export function TestCard({ examination, index, onClick }: TestCardProps) {
  const testName = testNames[index % testNames.length]
  const colorClass = subjectColors[index % subjectColors.length]
  const percentage = Math.round((examination.score / examination.totalMarks) * 100)
  const examDate = new Date(examination.examDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        <div className={`h-2 bg-gradient-to-r ${colorClass}`} />

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">{testName}</h3>
              <Badge variant={examination.status === "Passed" ? "default" : "destructive"} className="mb-3">
                {examination.status === "Passed" ? (
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                ) : (
                  <XCircle className="w-3 h-3 mr-1" />
                )}
                {examination.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <Target className="w-4 h-4 mr-2" />
                Score
              </div>
              <span className="font-semibold text-gray-900">
                {examination.score}/{examination.totalMarks}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <TrendingUp className="w-4 h-4 mr-2" />
                Percentage
              </div>
              <span className={`font-semibold ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>
                {percentage}%
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <FileText className="w-4 h-4 mr-2" />
                Questions
              </div>
              <span className="font-semibold text-gray-900">{examination.answers.length} answered</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Date
              </div>
              <span className="font-semibold text-gray-900">{examDate}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Descriptive: {examination.descriptiveAttempted} attempted</span>
              <span>Score: {examination.descriptiveScore}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
