"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import { Document, Page } from "react-pdf";

export default function MockTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [typeQuest, setTypeQuest] = useState("MCQ");
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentQuestion = questionsData[currentIndex];
  const { examId, testSeriesId } = useParams();
  const THREE_HOURS_IN_SECONDS = 3 * 60 * 60; // 10800 seconds
  const [secondsLeft, setSecondsLeft] = useState(THREE_HOURS_IN_SECONDS);
  const [visited, setVisited] = useState([]);
  const [descriptiveQuestions, setDescriptiveQuestions] = useState([]);
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentPdfIdx, setCurrentPdfIdx] = useState(0);
  const currentPdf = descriptiveQuestions[currentPdfIdx];
  const [descriptAnswer, setDescriptAnswer] = useState(null);


  const handleFiles = (files) => {
    const fileList = Array.from(files);
    console.log("Selected files:", fileList);
    setSelectedFiles(fileList);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

const { getToken } = useAuth();

const handleSubmit = async () => {
  try {
    const token = await getToken(); // ⬅️ Get Clerk JWT

    const formData = new FormData();
    formData.append("testSeriesId", testSeriesId);
    formData.append("examId", examId);

    // MCQ answers
    const mcqAnswers = {};
    Object.entries(answers).forEach(([qid, val]) => {
      if (Array.isArray(val)) return;
      mcqAnswers[qid] = val;
    });
    formData.append("mcqAnswers", JSON.stringify(mcqAnswers));

    // Descriptive files
    Object.entries(answers).forEach(([qid, val]) => {
      if (Array.isArray(val)) {
        val.forEach((file) => {
          formData.append("answerPDF", file, file.name);
        });
        formData.append(`descriptiveQids`, qid);
      }
    });

    const res = await fetch("http://localhost:5000/api/test-attempt/submit", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // ⬅️ Include token here
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to submit test");
    }

    window.location.href =
      "/test-series/free-mock-test/ca-mock/682b7e3f506c24cdafbdeda8/682b801b506c24cdafbdedad/attempt/Profile";
  } catch (err) {
    console.error("Submission error:", err);
    alert("Submission failed. Please try again.");
  }
};


  useEffect(() => {
    const currentQId = questionsData[currentIndex]?._id;
    if (currentQId && !visited.includes(currentQId)) {
      setVisited((prev) => [...prev, currentQId]);
    }
  }, [currentIndex, questionsData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(3, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/test-series/${testSeriesId}/questions`
        );
        const data = await res.json();
        const mcqs = data.filter(
          (q) => "question" in q && !("questionPDF" in q)
        );
        const descriptives = data.filter((q) => "questionPDF" in q);
        setQuestionsData(mcqs);
        setDescriptiveQuestions(descriptives);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    }
    if (testSeriesId) fetchQuestions();
  }, [testSeriesId]);

  useEffect(() => {
    console.log("questions:", questionsData);
    console.log("questionpdf", descriptiveQuestions);
    console.log("pdf url", currentPdf);
    console.log("answers", answers);
  }, [questionsData, descriptiveQuestions, currentPdf, answers]);
  useEffect(() => {
    console.log("answers:", answers);
  }, [answers]);

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion._id]: option,
    }));
  };

  const handleMarkForReview = () => {
    const qid = currentQuestion._id;
    if (!answers[qid]) {
      alert("Please select an option before marking for review.");
      return;
    }
    setReviewList((prev) =>
      prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid]
    );
  };

  const handleJumpToQuestion = (index) => {
    setCurrentIndex(index);
  };
  const progress = ((currentIndex + 1) / questionsData.length) * 100;
  return (
    <div className="min-h-screen m-[30px]">
      {loading ? (
        <p className="text-gray-500">Loading questions…</p>
      ) : questionsData.length === 0 ? (
        <p className="text-gray-500">No questions found for this test.</p>
      ) : (
        <div className="flex flex-col">
          <p className="ml-auto mr-[40px] text-[20px] font-bold">
            {formatTime(secondsLeft)}
          </p>
          {/*MCQ questions*/}
          {typeQuest === "MCQ" && (
            <div className="relative flex justify-center gap-[10px] ">
              <div className="bg-white w-[966px] p-6 rounded-[10px] shadow border-[1px] border-black">
                <div className="flex justify-between ">
                  <p className="text-[18px] font-[500] mb-[10px]">
                    Questions <span>{currentIndex + 1}</span> of{" "}
                    <span>{questionsData.length}</span>
                  </p>
                  <p className="text-gray-400">
                    Progress <span>{progress}</span>%
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-[11px] mb-4">
                  <div
                    className="bg-blue-500 h-[11px] rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        ((currentIndex + 1) / questionsData.length) * 100
                      }%`,
                    }}
                  />
                </div>
                <h2 className="text-[20px] font-[500] mb-4">
                  <span className="bg-[#0048B0] text-[18px] rounded-[17.5px] px-[8px] py-[6px] text-white w-[35px] h-[35px]">
                    {currentIndex + 1}
                  </span>{" "}
                  {currentQuestion.question}
                </h2>
                <p className="text-[17px] text-[#8F8F8F] mb-[10px]">
                  Select the correct option from the choices below
                </p>
                <div className="flex flex-col gap-[25px]">
                  {currentQuestion.options.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => handleOptionSelect(opt)}
                      className={`p-3 border-[1px] border-black rounded-[10px] cursor-pointer ${
                        answers[currentQuestion._id] === opt
                          ? "bg-blue-200"
                          : ""
                      }`}
                    >
                      {opt.text}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-[100px]">
                  <div className="flex items-center gap-[18px]">
                    <button
                      className="px-4 py-2 rounded"
                      onClick={handleMarkForReview}
                    >
                      {reviewList.includes(currentQuestion._id)
                        ? "Unmark Review"
                        : "Mark for Review"}
                    </button>
                    <p>Clear responce</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <button
                      className="h-[45px] w-[128px] text-[#0048B0] rounded-[12px] border-[1px] border-[#0048B0]"
                      onClick={() =>
                        setCurrentIndex((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      Previous
                    </button>
                    <button
                      className="h-[45px] w-[128px] bg-[#0048B0] text-white rounded-[12px] border-[1px] border-[#0048B0]"
                      onClick={() => {
                        const currentQId = questionsData[currentIndex]._id;
                        if (!answers[currentQId]) {
                          alert("Please select an option before proceeding.");
                          return;
                        }

                        // Move to next question
                        setCurrentIndex((prev) =>
                          Math.min(prev + 1, questionsData.length - 1)
                        );
                      }}
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar with Question Numbers */}
              <div className="relative max-w-[526px] p-[19px] border-[1px] border-black rounded-[10px]">
                <div className="flex">
                  <button
                    className={`border-[1px] border-black rounded-l-[10px] h-[40px] w-[236px] bg-[#0048B0] text-white`}
                  >
                    MCQ questions
                  </button>
                  <button
                    className={`border-[1px] border-black rounded-r-[10px] h-[40px] w-[236px] `}
                    onClick={() => setTypeQuest("Descriptive")}
                  >
                    Descriptive questions
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-[16px] mt-[20px] ">
                  {questionsData.map((q, idx) => {
                    const isAnswered = !!answers[q._id];
                    const isReview = reviewList.includes(q._id);
                    const isVisited = visited.includes(q._id);
                    let bgColor = "bg-[#4B5663]";

                    if (isReview) {
                      bgColor = "bg-[#754DE9]";
                    } else if (isAnswered) {
                      bgColor = "bg-[#1E976B]";
                    } else if (isVisited) {
                      bgColor = "bg-[#D9534F]";
                    }

                    return (
                      <button
                        key={q._id}
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`p-2 text-sm text-[white] rounded-[10px]  w-[45px] h-[45px] ${bgColor}
                 `}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={handleSubmit}
                  className="absolute top-[500px] border-[1px] border-[#0048B0] text-[#0048B0] rounded-[10px] h-[40px] w-[470px] hover:bg-[#0048B0] hover:text-white"
                >
                  Submit Examination
                </button>
              </div>
            </div>
          )}

          {/*descriptive questions*/}

          {typeQuest === "Descriptive" && (
            <div className="relative flex justify-center h-[843px] gap-[10px] ">
              <div className="bg-white w-[966px] p-6 rounded-[10px] shadow border-[1px] border-black">
                {/* <div className='h-[655px] w-[527px] bg-blue-500 mx-auto'></div> */}
                <div className="w-full h-screen">
                  {currentPdf?.questionPDF.publicURL ? (
                    <iframe
                      src={currentPdf.questionPDF.publicURL}
                      width="700px"
                      height="655px"
                      className="border rounded mx-auto"
                    />
                  ) : (
                    <p>Loading PDF...</p>
                  )}
                </div>
                <div className="flex justify-between items-center mt-[10px]">
                  <div className="flex items-center gap-[18px]">
                    <button className="px-4 py-2 rounded">
                      Mark for Review
                    </button>
                    <p>Clear responce</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <button
                      className={`h-[45px] w-[128px] text-[#0048B0] rounded-[12px] border-[1px] border-[#0048B0] ${
                        currentPdfIdx > 0
                          ? "bg-white text-[#0048B0]"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                      onClick={() => setCurrentPdfIdx((prev) => prev - 1)}
                    >
                      Previous
                    </button>
                    <button
                      className="h-[45px] w-[128px] bg-[#0048B0] text-white rounded-[12px] border-[1px] border-[#0048B0]"
                      onClick={() => {
                        setCurrentPdfIdx((prev) => prev + 1),
                          setAnswers((prev) => ({
                            ...prev,
                            [currentPdf._id]: selectedFiles,
                          }));
                      }}
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-[526px] p-[19px] border-[1px] border-black rounded-[10px]">
                <div className="flex">
                  <button
                    className={`border-[1px] border-black rounded-l-[10px] h-[40px] w-[236px] `}
                    onClick={() => setTypeQuest("MCQ")}
                  >
                    MCQ questions
                  </button>
                  <button
                    className={`border-[1px] border-black rounded-r-[10px] h-[40px] w-[236px]  bg-[#0048B0] text-white`}
                  >
                    Descriptive questions
                  </button>
                </div>
                <div className="flex  items-center gap-[20px] px-[29px] bg-[#E3EEFF] mt-[40px] h-[102px] rounded-[15px] border-[1px] border-[#0048B0]">
                  <img src="/pdfformat.png" width={48} height={65} alt="" />
                  <p className="flex flex-col  text-[20px] font-[600] text-[#0048B0]">
                    {currentPdf?.questionPDF.fileName}
                    <span className=" text-[16px] font-normal text-black">
                      10.0MB
                    </span>
                  </p>
                </div>
                <h1 className="text-[20px] font-bold mt-[150px] mb-[20px]">
                  Submit your answere PDF here
                </h1>
                <div
                  className="flex flex-col justify-center items-center gap-[18px] h-[205px] w-[472px] border-dashed border-[1px] border-[#000000] rounded-[10px]"
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current.click()}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                  <h1 className="text-[17px] font-[600]">
                    Drag & Drop your file here
                  </h1>
                  {selectedFiles.length > 0 && (
                    <ul className="mt-4 text-left text-sm text-gray-700">
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center gap-[10px] justify-center">
                    <div className="w-[180px] border-[0.5px] border-[gray]"></div>
                    or
                    <div className="w-[180px] border-[0.5px] border-[gray]"></div>
                  </div>
                  <div className="bg-[#0048B0] rounded-[12px] text-white w-[140px] h-[45px] flex items-center justify-center courser-pointer">
                    Select File<input type="file" className="hidden"></input>
                  </div>
                  <p className="text-[13px]">Upload your file here</p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="absolute top-[500px] border-[1px] border-[#0048B0] text-[#0048B0] rounded-[10px] h-[40px] w-[470px] hover:bg-[#0048B0] hover:text-white"
                >
                  Submit Examination
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}



//actual code of the page 

// "use client"
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { useRef } from 'react';
// import { Document, Page } from 'react-pdf';
// export default function MockTestPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [reviewList, setReviewList] = useState([]);
//   const [typeQuest,setTypeQuest]=useState('MCQ');
//   const [questionsData,setQuestionsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const currentQuestion = questionsData[currentIndex];
//   const { examId, testSeriesId } = useParams();
//   const THREE_HOURS_IN_SECONDS = 3 * 60 * 60; // 10800 seconds
//   const [secondsLeft, setSecondsLeft] = useState(THREE_HOURS_IN_SECONDS);
//   const [visited, setVisited] = useState([]);
//   const [descriptiveQuestions,setDescriptiveQuestions]=useState([]);
//   const inputRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [currentPdfIdx,setCurrentPdfIdx]=useState(0);
//   const currentPdf=descriptiveQuestions[currentPdfIdx];
// const [descriptAnswer,setDescriptAnswer]=useState(null);

//   const handleFiles = (files) => {
//     const fileList = Array.from(files);
//     console.log('Selected files:', fileList);
//     setSelectedFiles(fileList);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       handleFiles(e.dataTransfer.files);
//       e.dataTransfer.clearData();
//     }
//   };

// useEffect(() => {
//   const currentQId = questionsData[currentIndex]?._id;
//   if (currentQId && !visited.includes(currentQId)) {
//     setVisited((prev) => [...prev, currentQId]);
//   }
// }, [currentIndex, questionsData]);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSecondsLeft(prev => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   const formatTime = (secs) => {
//     const minutes = Math.floor(secs / 60);
//     const seconds = secs % 60;
//     return `${String(minutes).padStart(3, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   useEffect(() => {
//     async function fetchQuestions() {
//       try {
//         const res = await fetch(`http://localhost:5000/api/test-series/${testSeriesId}/questions`);
//         const data = await res.json();
//          const mcqs = data.filter(q => 'question' in q && !('questionPDF' in q));
//         const descriptives = data.filter(q =>  'questionPDF' in q);
//        setQuestionsData(mcqs);
//        setDescriptiveQuestions(descriptives);
//       } catch (err) {
//         console.error('Error fetching questions:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (testSeriesId) fetchQuestions();
//   }, [testSeriesId]);
 

    
        


//   useEffect(()=>{
// console.log("questions:",questionsData)
// console.log("questionpdf",descriptiveQuestions)
// console.log('pdf url',currentPdf)
// console.log('answers',answers)
//   },[questionsData,descriptiveQuestions,currentPdf,answers])
//   useEffect(()=>{
// console.log("answers:",answers)
//   },[answers])

//   const handleOptionSelect = (option) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [currentQuestion._id]: option
//     }));
//   };

//   const handleMarkForReview = () => {
//     const qid = currentQuestion._id;
//     if (!answers[qid]) {
//     alert('Please select an option before marking for review.');
//     return;
//   }
//     setReviewList((prev) =>
//       prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid]
//     );
//   };

//   const handleJumpToQuestion = (index) => {
//     setCurrentIndex(index);
//   };
// const progress=((currentIndex + 1) / questionsData.length) * 100
//   return (
//     <div className="min-h-screen m-[30px]">
       
//   {loading ? (<p className="text-gray-500">Loading questions…</p>) : questionsData.length === 0 ? (<p className="text-gray-500">No questions found for this test.</p>) : 
//     (<div className='flex flex-col'>
//         <p className='ml-auto mr-[40px] text-[20px] font-bold'>{formatTime(secondsLeft)}</p>
//         {/*MCQ questions*/}
//       {typeQuest==='MCQ' &&( <div className="relative flex justify-center gap-[10px] ">
//         <div className="bg-white w-[966px] p-6 rounded-[10px] shadow border-[1px] border-black">
//            <div className='flex justify-between '>
//            <p className='text-[18px] font-[500] mb-[10px]'>Questions <span>{currentIndex+1}</span> of <span>{questionsData.length}</span></p>
//            <p className='text-gray-400'>Progress <span>{progress}</span>%</p>
//          </div>
//             <div className="w-full bg-gray-200 rounded-full h-[11px] mb-4">
//               <div
//                 className="bg-blue-500 h-[11px] rounded-full transition-all duration-300"
//                 style={{ width: `${((currentIndex + 1) / questionsData.length) * 100}%` }}
//               />
//           </div>
//           <h2 className="text-[20px] font-[500] mb-4">
//           <span className='bg-[#0048B0] text-[18px] rounded-[17.5px] px-[8px] py-[6px] text-white w-[35px] h-[35px]'>{currentIndex + 1}</span> {currentQuestion.question}
//           </h2>
//           <p className='text-[17px] text-[#8F8F8F] mb-[10px]'>Select the correct option from the choices below</p>
//           <div className="flex flex-col gap-[25px]">
//             {currentQuestion.options.map((opt, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleOptionSelect(opt)}
//                 className={`p-3 border-[1px] border-black rounded-[10px] cursor-pointer ${
//                   answers[currentQuestion._id] === opt ? 'bg-blue-200' : ''
//                 }`}
//               >
//                 {opt.text}
//               </div>
//             ))}
//           </div>
//           <div className='flex justify-between items-center mt-[100px]'>
//               <div className='flex items-center gap-[18px]'>
//                  <button
//               className="px-4 py-2 rounded"
//               onClick={handleMarkForReview}
//             >
//               {reviewList.includes(currentQuestion._id) ? 'Unmark Review' : 'Mark for Review'}
//             </button>
//                 <p>Clear responce</p>
//             </div>
//             <div className='flex gap-[10px]'>
//               <button className='h-[45px] w-[128px] text-[#0048B0] rounded-[12px] border-[1px] border-[#0048B0]'onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>Previous</button>
//               <button className='h-[45px] w-[128px] bg-[#0048B0] text-white rounded-[12px] border-[1px] border-[#0048B0]' onClick={() => {
//     const currentQId = questionsData[currentIndex]._id;
//     if (!answers[currentQId]) {
//       alert('Please select an option before proceeding.');
//       return;
//     }
    
//     // Move to next question
//     setCurrentIndex((prev) =>
//       Math.min(prev + 1, questionsData.length - 1)
//     );
//   }}>Save & Next</button>
//             </div>
//             </div>
          
//         </div>
     

//       {/* Sidebar with Question Numbers */}
//       <div className='relative max-w-[526px] p-[19px] border-[1px] border-black rounded-[10px]'>
//             <div className='flex'>
//               <button className={`border-[1px] border-black rounded-l-[10px] h-[40px] w-[236px] bg-[#0048B0] text-white`}>MCQ questions</button>
//                <button className={`border-[1px] border-black rounded-r-[10px] h-[40px] w-[236px] `} onClick={()=>setTypeQuest('Descriptive')}>Descriptive questions</button>
//             </div>
//             <div className='grid grid-cols-6 gap-[16px] mt-[20px] '>
//                       {questionsData.map((q, idx) => {
//                 const isAnswered = !!answers[q._id];
//           const isReview = reviewList.includes(q._id);
//           const isVisited = visited.includes(q._id);
//           let bgColor = 'bg-[#4B5663]'; 

//          if (isReview) {
//             bgColor = 'bg-[#754DE9]';
//           } else if (isAnswered) {
//             bgColor = 'bg-[#1E976B]';
//               }else if (isVisited) {
//     bgColor = 'bg-[#D9534F]'; 
//   }

//           return (
//             <button
//               key={q._id}
//               onClick={() => handleJumpToQuestion(idx)}
//               className={`p-2 text-sm text-[white] rounded-[10px]  w-[45px] h-[45px] ${bgColor}
//                  `}
//             >
//               {idx + 1}
//             </button>
//           );
//         })}
             
//           </div>
//             <a href='/test-series/free-mock-test/ca-mock/682b7e3f506c24cdafbdeda8/682b801b506c24cdafbdedad/attempt/Profile' className=''><button className={`absolute top-[500px] border-[1px] border-[#0048B0] text-[#0048B0] rounded-[10px] h-[40px] w-[470px] hover:bg-[#0048B0] hover:text-white `} >Submit Examination</button></a>
//         </div>
        
//        </div>) }



//                {/*descriptive questions*/}

//       {typeQuest==='Descriptive' &&( <div className="relative flex justify-center h-[843px] gap-[10px] ">
//         <div className="bg-white w-[966px] p-6 rounded-[10px] shadow border-[1px] border-black">
//           {/* <div className='h-[655px] w-[527px] bg-blue-500 mx-auto'></div> */}
//            <div className="w-full h-screen">
//       {currentPdf?.questionPDF.publicURL ? (
//         <iframe
//           src={currentPdf.questionPDF.publicURL}
//           width="700px"
//           height="655px"
//           className="border rounded mx-auto"
//         />
//       ) : (
//         <p>Loading PDF...</p>
//       )}
//     </div>
//           <div className='flex justify-between items-center mt-[10px]'>
//               <div className='flex items-center gap-[18px]'>
//                  <button className="px-4 py-2 rounded">
//               Mark for Review
//             </button>
//                 <p>Clear responce</p>
//             </div>
//             <div className='flex gap-[10px]'>
//               <button className={`h-[45px] w-[128px] text-[#0048B0] rounded-[12px] border-[1px] border-[#0048B0] ${currentPdfIdx>0? 'bg-white text-[#0048B0]' :'bg-gray-300 text-gray-600 cursor-not-allowed'}`}  onClick={()=>setCurrentPdfIdx((prev) =>prev-1)}>Previous</button>
//               <button className='h-[45px] w-[128px] bg-[#0048B0] text-white rounded-[12px] border-[1px] border-[#0048B0]' onClick={()=>{setCurrentPdfIdx((prev) =>prev+1), setAnswers((prev) => ({ ...prev, [currentPdf._id]: selectedFiles}));}}>Save & Next</button>
//             </div>
//             </div>
//         </div>
//         <div className='relative w-[526px] p-[19px] border-[1px] border-black rounded-[10px]'>
//            <div className='flex'>
//               <button className={`border-[1px] border-black rounded-l-[10px] h-[40px] w-[236px] `} onClick={()=>setTypeQuest('MCQ')} >MCQ questions</button>
//                <button className={`border-[1px] border-black rounded-r-[10px] h-[40px] w-[236px]  bg-[#0048B0] text-white`}>Descriptive questions</button>
//             </div>
//             <div className='flex  items-center gap-[20px] px-[29px] bg-[#E3EEFF] mt-[40px] h-[102px] rounded-[15px] border-[1px] border-[#0048B0]'>
//             <img src='/pdfformat.png' width={48} height={65} alt=''/>
//             <p className='flex flex-col  text-[20px] font-[600] text-[#0048B0]'>{currentPdf?.questionPDF.fileName}<span className=' text-[16px] font-normal text-black'>10.0MB</span></p>
//             </div>
//             <h1 className='text-[20px] font-bold mt-[150px] mb-[20px]'>Submit your answere PDF here</h1>
//             <div className='flex flex-col justify-center items-center gap-[18px] h-[205px] w-[472px] border-dashed border-[1px] border-[#000000] rounded-[10px]' onDragOver={(e) => {
//         e.preventDefault();
//         setIsDragging(true);
//       }}onDragLeave={() => setIsDragging(false)} onDrop={handleDrop} onClick={() => inputRef.current.click()}>
//               <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)}/>
//               <h1 className='text-[17px] font-[600]'>Drag & Drop your file here</h1>
//               {selectedFiles.length > 0 && <ul className="mt-4 text-left text-sm text-gray-700">
//           {selectedFiles.map((file, index) => (
//             <li key={index}>{file.name}</li>
//           ))}
//         </ul>}
//               <div className='flex items-center gap-[10px] justify-center'>
//                 <div className='w-[180px] border-[0.5px] border-[gray]'></div>
//                 or
//                 <div className='w-[180px] border-[0.5px] border-[gray]'></div>
//               </div>
//               <div className='bg-[#0048B0] rounded-[12px] text-white w-[140px] h-[45px] flex items-center justify-center courser-pointer' >Select File<input type='file' className='hidden'></input></div>
//               <p className='text-[13px]'>Upload your file here</p>
//             </div>
//             <a href='/test-series/free-mock-test/ca-mock/682b7e3f506c24cdafbdeda8/682b801b506c24cdafbdedad/attempt/Profile' className=''><button className={`mt-[150px] border-[1px] border-[#0048B0] text-[#0048B0] rounded-[10px] h-[40px] w-[470px] hover:bg-[#0048B0] hover:text-white `} >Submit Examination</button></a>
//         </div>
//        </div>)}
//        </div>
//        )}
       
//     </div>
//   );
// }