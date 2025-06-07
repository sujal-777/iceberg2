"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqs = [
  {
    question: "Can I do a CA course online?",
    answer:
      "Yes, CA courses are available online through various platforms, including ICAI's official e-learning portal and coaching institutes.",
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
      "It is challenging but possible. You'll need strong time management to balance work and studies effectively.",
  },
  {
    question: "What are passing marks for CA?",
    answer:
      "To pass, you need at least 40% in each subject and a minimum aggregate of 50% across all subjects in a group.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-black mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frequently Asked{" "}
        </motion.span>
        <motion.span
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Questions
        </motion.span>
      </motion.h2>

      {/* FAQ List */}
      <motion.div
        ref={ref}
        className="w-full max-w-4xl space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#EEF6FF] rounded-xl shadow-md transition-all overflow-hidden"
            variants={itemVariants}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg sm:text-xl font-medium text-black focus:outline-none"
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <span>{faq.question}</span>
              <motion.div animate={{ rotate: openIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                {openIndex === index ? (
                  <Minus size={22} className="text-black shrink-0" />
                ) : (
                  <Plus size={22} className="text-black shrink-0" />
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-6 pb-4 text-gray-700 text-base sm:text-lg"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
