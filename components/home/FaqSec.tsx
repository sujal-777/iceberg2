"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I do a CA course online?",
    answer:
      "Yes, CA courses are available online through various platforms, including ICAI’s official e-learning portal and coaching institutes.",
  },
  {
    question: "Should I choose CA Online classes or offline classes?",
    answer:
      "Both have advantages. Online classes offer flexibility, while offline classes provide better interaction with teachers.",
  },
  {
    question: "Can I complete CA in 2 years?",
    answer:
      "No, the minimum duration to complete all CA levels is around 4.5 years, considering exam cycles and practical training.",
  },
  {
    question: "Can I crack CA by self-study?",
    answer:
      "Yes, many students clear CA with self-study. However, structured coaching and mentorship can help with difficult concepts.",
  },
  {
    question: "Can I do CA with a full-time job?",
    answer:
      "It is challenging but possible. You’ll need strong time management to balance work and studies effectively.",
  },
  {
    question: "What are passing marks for CA?",
    answer:
      "To pass, you need at least 40% in each subject and a minimum aggregate of 50% across all subjects in a group.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-white">
      {/* Title without underline */}
      <h2 className="text-3xl font-semibold text-black mb-6">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#EEF6FF] rounded-xl shadow-md mb-4 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-black focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus size={22} className="text-black" />
              ) : (
                <Plus size={22} className="text-black" />
              )}
            </button>

            {/* Show answer only if the question is expanded */}
            <div
  className={`px-6 text-gray-700 text-md transition-all duration-300 ease-in-out overflow-hidden ${
    openIndex === index ? "max-h-[300px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
  }`}
>
  <div className="pt-2">{faq.answer}</div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
