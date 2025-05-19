'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { PiBookOpen } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { MdPhone } from "react-icons/md";
  import { FaRegUser } from "react-icons/fa6";
  import { MdOutlineMail } from "react-icons/md";
const CAForm = () => {
  const [detailsSelection,setDetailsSelection]=useState<string>('Personal Details');
  const [detailsCompletionArray,setDetailsCompletionArray]=useState<string[]>(['Personal Details']);
  const formSteps=[
    {
      SlNo:1,
      name:'Personal Details'
    },
     {
      SlNo:2,
      name:'Academics Details'
    },
     {
      SlNo:3,
      name:'Additional Information & Declaration'
    }
  ]
  const CA_levelOptions=[
    "CA Foundation",
    "CA Intermidiate (Group I)",
    "CA Intermidiate (Group II)",
    "CA Final (Group I)",
    "CA Final (Group II)",
    "Not yet Entrolled/Planing to entroll",
    "Not applicable"
  ]
  const articleship_status=[
    "Not started",
    "Currently undergoing articleship",
    "Completed articleship",
    "Not applicable"
  ]
  return (
    <main className='min-h-screen bg-white text-black'>
      <section className="relative w-full overflow-hidden rounded-3xl mx-[5px] md:mx-auto my-6 max-w-6xl">
              <div className="relative rounded-3xl">
                <Image
                  src="/icebergeTeam.png"
                  alt="ICEBERG Team"
                  width={1520}
                  height={826}
                  className="object-cover rounded-3xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/72 flex flex-col items-center justify-center text-white text-center p-6 rounded-3xl">
                  <div className="bg-blue-600 px-4 py-2 rounded-[68px] mb-4">
                    <p className="text-sm font-medium ">About ICEBERG</p>
                  </div>
                  <h1 className="text-white text-2xl sm:text-[30px] italic font-light max-w-2xl mb-4">
                    &quot;Empowering Future Chartered Accountants & Cost Accountants with
                    Expert Guidance & Unmatched Test Series!&quot;
                  </h1>
                  <p className="text-white text-lg sm:text-xl font-normal tracking-wide max-w-3xl" style={{ fontFamily: "Neue Montreal" }}>
                    ICEBERG is a CA & CMA test series platform designed to help
                    students achieve top scores and career success. Our comprehensive
                    approach, including mock tests, expert counseling, and strategic
                    guidance, has helped thousands of students ace their exams and
                    secure top ranks.
                  </p>
                </div>
              </div>
            </section>
            <section className='relative  mt-16 flex flex-col justify-center items-center max-w-6xl  mb-[60px] mx-[20px] md:mx-auto '>
              <h1 className='text-[32px] md:text-[43px] text-center font-[600]'>Counseling Intake Form</h1>
              <p className='text-[18px] md:text-[23px] text-center mt-[10px]'>Please fill out the form below to help us understand your needs better, This information will be kept confidential.</p>
              <div className='flex flex-col gap-[57px] mt-[20px]'>
              <div className='flex gap-[5px] md:gap-[29px] mx-auto'>
                {
                  formSteps.map((item)=>(
                    <div key={item.SlNo} className='flex items-center gap-[5px] md:gap-[16px]'>
                      <div className='flex flex-col md:flex-row items-center gap-[16px]'>
                      <div className={`flex items-center justify-center w-[30px] h-[30px] md:w-[50px] md:h-[50px] border-[3px]  text-center rounded-full ${detailsCompletionArray.length>=item.SlNo ? "border-[#0048B0] text-[#0048B0]":"border-black"} ${(detailsCompletionArray.includes('Academics Details') && item.name==='Personal Details') || (detailsCompletionArray.includes('Additional Information & Declaration') && item.name==='Academics Details') ?'bg-[#0048B0] text-white':"bg-white text-[#0048B0]"} `}>
                      <p className=''>{item.SlNo}</p>
                      </div>
                      <p className={`text-[18px] font-normal ${detailsCompletionArray.length>=item.SlNo ? "text-[#0048B0]":"text-black"}`}>{item.name}</p>
                      </div>
                      {`${item.SlNo}`!='3' && <div className={`border-[2px] w-[50px] md:w-[130px] ${detailsCompletionArray.length>=item.SlNo ? "border-[#0048B0]":"border-black"}`}></div>}
                    </div>
                  ))
                }
              </div>
              {/*Personal Details form */}
              {detailsSelection==='Personal Details' && (<form className='flex flex-col gap-[33px]'>
                <div className=''>
                  <p className='text-[24px] font-[600]'>Name</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-[12px] max-w-[1312px]'>
                    <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                     <FaRegUser className='relative top-[-40px] left-[15px]'/>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' name='phone' className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <MdPhone className='relative top-[-40px] left-[15px]'/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <MdOutlineMail className='relative top-[-40px] left-[15px]'/>
                </div>
                <div>
                  <p className='text-[24px] font-[600]'>Date of birth</p>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='dob'>DD-MM-YYYY</label>
                    <input type='text' name='dob' className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                     <HiOutlineCalendarDateRange className='relative top-[-40px] left-[15px]'/>
                </div>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[24px] font-[600]'>Gender</p>
                  <div className='flex gap-[19px]'>
                    <input type='radio' name='gender' className='accent-[#0048B0]'></input>
                    <label htmlFor=''>Male</label>
                  </div>
                  <div className='flex gap-[19px]'>
                    <input type='radio' name='gender' className='accent-[#0048B0]'></input>
                    <label htmlFor=''>Female</label>
                  </div>
                  <div className='flex gap-[19px]'>
                    <input type='radio' name='gender' className='accent-[#0048B0]'></input>
                    <label htmlFor=''>Rather not say</label>
                  </div>
                  <div className='flex gap-[19px]'>
                    <input type='radio' name='gender' className='accent-[#0048B0]'></input>
                    <label htmlFor=''>others</label>
                  </div>
                </div>
               <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='education'>Education</label>
                    <input type='text' name='education' className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <PiBookOpen className='relative top-[-40px] left-[15px]'/>
                </div>
                <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Academics Details'); setDetailsCompletionArray(prev=>[...prev,'Academics Details']);}}>Next</button>
              </form>)}


                {/* Academics Details form*/}


              {detailsSelection==='Academics Details'&& (<form className='flex flex-col gap-[33px]'>
                <div className="flex flex-col gap-[10px]">
                  <p className='text-[20px] text-[#000000] font-[600]'>Current CA Level <span className='text-[#DA0027]'>*</span></p>
                <label htmlFor="select" className="">
                Please select your current level in the CA program:
                </label>
                <select
                  id="select"
                  className="block max-w-[650px] h-[45px] p-2 border border-black rounded-[10px]  focus:ring-[#0048B0] focus:border-blue-500" required>
                  {CA_levelOptions.map((option, idx) => (
                    <option key={idx} value={option} className=''>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-[10px]">
                  <p className='text-[20px] text-[#000000] font-[600]'>Articleship Status <span className='text-[#DA0027]'>*</span></p>
                <label htmlFor="select" className="">
               What is your current articleship status?
                </label>
                <select
                  id="select"
                  className="block max-w-[650px] h-[45px] p-2 border border-black rounded-[10px]  focus:ring-[#0048B0] focus:border-blue-500"
                
                required>
                  {articleship_status.map((option, idx) => (
                    <option key={idx} value={option} className='hover:bg-[#0048B0]'>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
                <div className='flex flex-col gap-[10px]'>
                  <p className='text-[20px] text-[#000000] font-[600]'>Upcoming Exam Attempt <span className='text-[#DA0027]'>*</span></p>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='exam'>Which examination are you preparing for? Ex: May 2025, November 2025 etc. else NA</label>
                    <input type='text' name='exam' className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px]' required></input>
                </div>
                </div>
                  <div className='flex flex-col gap-[10px]'>
                  <p className='text-[20px] text-[#000000] font-[600]'>Additional Comments </p>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='comments'>Please share any other information or concerns you have:</label>
                    <input type='text' name='comments' className='max-w-[1312px] h-[127px] border-[1px] border-[#000000] rounded-[10px]'></input>
                </div>
                </div>
                <div className='flex gap-[34px]'>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Personal Details');setDetailsCompletionArray(prev =>
  prev.filter(item => item !== 'Academics Details'));}}>Back</button>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0]  hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Additional Information & Declaration');setDetailsCompletionArray(prev=>[...prev,'Additional Information & Declaration'])}}>Next</button>
                </div>
              </form>)}

              {/* Additional Information & Declaration */}

              {detailsSelection==='Additional Information & Declaration' && (
                <form className='flex flex-col gap-[33px]'>
                  <div className="flex flex-col md:flex-row  gap-[42px]">
                    <div className="flex flex-col gap-[10px]">
                      <p className='text-[20px] text-[#000000] font-[600]'>Preferred Date <span className='text-[#DA0027]'>*</span></p>
                     <p>Please select your preferred date for the counseling session:</p>
                    <div className="flex flex-col ">
                      <input type='text' name='date' className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]' required></input>
                       <HiOutlineCalendarDateRange className='relative top-[-32px] left-[15px]'/>
                      <label htmlFor='date' className=''>DD-MM-YYYY</label>
                     </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p className='text-[20px] text-[#000000] font-[600]'>Preferred Time Slots <span className='text-[#DA0027]'>*</span></p>
                    <p>Choose the time slots that suit you best:</p>
                    <div className='flex gap-[8px] md:gap-[23px]'>
                    <div className="flex flex-col gap-[10px]">
                      <input type='text' name='HH' placeholder='11' className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='HH'>HH</label>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <input type='text' name='MM' placeholder='00' className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='MM'>MM</label>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <input type='text' name='AM/PM' placeholder='AM' className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='AM/PM'>AM/PM</label>
                    </div>
                    </div>
                    </div>
                  </div>
                  <div>
                     <p className='text-[20px] text-[#000000] font-[600]'>Contact preference <span className='text-[#DA0027]'>*</span></p>
                    <p>Your contact number will be used solely for scheduling adn communication purposes. All your details are securely encrypted and kept confidential.</p>
                     <div className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='phone' className='accent-[#0048B0] w-5 h-5'></input>
                    <label htmlFor=''>Phone</label>
                  </div>
                  <div className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='whatsup' className='accent-[#0048B0] w-5 h-5'></input>
                    <label htmlFor=''>WhatsApp</label>
                  </div>
                  <div className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='email' className='accent-[#0048B0] w-5 h-5'></input>
                    <label htmlFor=''>Email</label>
                  </div>
                  </div>
                  <div className='flex items-center gap-[19px]'>
                    <input type='checkbox' className='accent-[#0048B0] w-5 h-5'></input>
                    <label>Declaration: I confirm that the information provided is accurate and consent to be contacted for counseling purposes. <span className='text-[#DA0027]'>*</span></label>
                  </div>
                  <div className='flex gap-[34px]'>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Academics Details');setDetailsCompletionArray(prev =>
                  prev.filter(item => item !== 'Additional Information & Declaration'));}}>Back</button>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0]  hover:bg-[#0048B0] hover:text-white' onClick={()=>setDetailsSelection('')}>Submit</button>
                </div>
                </form>
              )}
              </div>
            </section>

    </main>
  );
};

export default CAForm;
