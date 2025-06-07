"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Concept() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="relative mx-auto h-[662px] w-full max-w-7xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Image - Full width and height */}
      <motion.div className="absolute inset-0 z-0" variants={imageVariants} initial="hidden" animate="visible">
        <Image
          src="/content-page.png"
          alt="Background image showing workspace"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Rectangle overlay for the left half */}
      <motion.div
        className="absolute inset-y-0 left-0 z-10 w-2/3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image src="/Rectangle.png" alt="White overlay background" fill className="object-cover" priority />
      </motion.div>

      {/* Content Container - Centered with margins */}
      <motion.div
        className="relative z-20 mx-auto h-full max-w-7xl px-8 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex h-full items-center">
          <motion.div className="max-w-xl" variants={textVariants}>
            <motion.h2
              className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
              variants={textVariants}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ace Your CA & CMA Exams
              </motion.span>
            </motion.h2>

            <motion.h3
              className="mb-5 text-2xl font-semibold text-gray-800"
              variants={textVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Expert Test Series & Counseling
              </motion.span>
            </motion.h3>

            <motion.p
              className="mb-10 text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl"
              variants={textVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Comprehensive learning resources designed by industry experts to help you succeed in your professional
              accounting examinations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              variants={textVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:text-lg relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Learning Now</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:text-lg"
                >
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
