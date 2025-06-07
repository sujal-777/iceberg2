"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Requirement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      className="w-full bg-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="requirements"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Who We&apos;re{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Looking For
          </motion.span>
        </motion.h1>

        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* CA Final Paper Setting Card */}
          <motion.div
            className="bg-blue-50 rounded-xl border border-black w-full md:w-[520px] h-[400px] p-0 overflow-hidden group"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="flex items-center px-8 pt-8 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Image src="/career-icon.png" alt="Career Logo" width={50} height={50} />
              </motion.div>
              <motion.h2
                className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                For CA Final Paper Setting
              </motion.h2>
            </motion.div>

            <motion.div className="px-8 py-6 space-y-6">
              {[
                "Qualified CA with minimum 5 years of experience",
                "Strong expertise in respective subject areas",
                "Experience in academic content creation",
                "Excellent analytical and problem-solving skills",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div className="flex-shrink-0 mt-1" variants={checkmarkVariants}>
                    <motion.svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    >
                      <rect width="16" height="16" x="2" y="2" fill="#1e40af" rx="2" />
                      <motion.path
                        fill="white"
                        d="M13.86 6.32a.75.75 0 0 1 .083 1.06l-4.545 5.25a.75.75 0 0 1-1.068.069l-2.5-2.25a.75.75 0 1 1 1.004-1.114l1.964 1.768 4-4.625a.75.75 0 0 1 1.061-.158Z"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <motion.p
                    className="ml-4 text-lg font-medium text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {item}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CA Inter Paper Setting Card */}
          <motion.div
            className="bg-blue-50 rounded-xl border border-black w-full md:w-[520px] h-[400px] p-0 overflow-hidden group"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="flex items-center px-8 pt-8 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <Image src="/career-icon.png" alt="Career Logo" width={50} height={50} />
              </motion.div>
              <motion.h2
                className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                For CA Inter Paper Setting
              </motion.h2>
            </motion.div>

            <motion.div className="px-8 py-6 space-y-6">
              {[
                "Qualified CA with minimum 3 years of experience",
                "Through knowledge of CA curriculum",
                "Teacher or content writing experience preferred",
                "Strong attention to detail",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div className="flex-shrink-0 mt-1" variants={checkmarkVariants}>
                    <motion.svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    >
                      <rect width="16" height="16" x="2" y="2" fill="#1e40af" rx="2" />
                      <motion.path
                        fill="white"
                        d="M13.86 6.32a.75.75 0 0 1 .083 1.06l-4.545 5.25a.75.75 0 0 1-1.068.069l-2.5-2.25a.75.75 0 1 1 1.004-1.114l1.964 1.768 4-4.625a.75.75 0 0 1 1.061-.158Z"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <motion.p
                    className="ml-4 text-lg font-medium text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    {item}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
