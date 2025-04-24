"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import IcyChat from "./chatbot"; 

export default function Header() {
  const [openChat, setOpenChat] = useState(false);

  function openChatbot() {
    setOpenChat(true);
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[200px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Ace Your CA & CMA Exams With Expert Test Series & Counseling
            </h1>
            <p className="text-gray-600 md:text-xl lg:text-lg xl:text-xl max-w-2xl">
              Get access to top-quality test series, expert counseling, and study materials to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
              >
                Book an Appointment
              </Button>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex gap-3 md:gap-4">
              <div className="relative h-[280px] w-[120px] sm:h-[320px] sm:w-[140px] md:h-[350px] md:w-[160px] overflow-hidden rounded-xl shadow-lg transform rotate-[-5deg]">
                <Image
                  src="/header-1.png"
                  alt="Student in library"
                  fill
                  className="object-cover rotate-[7deg]"
                  priority
                />
              </div>
              <div className="relative h-[280px] w-[120px] sm:h-[320px] sm:w-[140px] md:h-[350px] md:w-[160px] overflow-hidden rounded-xl shadow-lg transform translate-y-4">
                <Image
                  src="/header-2.png"
                  alt="Student with crossed arms"
                  fill
                  className="object-cover rotate-[-4deg]"
                  priority
                />
              </div>
              <div className="relative h-[280px] w-[140px] sm:h-[320px] sm:w-[160px] md:h-[350px] md:w-[160px] overflow-hidden rounded-xl shadow-lg transform rotate-[5deg]">
                <Image
                  src="/header-3.png"
                  alt="Student in study area"
                  fill
                  className="object-cover rotate-6"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Avatar Button */}
        <div className="flex justify-end mt-10">
          <div
            onClick={openChatbot}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1.5 flex items-center justify-center bg-blue-800 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <Image
              className="rounded-full"
              width={64}
              height={64}
              src="/iceberg-chat.jpeg"
              alt="avatar"
            />
        
          </div>
        </div>
      </div>
    </section>
  );
}
