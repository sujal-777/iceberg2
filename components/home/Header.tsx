"use client"
import { boolean } from "drizzle-orm/gel-core";
import IcyChat from "./chatbot";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  function openChatbot(){
    setOpenChat(true)
    
    }
  const [openChat,setOpenChat]=useState(false)
  return (
    <section className="w-full bg-white py-8 md:py-16 lg:py-20">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl relative mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content - Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Ace Your CA & CMA Exams <br className="hidden md:block" /> With Expert Test Series & Counseling
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700">
              Get access to top-quality test series, expert counseling, and study materials to ensure your success.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Link
                href="/trial"
                className="rounded-md border border-blue-600 bg-white px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium text-blue-600 hover:bg-blue-50 transition"
              >
                Start Free Trial
              </Link>
              <Link
                href="/appointment"
                className="rounded-md bg-blue-600 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium text-white hover:bg-blue-700 transition"
              >
                Book an Appointment
              </Link>
              {/* <IcyChat/> */}
            </div>
          </div>

          {/* Right Images - Stacked on mobile, Side by side on desktop */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative h-[400px] md:h-[450px] lg:h-[500px]">
            {/* First image */}
            <div className="absolute left-[10%] top-[15%] w-[75%] md:w-[40%] h-[280px] md:h-[320px] transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/header-1.png"
                alt="Student studying in library"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Second image */}
            <div className="absolute left-[30%] top-[5%] w-[75%] md:w-[40%] h-[280px] md:h-[320px] transform hover:scale-105 transition-transform duration-300 z-10">
              <Image
                src="/header-2.png"
                alt="Student with books"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Third image */}
            <div className="absolute left-[15%] md:left-[50%] top-[30%] md:top-[20%] w-[75%] md:w-[40%] h-[280px] md:h-[320px] transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/header-3.png"
                alt="Student in classroom"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">

          <div 
          onClick={openChatbot}
          className="w-16 h-16 rounded-full p-2 flex  bg-blue-800">
            <Image 
            className="rounded-full"
            width={100}
            height={100}
            src="/iceberg-chat.jpeg"
            alt="avatar"
            />
            {/* <h2 className="ml-2 mt-2 text-blue-500  font-medium text-xl">Icy</h2> */}
          </div>
        </div>
        {
          openChat?
        <IcyChat setOpenChat={setOpenChat}/>:null
        }
      </div>
    </section>
  );
}
