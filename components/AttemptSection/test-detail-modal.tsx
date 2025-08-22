"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Target, FileText, CheckCircle2, XCircle, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

interface TestDetailModalProps {
  examination: Examination | null
  isOpen: boolean
  onClose: () => void
}

const testNames = [
  "Principles and Practice of Accounting",
  "Business Law & Business Correspondence",
  "Business Mathematics & Statistics",
  "Business Economics & Business Environment",
  "Comprehensive Test - Paper 1 & 2",
  "Comprehensive Test - Paper 3 & 4",
]

export function TestDetailModal({ examination, isOpen, onClose }: TestDetailModalProps) {
  if (!examination) return null

  const percentage = Math.round((examination.score / examination.totalMarks) * 100)
  const descriptivePercentage = Math.round((examination.descriptiveScore / examination.descriptiveTotal) * 100)
  const testName = testNames[Math.floor(Math.random() * testNames.length)]

  const examDate = new Date(examination.examDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const examTime = new Date(examination.examDate).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Test Results Details</DialogTitle>
        </DialogHeader>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Header Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{testName}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {examDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {examTime}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={examination.status === "Passed" ? "default" : "destructive"}
                    className="text-sm px-3 py-1"
                  >
                    {examination.status === "Passed" ? (
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                    ) : (
                      <XCircle className="w-4 h-4 mr-1" />
                    )}
                    {examination.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{examination.score}</div>
                    <div className="text-sm text-gray-600">Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{examination.totalMarks}</div>
                    <div className="text-sm text-gray-600">Total Marks</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>
                      {percentage}%
                    </div>
                    <div className="text-sm text-gray-600">Percentage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{examination.answers.length}</div>
                    <div className="text-sm text-gray-600">Answered</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Objective Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Score Progress</span>
                    <span className="text-sm font-semibold">
                      {examination.score}/{examination.totalMarks}
                    </span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Questions Answered</div>
                      <div className="font-semibold">{examination.answers.length}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Accuracy</div>
                      <div className="font-semibold">{percentage}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                    Descriptive Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Score Progress</span>
                    <span className="text-sm font-semibold">
                      {examination.descriptiveScore}/{examination.descriptiveTotal}
                    </span>
                  </div>
                  <Progress value={descriptivePercentage} className="h-3" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Attempted</div>
                      <div className="font-semibold">{examination.descriptiveAttempted}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Not Attempted</div>
                      <div className="font-semibold">{examination.descriptiveNotAttempted}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Answers Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  Your Answers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examination.answers.map((answer, index) => (
                    <motion.div
                      key={answer.questionId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Question ID</div>
                          <div className="font-mono text-xs text-gray-500">{answer.questionId}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Your Answer</div>
                        <div className="font-semibold text-gray-900">{answer.answer}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
