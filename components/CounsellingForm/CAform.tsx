'use client';

import React from 'react';
import Image from 'next/image';
import { useState,useRef } from 'react';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { PiBookOpen } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { supabase } from "@/lib/supabaseClient";

const CAForm = () => {
  const [detailsSelection,setDetailsSelection]=useState<string>('Personal Details');
  const [detailsCompletionArray,setDetailsCompletionArray]=useState<string[]>(['Personal Details']);
  const dateInputRef = useRef(null);
  const dobInputRef = useRef(null);
const [formData, setFormData] = useState({first_name: '',last_name: '',phone: '',email: '',dob: '',gender: '',study: '',ca_level: '',attempt: '',additional: '',date: '',time: '',
  contact: {
    phone: false,
    whatsApp: false,
    email: false,
  },
});


  const handledateIconClick = () => {
    dateInputRef.current?.showPicker?.(); 
    dateInputRef.current?.focus(); 
  };
const handledobIconClick = () => {
    dobInputRef.current?.showPicker?.(); 
    dobInputRef.current?.focus(); 
  };

  
  function handleChange(e: { target: { name: any; value: any; type: any; checked: any; }; }) {
  const { name, value, type, checked } = e.target;

  if (type === 'checkbox') {
    // for checkboxes inside contactPreference or declaration
    setFormData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [name]: checked,
      },
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }
}
// //  function handleTimeChange(e: { target: { name: any; value: any; }; }) {
// //   const { name, value } = e.target;
// //   setFormData(prev => ({
// //     ...prev,
// //     time: {
// //       ...prev.time,
// //       [name]: value,
// //     },
// //   }));
// }
const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submited")
    console.log(formData);
    const { data, error } = await supabase
      .from('counseling') 
      .insert([formData]); 

    if (error) {
      console.error('Insert error:', error.message);
    } else {
      alert("data inserted successfully");
      console.log('Data inserted:', data);
    }
  };
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
  // const articleship_status=[
  //   "Not started",
  //   "Currently undergoing articleship",
  //   "Completed articleship",
  //   "Not applicable"
  // ]
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
                      <p className={`text-[18px] font-normal ${detailsCompletionArray.length>=item.SlNo ? "text-[#0048B0]":"text-black"}`} onClick={()=>setDetailsSelection(item.name)}>{item.name}</p>
                      </div>
                      {`${item.SlNo}`!='3' && <div className={`border-[2px] w-[50px] md:w-[130px] ${detailsCompletionArray.length>=item.SlNo ? "border-[#0048B0]":"border-black"}`}></div>}
                    </div>
                  ))
                }
              </div>
              {/*Personal Details form */}
              <form onSubmit={handleSubmit}>
              {detailsSelection==='Personal Details' && (<div className='flex flex-col gap-[33px]'>
                <div className=''>
                  <p className='text-[24px] font-[600]'>Name</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-[12px] max-w-[1312px]'>
                    <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' name='first_name'  value={formData.first_name} onChange={handleChange} className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                     <FaRegUser className='relative top-[-40px] left-[15px]'/>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' name='last_name' value={formData.last_name} onChange={handleChange} className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' name='phone' value={formData.phone} onChange={handleChange} className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <MdPhone className='relative top-[-40px] left-[15px]'/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <MdOutlineMail className='relative top-[-40px] left-[15px]'/>
                </div>
                <div>
                  <p className='text-[24px] font-[600]'>Date of birth</p>
                  <div className='flex flex-col gap-[10px] relative'>
                    <label htmlFor='dob'>DD-MM-YYYY</label>
                     <HiOutlineCalendarDateRange className='absolute left-[10px] top-[57px] transform -translate-y-1/2 text-gray-500 cursor-pointer'onClick={handledobIconClick}/>
                    <input type='date' name='dob'  ref={dobInputRef} value={formData.dob} onChange={handleChange} className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                </div>
                </div>
                  <div className='flex flex-col'>
                  <p className='text-[24px] font-[600]'>Gender</p>

                  {['Male', 'Female', 'Rather not say', 'Others'].map((option) => (
                    <div key={option} className='flex gap-[19px] items-center'>
                      <input
                        type='radio'
                        name='gender'
                        value={option}
                        id={option}
                        checked={formData.gender === option}
                        onChange={handleChange}
                        className='accent-[#0048B0]'
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
               <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='study'>Education</label>
                    <input type='text' name='study' value={formData.study} onChange={handleChange} className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                    <PiBookOpen className='relative top-[-40px] left-[15px]'/>
                </div>
                <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Academics Details'); setDetailsCompletionArray(prev=>[...prev,'Academics Details']);}}>Next</button>
              </div>)}


                {/* Academics Details form*/}


              {detailsSelection==='Academics Details'&& (<div className='flex flex-col gap-[33px]'>
                <div className="flex flex-col gap-[10px]">
                  <p className='text-[20px] text-[#000000] font-[600]'>Current CA Level <span className='text-[#DA0027]'>*</span></p>
                <label htmlFor="select" className="">
                Please select your current level in the CA program:
                </label>
                <select
                  id="select" type='select' name='ca_level' value={formData.ca_level} onChange={handleChange}
                  className="block max-w-[650px] h-[45px] p-2 border border-black rounded-[10px]  focus:ring-[#0048B0] focus:border-blue-500" required>
                  {CA_levelOptions.map((option, idx) => (
                    <option key={idx}  value={option} className=''>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="flex flex-col gap-[10px]">
                  <p className='text-[20px] text-[#000000] font-[600]'>Articleship Status <span className='text-[#DA0027]'>*</span></p>
                <label htmlFor="select" className="">
               What is your current articleship status?
                </label>
                <select
                  id="select" name='articleshipStatus' value={formData.articleshipStatus} onChange={handleChange}
                  className="block max-w-[650px] h-[45px] p-2 border border-black rounded-[10px]  focus:ring-[#0048B0] focus:border-blue-500"
                
                required>
                  {articleship_status.map((option, idx) => (
                    <option key={idx}  value={option} className='hover:bg-[#0048B0]'>
                      {option}
                    </option>
                  ))}
                </select>
              </div> */}
                <div className='flex flex-col gap-[10px]'>
                  <p className='text-[20px] text-[#000000] font-[600]'>Upcoming Exam Attempt <span className='text-[#DA0027]'>*</span></p>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='attempt'>Which examination are you preparing for? Ex: May 2025, November 2025 etc. else NA</label>
                    <input type='text' name='attempt' value={formData.attempt} onChange={handleChange} className='max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px]' required></input>
                </div>
                </div>
                  <div className='flex flex-col gap-[10px]'>
                  <p className='text-[20px] text-[#000000] font-[600]'>Additional Comments </p>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor='additional'>Please share any other information or concerns you have:</label>
                    <input type='text' name='additional' value={formData.additional} onChange={handleChange} className='max-w-[1312px] h-[127px] border-[1px] border-[#000000] rounded-[10px]'></input>
                </div>
                </div>
                <div className='flex gap-[34px]'>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Personal Details');setDetailsCompletionArray(prev =>
                 prev.filter(item => item !== 'Academics Details'));}}>Back</button>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0]  hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Additional Information & Declaration');setDetailsCompletionArray(prev=>[...prev,'Additional Information & Declaration'])}}>Next</button>
                </div>
              </div>)}

              {/* Additional Information & Declaration */}

              {detailsSelection==='Additional Information & Declaration' && (
                <div className='flex flex-col gap-[33px]'>
                  <div className="flex flex-col md:flex-row  gap-[42px]">
                    <div className="flex flex-col gap-[10px]">
                      <p className='text-[20px] text-[#000000] font-[600]'>Preferred Date <span className='text-[#DA0027]'>*</span></p>
                     <p>Please select your preferred date for the counseling session:</p>
                    <div className="flex flex-col relative">
                      <HiOutlineCalendarDateRange className='absolute left-[10px] top-[23px] transform -translate-y-1/2 text-gray-500 cursor-pointer'onClick={handledateIconClick}/>
                     <input type="date" name='date' ref={dateInputRef} value={formData.date} onChange={handleChange} className='max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]'></input>
                      <label htmlFor='date' className=''>DD-MM-YYYY</label>
                     </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p className='text-[20px] text-[#000000] font-[600]'>Preferred Time Slots <span className='text-[#DA0027]'>*</span></p>
                    <p>Choose the time slots that suit you best:</p>
                    {/* <div className='flex gap-[8px] md:gap-[23px]'>
                    <div className="flex flex-col gap-[10px]">
                      <input type='text' name='HH' placeholder='11' value={formData.time.HH} onChange={handleTimeChange} className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='HH'>HH</label>
                    </div>
                    <div className="flex flex-col gap-[10px]"> 
                      <input type='text' name='MM' placeholder='00' value={formData.time.MM} onChange={handleTimeChange} className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='MM'>MM</label>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <input type='text' name='AMPM' placeholder='AM' value={formData.time.AMPM} onChange={handleTimeChange} className='w-[51px] h-[45px] text-center border-[1px] border-[#000000] rounded-[10px]' required></input>
                      <label htmlFor='AM/PM'>AM/PM</label>
                    </div>
                    </div> */}
                    <input type='time' name='time' placeholder='11:00 AM' value={formData.time} onChange={handleChange} className='h-[45px] border-[1px] border-[#000000] rounded-[10px] '></input>
                    </div>
                  </div>
                  <div>
                     <p className='text-[20px] text-[#000000] font-[600]'>Contact preference <span className='text-[#DA0027]'>*</span></p>
                    <p>Your contact number will be used solely for scheduling adn communication purposes. All your details are securely encrypted and kept confidential.</p>
                    
                      <label htmlFor='' className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='phone' value={formData.contact.phone} onChange={handleChange} className='accent-[#0048B0] w-5 h-5'></input>
                    Phone</label>
                
                    <label htmlFor='' className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='whatsup' value={formData.contact.whatsApp} onChange={handleChange} className='accent-[#0048B0] w-5 h-5'></input>
                    WhatsApp</label>
                 
                 
                    <label htmlFor='' className='flex items-center gap-[19px]'>
                    <input type='checkbox' name='email' value={formData.contact.email} onChange={handleChange} className='accent-[#0048B0] w-5 h-5'></input>
                    Email</label>
                 
                  </div>
                 
                     {/* <label className='flex items-center gap-[19px]'>
                    <input type='checkbox' className='accent-[#0048B0] w-5 h-5' value={formData.declaration}  onChange={(e) => setFormData(prev => ({ ...prev, declaration: e.target.checked }))}></input>
                   Declaration: I confirm that the information provided is accurate and consent to be contacted for counseling purposes. <span className='text-[#DA0027]'>*</span></label> */}
                  <div className='flex gap-[34px]'>
                  <button className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white' onClick={()=>{setDetailsSelection('Academics Details');setDetailsCompletionArray(prev =>
                  prev.filter(item => item !== 'Additional Information & Declaration'));}}>Back</button>
                  <button type="submit" className='text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0]  hover:bg-[#0048B0] hover:text-white'>Submit</button>
                </div>
                </div>
              )}
              </form>
              </div>
            
            </section>

    </main>
  );
};

export default CAForm;
