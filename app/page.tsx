"use client";

import { useState } from "react";
import IcyChat from "@/components/home/chatbot";
import Image from "next/image";
import Header from "@/components/home/Header";
import TestimonialCarousel from "@/components/home/testimonial";
import FacultyShowcase from "@/components/home/faculty";
import TestSeries from "@/components/home/TestSeries";
import AboutUs from "@/components/home/about-us";
import ContactUs from "@/components/home/Contact-Us";
import FAQSection from "@/components/home/FaqSec";

export default function Home() {
  const [openChat, setOpenChat] = useState(false);

  const toggleChat = () => setOpenChat(!openChat);

  return (
    <>
      {/* Main layout container */}
      <main className="overflow-hidden">
        <Header />
        <AboutUs />
        <TestSeries />
        <FacultyShowcase />
        <TestimonialCarousel />
        <FAQSection />
        <ContactUs />
      </main>

      {/* Sticky Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div
          onClick={toggleChat}
          className="group flex items-center justify-start gap-3 w-16 hover:w-44 transition-all duration-300 ease-in-out bg-blue-800 text-white rounded-full cursor-pointer p-2 overflow-hidden shadow-lg"
        >
          <Image
            className="rounded-full flex-shrink-0"
            width={40}
            height={40}
            src="/iceberg-chat.jpeg"
            alt="Icy Chat"
          />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg whitespace-nowrap">
            Ask Icy
          </span>
        </div>
      </div>

      {/* Conditional Chat Window */}
      {openChat && <IcyChat setOpenChat={setOpenChat} />}
    </>
  );
}
