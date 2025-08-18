// "use client";
// import { useState } from "react";
// import { FaToggleOn, FaToggleOff } from "react-icons/fa";
// import { IoSync } from "react-icons/io5";
// import Image from "next/image";

// import { MdKeyboardArrowLeft ,MdKeyboardArrowRight } from "react-icons/md";
// import { LuZoomIn } from "react-icons/lu";
// import { BsZoomOut } from "react-icons/bs";
// import { MdCropRotate } from "react-icons/md";

// export default function ExamPage() {
//   const [selectedTab, setSelectedTab] = useState<"mcq" | "descriptive">("mcq");
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [file, setFile] = useState<File | null>(null);

//   // Separate toggles for MCQ and Descriptive
//   const [isToggledMCQ, setIsToggledMCQ] = useState(false);
//   const [isToggledDescriptive, setIsToggledDescriptive] = useState(false);

//   const toggleMCQ = () => setIsToggledMCQ((prev) => !prev);
//   const toggleDescriptive = () => setIsToggledDescriptive((prev) => !prev);

//   const options = [
//     "National Highway Authority of India (NHAI) or Rural Electrification Corporation (REC)",
//     "Power Finance Corporation Limited (PFC) or Indian Railway Finance Corporation Limited (IRFC)",
//     "National Bank for Agriculture and Rural Development (NABARD) or Small Industries Development Bank of India (SIDBI)",
//     "All of the Above",
//   ];

//   const questionPalette = Array.from({ length: 80 }, (_, i) => i + 1);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-100 font-sans gap-4">
//       {/* Left Section */}
//       <div className="w-full lg:w-[70%] bg-white p-6 rounded-[10px] shadow-2xl border border-black min-h-[90vh]">
//         {selectedTab === "mcq" ? (
//           <>
//             <div className="text-sm text-gray-600 mb-2">Questions 12 of 100</div>
//             <div className="text-md mb-4">
//               <strong className="text-blue-700 mr-2">12</strong>
//               Under section 54EC of the Income Tax Act, exemption is available if
//               investment is made in bonds issued by:
//             </div>

//             <form className="space-y-4">
//               {options.map((option, index) => (
//                 <label
//                   key={index}
//                   className="flex items-start space-x-2 cursor-pointer border rounded px-4 py-2 hover:bg-gray-100"
//                 >
//                   <input
//                     type="radio"
//                     name="answer"
//                     value={option}
//                     checked={selectedOption === option}
//                     onChange={() => setSelectedOption(option)}
//                     className="mt-1"
//                   />
//                   <span>{option}</span>
//                 </label>
//               ))}
//             </form>

//             {/* Action Row */}
//             <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//               {/* Mark & Clear */}
//               <div className="flex items-center gap-4">
//                 <label
//                   className="flex items-center space-x-2 text-gray-700 cursor-pointer"
//                   onClick={toggleMCQ}
//                 >
//                   {isToggledMCQ ? (
//                     <FaToggleOn className="text-blue-600" size={35} />
//                   ) : (
//                     <FaToggleOff className="text-gray-300" size={35} />
//                   )}
//                   <span>{isToggledMCQ ? "Marked for review" : "Mark for review"}</span>
//                 </label>

//                 <button className="flex items-center space-x-2">
//                   <IoSync className="text-lg text-gray-300" size={35} />
//                   <span>Clear response</span>
//                 </button>
//               </div>

//               {/* Navigation */}
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border border-blue-600 rounded-[10px] text-gray-700">
//                   Previous
//                 </button>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-[10px]">
//                   Save & Next
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="flex flex-col items-center">
//               <div className="w-full flex justify-center mb-4">
//                 <img
//                   src="/Exam.png"
//                   alt="Descriptive Question"
//                   className="w-[300px] border rounded shadow"
//                 />
//               </div>

//               <div className="bg-blue-600 h-auto w-[300px] flex items-center justify-center gap-2 text-white text-sm px-2 py-2 rounded-[10px]">
//               <MdKeyboardArrowLeft size={30} className="hover:cursor-pointer"/> 2 /5  <MdKeyboardArrowRight size={30} className="hover:cursor-pointer"/> <LuZoomIn size={20} className="hover:cursor-pointer"/> <BsZoomOut size={20} className="hover:cursor-pointer"/> <MdCropRotate size={20} className="hover:cursor-pointer"/>

//               </div>
//             </div>

//             {/* Action Row for Descriptive */}
//             <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//               {/* Mark & Clear */}
//               <div className="flex items-center gap-4">
//                 <label
//                   className="flex items-center space-x-2 text-gray-700 cursor-pointer"
//                   onClick={toggleDescriptive}
//                 >
//                   {isToggledDescriptive ? (
//                     <FaToggleOn className="text-blue-600" size={35} />
//                   ) : (
//                     <FaToggleOff className="text-gray-300" size={35} />
//                   )}
//                   <span>
//                     {isToggledDescriptive ? "Marked for review" : "Mark for review"}
//                   </span>
//                 </label>

//                 <button className="flex items-center space-x-2">
//                   <IoSync className="text-lg text-gray-300" size={35} />
//                   <span>Clear response</span>
//                 </button>
//               </div>

//               {/* Navigation */}
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border border-blue-600 rounded-[10px] text-gray-700">
//                   Previous
//                 </button>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-[10px]">
//                   Save & Next
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-[30%] p-4 bg-white rounded-[10px] border border-black shadow-2xl min-h-[90vh] flex flex-col justify-between">
//         <div>
//           {/* Tabs */}
//           <div className="flex w-full mb-4 gap-1 rounded-[10px] overflow-hidden border border-black">
//             <button
//               className={`w-1/2 px-4 py-2 text-sm font-medium ${
//                 selectedTab === "mcq"
//                   ? "bg-blue-600 text-white rounded-[10px]"
//                   : "bg-gray-200 text-gray-800 rounded-[10px]"
//               }`}
//               onClick={() => setSelectedTab("mcq")}
//             >
//               MCQ questions
//             </button>
//             <button
//               className={`w-1/2 px-4 py-2 text-sm font-medium ${
//                 selectedTab === "descriptive"
//                   ? "bg-blue-600 text-white rounded-[10px]"
//                   : "bg-gray-200 text-gray-800 rounded-[10px]"
//               }`}
//               onClick={() => setSelectedTab("descriptive")}
//             >
//               Descriptive questions
//             </button>
//           </div>

//           {/* Tab Content */}
//           {selectedTab === "mcq" ? (
//             <div className="grid grid-cols-8 gap-2 text-center text-sm mb-4">
//               {questionPalette.map((num) => {
//                 const baseStyle =
//                   "w-8 h-8 rounded-[10px] flex items-center justify-center font-medium";

//                 let bg = "bg-gray-500 text-white";
//                 if ([1, 2, 3].includes(num)) bg = "bg-green-500 text-white";
//                 if ([4, 5, 6].includes(num)) bg = "bg-red-500 text-white";
//                 if ([9, 10].includes(num)) bg = "bg-purple-600 text-white";

//                 return (
//                   <div key={num} className={`${baseStyle} ${bg}`}>
//                     {num}
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mt-4 space-y-4">
//               {file && (
//                 <div className="flex items-center justify-between p-2 border border-blue-400 rounded bg-blue-600/20">
//                   <div className="flex items-center gap-2">
//                     <Image
//                       src={"/PDF_IMG.png"}
//                       height={100}
//                       width={100}
//                       className="h-[50px] w-[50px]"
//                       alt="pdf-image"
//                     />
//                     <span className="text-sm">{file.name}</span>
//                   </div>
//                   <span className="text-xs text-gray-500">
//                     {(file.size / (1024 * 1024)).toFixed(2)} MB
//                   </span>
//                 </div>
//               )}
//               <div className="mt-20">
//                 <h1 className="text-black ">Submit your answer PDF here</h1>
//               </div>

//               <div className="border-2 border-dashed border-black p-6 text-center h-auto py-10">
//                 <p className="text-sm text-gray-600 mb-2">Drag & Drop your file here</p>
//                 <p className="text-gray-500 mb-2">OR</p>
//                 <label className="inline-block px-4 py-2 bg-[#0048B0] text-white rounded-[10px] cursor-pointer">
//                   Select File
//                   <input
//                     type="file"
//                     accept="application/pdf"
//                     onChange={handleFileChange}
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>

//         <button className="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600  rounded">
//           Submit Examination
//         </button>
//       </div>
//     </div>
//   );
// }




"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

import { useUser } from "@clerk/nextjs";
import {
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Upload,
  File,
  X,
  FileText,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

import { useRouter } from "next/navigation";
interface Question {
  _id: string
  question: string
  correctAnswer: string
  options: string[]
  marks: number
}

interface QuestionStatus {
  answered: boolean
  marked: boolean
  visited: boolean
}

interface PdfResponse {
  pdfUrl: string
}

export default function MockTestPage() {
  const router = useRouter();
  // Get URL parameters
  const searchParams = useSearchParams()
  const testSeriesId = searchParams?.get("testSeriesId") || "68690b00c6bece85820cb9d6"

  // State management
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState<"mcq" | "descriptive">("mcq")
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [questionStatus, setQuestionStatus] = useState<Record<string, QuestionStatus>>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)

  // PDF related state
  const [pdfUrl, setPdfUrl] = useState<string>("")
  const [pdfLoading, setPdfLoading] = useState(false)
  const [pdfError, setPdfError] = useState<string>("")
  const [currentPdfPage, setCurrentPdfPage] = useState(1)
  const [totalPdfPages, setTotalPdfPages] = useState(5) // Default, will be updated when PDF loads
  const [pdfZoom, setPdfZoom] = useState(100)

  // Timer state (3 hours = 10800 seconds)
  const [timeLeft, setTimeLeft] = useState(10800)

  // File upload ref
  const fileInputRef = useRef<HTMLInputElement>(null)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0

  // Timer Component
  const Timer = ({ timeLeft }: { timeLeft: number }) => {
    const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      const secs = seconds % 60
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const isLowTime = timeLeft < 600 // Less than 10 minutes

    return (
      <Badge variant={isLowTime ? "destructive" : "secondary"} className="text-xl px-4 py-2 font-bold">
        {formatTime(timeLeft)}
      </Badge>
    )
  }

  // Question Palette Component
  const QuestionPalette = () => {
    const getQuestionColor = (question: Question, index: number) => {
      const status = questionStatus[question._id]
      const isAnswered = !!answers[question._id]
      const isCurrent = index === currentQuestionIndex

      if (isCurrent) return "bg-blue-600 text-white"
      if (status?.marked) return "bg-purple-600 text-white"
      if (isAnswered) return "bg-green-500 text-white"
      if (status?.visited) return "bg-red-500 text-white"
      return "bg-gray-500 text-white"
    }

    return (
      <div className="grid grid-cols-8 gap-2 text-center text-sm">
        {questions.map((question, index) => (
          <Button
            key={question._id}
            onClick={() => handleQuestionSelect(index)}
            className={`w-8 h-8 p-0 text-xs font-medium rounded-lg ${getQuestionColor(question, index)} hover:opacity-80`}
            variant="secondary"
          >
            {index + 1}
          </Button>
        ))}
      </div>
    )
  }

  // File Upload Area Component
  const FileUploadArea = () => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedFiles([...selectedFiles, e.target.files[0]])
      }
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        setSelectedFiles([...selectedFiles, ...Array.from(e.dataTransfer.files)])
      }
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(true)
    }

    const handleDragLeave = () => {
      setIsDragging(false)
    }

    const removeFile = (index: number) => {
      setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
    }

    return (
      <div className="space-y-4">
        {/* PDF Info Display */}
        {pdfUrl && (
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-900">Question PDF</p>
                <p className="text-sm text-blue-700">Descriptive Question Document</p>
              </div>
            </div>
          </Card>
        )}

        {/* File Display */}
        {selectedFiles.map((file, index) => (
          <Card key={index} className="flex items-center justify-between p-3 border border-blue-400 bg-blue-50">
            <div className="flex items-center gap-3">
              <File className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeFile(index)}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </Card>
        ))}

        {/* Upload Instructions */}
        <div className="mt-8">
          <h3 className="text-black font-medium mb-4">Submit your answer PDF here</h3>
        </div>

        {/* Upload Area */}
        <Card
          className={`border-2 border-dashed border-black p-6 text-center cursor-pointer transition-colors ${
            isDragging ? "bg-blue-50 border-blue-400" : ""
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            multiple
          />

          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-sm text-gray-600 mb-2">Drag & Drop your file here</p>
          <p className="text-gray-500 mb-4">OR</p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Select File</Button>

          <p className="text-xs text-gray-500 mt-2">Upload your file here</p>
        </Card>
      </div>
    )
  }

  // Fetch PDF URL for descriptive questions
  const fetchPdfUrl = async () => {
    try {
      setPdfLoading(true)
      setPdfError("")

      const response = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/test-series/${testSeriesId}/pdf-url`)

      if (!response.ok) {
        throw new Error("Failed to fetch PDF URL")
      }

      const data: PdfResponse = await response.json()
      setPdfUrl(data.pdfUrl)

      toast({
        title: "PDF Loaded",
        description: "Question PDF has been loaded successfully.",
      })
    } catch (error) {
      console.error("Error fetching PDF URL:", error)
      setPdfError("Failed to load PDF. Please try again.")
      toast({
        title: "Error",
        description: "Failed to load question PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setPdfLoading(false)
    }
  }

  // PDF Navigation Functions
  const handlePdfPrevPage = () => {
    if (currentPdfPage > 1) {
      setCurrentPdfPage((prev) => prev - 1)
    }
  }

  const handlePdfNextPage = () => {
    if (currentPdfPage < totalPdfPages) {
      setCurrentPdfPage((prev) => prev + 1)
    }
  }

  const handleZoomIn = () => {
    setPdfZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setPdfZoom((prev) => Math.max(prev - 25, 50))
  }

  const handleRotate = () => {
    // This would typically rotate the PDF view
    toast({
      title: "Rotate",
      description: "PDF rotation feature will be implemented.",
    })
  }

// const { user } = useUser();
//   const userId = user?.id
  
  // Fetch questions on component mount
  useEffect(() => {
    const userId = localStorage.getItem("userId");
console.log(userId);

    console.log(testSeriesId , "new/attempt")
    // apply for test 
 const handleStartExam = async () => {
  console.log(userId)

 console.log(userId, 'User ID for exam attempt'); // Log user ID for debugging
console.log(testSeriesId, 'Test Series ID for exam attempt'); // Log test series ID for debugging
  try {
    // 1. Get user email from backend using clerkId (userId here is ClerkId)
    const emailRes = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/auth/get-email/${userId}`);
    const emailData = await emailRes.json();

    if (!emailData.email) {
      console.error("Email not found for this user");
      
      return;
    }
    
localStorage.setItem("user_Id", String(emailData.userId));
console.log("User _id:", emailData.userId);
    // 2. Apply for the test
    const applyRes = await fetch("https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/apply/apply-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailData.email,
        testId: testSeriesId, // ⚡ examId here should match your Test _id (not attempt id)
      }),
    });

    const applyData = await applyRes.json();
    console.log("Apply test response:", applyData);
  } catch (err) {
    console.error("Error in handleStartExam:", err);
  }
};
handleStartExam();
  // end apply for test 
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/test-series/${testSeriesId}/questions`)

        if (!response.ok) {
          throw new Error("Failed to fetch questions")
        }

        const data = await response.json()
        setQuestions(data)

        // Initialize question status
        const initialStatus: Record<string, QuestionStatus> = {}
        data.forEach((q: Question) => {
          initialStatus[q._id] = {
            answered: false,
            marked: false,
            visited: false,
          }
        })
        setQuestionStatus(initialStatus)
      } catch (error) {
        console.error("Error fetching questions:", error)
        toast({
          title: "Error",
          description: "Failed to load questions. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    if (testSeriesId) {
      fetchQuestions()
    }
  }, [testSeriesId])

  // Fetch PDF when switching to descriptive tab
  useEffect(() => {
    if (selectedTab === "descriptive" && !pdfUrl && !pdfLoading) {
      fetchPdfUrl()
    }
  }, [selectedTab, pdfUrl, pdfLoading, testSeriesId])

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Auto-submit when time runs out
          handleSubmitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mark question as visited when navigating
  useEffect(() => {
    if (currentQuestion && !questionStatus[currentQuestion._id]?.visited) {
      setQuestionStatus((prev) => ({
        ...prev,
        [currentQuestion._id]: {
          ...prev[currentQuestion._id],
          visited: true,
        },
      }))
    }
  }, [currentQuestion, questionStatus])

  // Fetch individual question (optional - for detailed view)
  const fetchIndividualQuestion = async (questionId: string) => {
    try {
      const response = await fetch(`https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/test-series/${testSeriesId}/questions/${questionId}`)
      if (response.ok) {
        const questionData = await response.json()
        console.log("Individual question data:", questionData)
        return questionData
      }
    } catch (error) {
      console.error("Error fetching individual question:", error)
    }
  }

  const handleOptionSelect = (option: string) => {
    if (!currentQuestion) return

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion._id]: option,
    }))

    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestion._id]: {
        ...prev[currentQuestion._id],
        answered: true,
      },
    }))
  }

  const handleMarkForReview = () => {
    if (!currentQuestion) return

    const currentStatus = questionStatus[currentQuestion._id]
    if (!currentStatus?.answered) {
      toast({
        title: "Warning",
        description: "Please select an option before marking for review.",
        variant: "destructive",
      })
      return
    }

    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestion._id]: {
        ...prev[currentQuestion._id],
        marked: !prev[currentQuestion._id]?.marked,
      },
    }))
  }

  const handleClearResponse = () => {
    if (!currentQuestion) return

    setAnswers((prev) => {
      const newAnswers = { ...prev }
      delete newAnswers[currentQuestion._id]
      return newAnswers
    })

    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestion._id]: {
        ...prev[currentQuestion._id],
        answered: false,
        marked: false,
      },
    }))
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (selectedTab === "mcq") {
      if (!answers[currentQuestion._id]) {
        toast({
          title: "Warning",
          description: "Please select an option before proceeding.",
          variant: "destructive",
        })
        return
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index)
    // Optionally fetch individual question details
    if (questions[index]) {
      fetchIndividualQuestion(questions[index]._id)
    }
  }

  // const handleSubmitExam = async () => {
  //   try {
  //     setSubmitting(true)

  //     // Prepare submission data
  //     const submissionData = {
  //       testSeriesId,
  //       answers,
  //       questionStatus,
  //       selectedFiles: selectedFiles.map((f) => f.name), // File names for reference
  //       timeSpent: 10800 - timeLeft,
  //       submittedAt: new Date().toISOString(),
  //     }

  //     console.log("Submitting exam with data:", submissionData)

  //     // Here you would typically send to your submission API
  //     // const response = await fetch('/api/submit-exam', {
  //     //   method: 'POST',
  //     //   headers: { 'Content-Type': 'application/json' },
  //     //   body: JSON.stringify(submissionData)
  //     // })

  //     toast({
  //       title: "Exam Submitted",
  //       description: "Your exam has been submitted successfully!",
  //     })

  //     // Redirect to results or confirmation page
  //     // window.location.href = '/exam-results'
  //   } catch (error) {
  //     console.error("Submission error:", error)
  //     toast({
  //       title: "Error",
  //       description: "Failed to submit exam. Please try again.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setSubmitting(false)
  //   }
  // }
const handleSubmitExam = async () => {
  try {
    setSubmitting(true);

    // ✅ Get userId from localStorage
    const userId = localStorage.getItem("user_Id");

    if (!userId) {
      toast({
        title: "Error",
        description: "User ID not found. Please login again.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Prepare submission JSON
    const submissionData = {
      userId,
      testId: testSeriesId, // using testSeriesId as your backend expects testId
      answers, // already an array of answers
    };

    console.log("Submitting exam with data:", submissionData);

    // ✅ Call backend
    const response = await fetch("https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/apply/submit-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();
    console.log("Submit response:", result);

    if (response.ok) {
      toast({
        title: "Exam Submitted",
        description: `Your exam has been submitted successfully! Score: ${result.score}`,
      });

      // Redirect to results page
      router.push(`/`)
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to submit exam.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Submission error:", error);
    toast({
      title: "Error",
      description: "Failed to submit exam. Please try again.",
      variant: "destructive",
    });
  } finally {
    setSubmitting(false);
  }
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="p-6">
          <p className="text-gray-600">No questions found for this test.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Timer */}
        <div className="flex justify-end mb-4">
          <Timer timeLeft={timeLeft} />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Section - Question Display */}
          <div className="flex-1 lg:w-[70%]">
            <Card className="border-2 border-black shadow-2xl min-h-[600px]">
              <CardContent className="p-6">
                {selectedTab === "mcq" ? (
                  <>
                    {/* Question Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-600">
                        Questions {currentQuestionIndex + 1} of {questions.length}
                      </div>
                      <div className="text-sm text-gray-400">Progress: {Math.round(progress)}%</div>
                    </div>

                    {/* Progress Bar */}
                    <Progress value={progress} className="mb-6" />

                    {/* Question */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Badge className="bg-blue-600 text-white min-w-[2rem] h-8 flex items-center justify-center text-lg">
                          {currentQuestionIndex + 1}
                        </Badge>
                        <h2 className="text-lg font-medium leading-relaxed">{currentQuestion?.question}</h2>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 ml-11">
                        Select the correct option from the choices below
                      </p>
                    </div>

                    {/* Options */}
                    <div className="space-y-3 mb-8 ml-11">
                      {currentQuestion?.options.map((option, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-300 ${
                            answers[currentQuestion._id] === option ? "border-blue-500 bg-blue-50" : "border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full border-2 ${
                                answers[currentQuestion._id] === option
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-400"
                              }`}
                            >
                              {answers[currentQuestion._id] === option && (
                                <div className="w-full h-full rounded-full bg-white scale-50"></div>
                              )}
                            </div>
                            <span className="text-sm">{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={questionStatus[currentQuestion._id]?.marked || false}
                            onCheckedChange={handleMarkForReview}
                          />
                          <span className="text-sm">
                            {questionStatus[currentQuestion._id]?.marked ? "Marked for review" : "Mark for review"}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          onClick={handleClearResponse}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <RotateCcw className="h-4 w-4" />
                          Clear response
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={handlePrevious}
                          disabled={currentQuestionIndex === 0}
                          className="border-blue-600 text-blue-600 bg-transparent"
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={currentQuestionIndex === questions.length - 1}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Save & Next
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Descriptive Question View */}
                    <div className="flex flex-col items-center">
                      <div className="w-full flex justify-center mb-4">
                        {pdfLoading ? (
                          <div className="flex items-center justify-center h-96 w-full border rounded bg-gray-100">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                              <p className="text-gray-600">Loading PDF...</p>
                            </div>
                          </div>
                        ) : pdfError ? (
                          <div className="flex items-center justify-center h-96 w-full border rounded bg-red-50">
                            <div className="text-center">
                              <p className="text-red-600 mb-2">{pdfError}</p>
                              <Button onClick={fetchPdfUrl} variant="outline" size="sm">
                                Retry
                              </Button>
                            </div>
                          </div>
                        ) : pdfUrl ? (
                          <div className="w-full max-w-4xl">
                            <iframe
                              src={`${pdfUrl}#page=${currentPdfPage}&zoom=${pdfZoom}`}
                              className="w-full h-96 border rounded shadow-lg"
                              title="Question PDF"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-96 w-full border rounded bg-gray-100">
                            <p className="text-gray-600">No PDF available</p>
                          </div>
                        )}
                      </div>

                      {/* PDF Controls */}
                      {pdfUrl && !pdfLoading && (
                        <div className="bg-blue-600 flex items-center justify-center gap-4 text-white text-sm px-4 py-2 rounded-lg mb-6">
                          <ChevronLeft
                            size={24}
                            className={`cursor-pointer hover:bg-blue-700 rounded p-1 ${currentPdfPage <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={handlePdfPrevPage}
                          />
                          <span>
                            {currentPdfPage} / {totalPdfPages}
                          </span>
                          <ChevronRight
                            size={24}
                            className={`cursor-pointer hover:bg-blue-700 rounded p-1 ${currentPdfPage >= totalPdfPages ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={handlePdfNextPage}
                          />
                          <ZoomIn
                            size={20}
                            className="cursor-pointer hover:bg-blue-700 rounded p-1"
                            onClick={handleZoomIn}
                          />
                          <ZoomOut
                            size={20}
                            className="cursor-pointer hover:bg-blue-700 rounded p-1"
                            onClick={handleZoomOut}
                          />
                          <RotateCw
                            size={20}
                            className="cursor-pointer hover:bg-blue-700 rounded p-1"
                            onClick={handleRotate}
                          />
                          <span className="text-xs ml-2">{pdfZoom}%</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons for Descriptive */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Switch />
                          <span className="text-sm">Mark for review</span>
                        </div>
                        <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                          <RotateCcw className="h-4 w-4" />
                          Clear response
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                          Previous
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">Save & Next</Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Navigation Panel */}
          <div className="w-full lg:w-[30%]">
            <Card className="border-2 border-black shadow-2xl min-h-[600px]">
              <CardContent className="p-4 flex flex-col h-full">
                {/* Tabs */}
                <Tabs
                  value={selectedTab}
                  onValueChange={(value) => setSelectedTab(value as "mcq" | "descriptive")}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 mb-4 border border-black rounded-lg overflow-hidden">
                    <TabsTrigger
                      value="mcq"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                    >
                      MCQ questions
                    </TabsTrigger>
                    <TabsTrigger
                      value="descriptive"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                    >
                      Descriptive questions
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="mcq" className="flex-1">
                    <QuestionPalette />
                  </TabsContent>

                  <TabsContent value="descriptive" className="flex-1">
                    <FileUploadArea />
                  </TabsContent>
                </Tabs>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmitExam}
                  disabled={submitting}
                  variant="outline"
                  className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  {submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Examination"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
