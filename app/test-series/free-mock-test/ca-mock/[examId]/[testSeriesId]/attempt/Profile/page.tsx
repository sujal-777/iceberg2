import React from 'react'
import Link from 'next/link'
const Profile = () => {
  return (
   <div className='flex justify-center'>
       <form className='flex flex-col gap-[35px] my-[40px] w-[515px] h-[523px] px-[26px] py-[41px] border-[1px] border-black rounded-[10px]'>
        <h1 className='text-[25px] font-bold text-center'>Complete Your Profile</h1>
        <label className='flex flex-col gap-[6px] text-[16px] font-[500]'>
          Full Name
          <input type='text' placeholder='Enter Your Full Name' className='h-[45px] font-normal rounded-[10px] border-[1px] border-black'></input>
        </label>
        <label className='flex flex-col gap-[6px] text-[16px] font-[500]'>
          Email Address
          <input type='mail' placeholder='Enter your Email Address' className='h-[45px] font-normal rounded-[10px] border-[1px] border-black'></input>
        </label>
        <label className='flex flex-col gap-[6px] text-[16px] font-[500]'>
          Mobile Number
          <input type='text' placeholder='Enter your Mobile Number' className='h-[45px] font-normal rounded-[10px] border-[1px] border-black'></input>
        </label>
        <Link href={'/test-series/free-mock-test/ca-mock/682b7e3f506c24cdafbdeda8/682b801b506c24cdafbdedad/attempt/Submission'}>
        <button className='text-[16px] text-white bg-[#0048B0] rounded-[10px] font-[500] w-full h-[45px]'>Continue</button>
        </Link>
      
       </form>
       </div>
       
  )
}

export default Profile