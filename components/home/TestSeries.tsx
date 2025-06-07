"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function TestSeries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = ["CA TEST SERIES", "CS TEST SERIES", "CMA TEST SERIES"]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-[#EEF6FF] min-h-screen flex flex-col items-center py-20 overflow-hidden">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-black mb-22 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Test Series{" "}
        </motion.span>
        <motion.span
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Showcase
        </motion.span>
      </motion.h1>

      {/* Category Buttons */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 w-full max-w-7xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`bg-white text-black text-sm sm:text-base font-semibold py-3 shadow-md hover:bg-gray-200 transition-all w-full rounded-md relative overflow-hidden ${
              activeCategory === index ? "ring-2 ring-blue-500" : ""
            }`}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory(index)}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center group cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex justify-center items-center p-8"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Image src="/CALogo.png" alt="CA India Logo" width={160} height={160} className="object-contain" />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full bg-[#0052CC] text-white text-center py-4 text-lg font-bold relative overflow-hidden"
              whileHover={{ backgroundColor: "#003d99" }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">CA Foundation Exam</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
