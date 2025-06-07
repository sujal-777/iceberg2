"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-[#EEF6FF] py-16 px-6 md:px-16 lg:px-32 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-7xl">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Image */}
          <motion.div className="w-full flex justify-center" variants={slideInLeft}>
            <motion.div
              className="w-full max-w-[800px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}>
                <Image
                  src="/about-group.png"
                  alt="Hero Image"
                  width={800}
                  height={550}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div variants={slideInRight}>
            <motion.h3
              className="text-blue-700 font-bold uppercase tracking-wide text-lg sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who We Are
            </motion.h3>

            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-black mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                "Empowering Future Chartered Accountants & Cost Accountants with{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Expert Guidance & Unmatched Test Series!"
              </motion.span>
            </motion.p>

            <motion.p
              className="text-gray-700 mt-4 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ICEBERG is a leading CA & CMA test series platform designed to help students achieve top scores and career
              success.
            </motion.p>

            <motion.p
              className="text-gray-700 mt-2 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Our comprehensive approach, including mock tests, expert counseling, and strategic study planning, has
              helped thousands of students clear their exams with confidence.
            </motion.p>

            <motion.button
              className="mt-6 px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-700 text-blue-700 font-medium rounded-full hover:bg-blue-700 hover:text-white transition text-base sm:text-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-blue-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Your Journey</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
