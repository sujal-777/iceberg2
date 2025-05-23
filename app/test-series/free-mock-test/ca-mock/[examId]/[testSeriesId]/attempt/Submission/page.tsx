import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";
import { RiHome2Line } from "react-icons/ri";
const Submission = () => {
  return (
    <div className='flex justify-center'>
       <div className='flex flex-col items-center gap-[28px] my-[40px] w-[515px] h-[491px] px-[26px] py-[41px] border-[1px] border-black rounded-[10px]'>
        <TiTick className='text-[#0048B0] border-[3px] py-[4px] border-[#0048B0] rounded-full w-[100px] h-[100px]'/>
        <h1 className='text-[30px] font-bold'>Thank You</h1>
        <p className='text-[20px] font-[400]'>for giving the exam Your exam is completed</p>
        <p className='text-[15px] font-[300]'>We will send you further details in via email</p>
        <p className='text-[16px] text-[#C9C9C9] flex items-center justify-center text-center font-[500] w-full h-[45px] border-[1px] border-[#C9C9C9] rounded-[10px]'>a*****@gmail.com</p>
        <Link href={'/'}>
        <button className='flex items-center justify-center gap-[8px] text-[16px] font-[600] text-white bg-[#0048B0] rounded-[10px] w-[180px] h-[45px]'><RiHome2Line className='text-white'/>Go to Home</button>
        </Link>
       </div>
       </div>
       
  )
}

export default Submission