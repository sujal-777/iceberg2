
"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';


export default function MockTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [typeQuest,setTypeQuest]=useState(false)
   const [questionsData,setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentQuestion = questionsData[currentIndex];
    const { examId, testSeriesId } = useParams();
    const THREE_HOURS_IN_SECONDS = 3 * 60 * 60; // 10800 seconds
  const [secondsLeft, setSecondsLeft] = useState(THREE_HOURS_IN_SECONDS);
const [visited, setVisited] = useState([]);


useEffect(() => {
  const currentQId = questionsData[currentIndex]?._id;
  if (currentQId && !visited.includes(currentQId)) {
    setVisited((prev) => [...prev, currentQId]);
  }
}, [currentIndex, questionsData]);


  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
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
    return `${String(minutes).padStart(3, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`http://localhost:5000/api/test-series/${testSeriesId}/questions`);
        const data = await res.json();
       setQuestionsData(data);
      } catch (err) {
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    }
    if (testSeriesId) fetchQuestions();
  }, [testSeriesId]);
  useEffect(()=>{
console.log("questions:",questionsData)
  },[questionsData])
  useEffect(()=>{
console.log("answers:",answers)
  },[answers])

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion._id]: option
    }));
  };

  const handleMarkForReview = () => {
    const qid = currentQuestion._id;
    if (!answers[qid]) {
    alert('Please select an option before marking for review.');
    return;
  }
    setReviewList((prev) =>
      prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid]
    );
  };

  const handleJumpToQuestion = (index) => {
    setCurrentIndex(index);
  };
const progress=((currentIndex + 1) / questionsData.length) * 100
  return (
    <div className="min-h-screen m-[30px]">
       
  {loading ? (<p className="text-gray-500">Loading questions…</p>) : questionsData.length === 0 ? (<p className="text-gray-500">No questions found for this test.</p>) : 
    (<div className='flex flex-col'>
       <p className='ml-auto text-[20px] font-bold'>{formatTime(secondsLeft)}</p>
      <div className="relative flex justify-center gap-[10px] ">
        <div className="bg-white w-[966px] p-6 rounded-[10px] shadow border-[1px] border-black">
           <div className='flex justify-between '>
           <p className='text-[18px] font-[500] mb-[10px]'>Questions <span>{currentIndex+1}</span> of <span>{questionsData.length}</span></p>
           <p className='text-gray-400'>Progress <span>{progress}</span>%</p>
         </div>
            <div className="w-full bg-gray-200 rounded-full h-[11px] mb-4">
              <div
                className="bg-blue-500 h-[11px] rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questionsData.length) * 100}%` }}
              />
          </div>
          <h2 className="text-[20px] font-[500] mb-4">
          <span className='bg-[#0048B0] text-[18px] rounded-[17.5px] px-[8px] py-[6px] text-white w-[35px] h-[35px]'>{currentIndex + 1}</span> {currentQuestion.question}
          </h2>
          <p className='text-[17px] text-[#8F8F8F] mb-[10px]'>Select the correct option from the choices below</p>
          <div className="flex flex-col gap-[25px]">
            {currentQuestion.options.map((opt, i) => (
              <div
                key={i}
                onClick={() => handleOptionSelect(opt)}
                className={`p-3 border-[1px] border-black rounded-[10px] cursor-pointer ${
                  answers[currentQuestion._id] === opt ? 'bg-blue-200' : ''
                }`}
              >
                {opt.text}
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center mt-[100px]'>
              <div className='flex items-center gap-[18px]'>
                 <button
              className="px-4 py-2 rounded"
              onClick={handleMarkForReview}
            >
              {reviewList.includes(currentQuestion._id) ? 'Unmark Review' : 'Mark for Review'}
            </button>
                <p>Clear responce</p>
            </div>
            <div className='flex gap-[10px]'>
              <button className='h-[45px] w-[128px] text-[#0048B0] rounded-[12px] border-[1px] border-[#0048B0]'onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>Previous</button>
              <button className='h-[45px] w-[128px] bg-[#0048B0] text-white rounded-[12px] border-[1px] border-[#0048B0]' onClick={() => {
    const currentQId = questionsData[currentIndex]._id;
    if (!answers[currentQId]) {
      alert('Please select an option before proceeding.');
      return;
    }
    
    // Move to next question
    setCurrentIndex((prev) =>
      Math.min(prev + 1, questionsData.length - 1)
    );
  }}>Save & Next</button>
            </div>
            </div>
          
        </div>
     

      {/* Sidebar with Question Numbers */}
      <div className='relative max-w-[526px] p-[19px] border-[1px] border-black rounded-[10px]'>
            <div className='flex'>
              <button className={`border-[1px] border-black rounded-l-[10px] h-[40px] w-[236px] ${typeQuest===false ? "bg-[#0048B0] text-white" :"bg-white text-black"}`}>MCQ questions</button>
               <button className={`border-[1px] border-black rounded-r-[10px] h-[40px] w-[236px]  ${typeQuest===true ? "bg-[#0048B0] text-white" :"bg-white text-black"}`} >Descriptive questions</button>
            </div>
            <div className='grid grid-cols-6 gap-[16px] mt-[20px] '>
                      {questionsData.map((q, idx) => {
                const isAnswered = !!answers[q._id];
          const isReview = reviewList.includes(q._id);
          const isVisited = visited.includes(q._id);
          let bgColor = 'bg-[#4B5663]'; 

         if (isReview) {
            bgColor = 'bg-[#754DE9]';
          } else if (isAnswered) {
            bgColor = 'bg-[#1E976B]';
              }else if (isVisited) {
    bgColor = 'bg-[#D9534F]'; 
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
            <a href='/test-series/free-mock-test/ca-mock/682b7e3f506c24cdafbdeda8/682b801b506c24cdafbdedad/attempt/Profile' className=''><button className={`absolute top-[500px] border-[1px] border-[#0048B0] text-[#0048B0] rounded-[10px] h-[40px] w-[470px] hover:bg-[#0048B0] hover:text-white `} >Submit Examination</button></a>
        </div>
        
       </div>
       </div>
       )}
       
    </div>
  );
}
