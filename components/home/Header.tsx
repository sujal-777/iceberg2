"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CAExamHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div className="space-y-6 max-w-2xl" variants={textVariants}>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight"
              variants={textVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ace Your CA & CMA Exams
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                With Expert Test Series & Counseling
              </motion.span>
            </motion.h1>

            <motion.p className="text-gray-600 text-lg sm:text-xl" variants={textVariants}>
              Get access to top-quality test series, expert counseling and study materials to ensure your success
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={textVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Free Trial</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Book an Appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Stack - Adjusted size */}
          <motion.div
            className="relative w-full flex items-center justify-center h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px]"
            variants={imageVariants}
          >
            {/* Left Image */}
            <motion.div
              className="absolute left-0 sm:-left-4 md:-left-6 lg:-left-8 transform rotate-[-8deg] z-10"
              initial={{ opacity: 0, x: -100, rotate: -20 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-[120px] h-[220px] sm:w-[160px] sm:h-[280px] md:w-[200px] md:h-[360px] lg:w-[260px] lg:h-[520px] overflow-hidden rounded-xl shadow-lg"
                animate={floatingAnimation}
              >
                <Image
                  src="/header-1.png"
                  alt="Student Left"
                  width={260}
                  height={520}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Middle Image */}
            <motion.div
              className="z-20 transform scale-105"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-[130px] h-[230px] sm:w-[170px] sm:h-[290px] md:w-[220px] md:h-[380px] lg:w-[260px] lg:h-[520px] overflow-hidden rounded-xl shadow-2xl rotate-3"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [3, 1, 3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/header-2.png"
                  alt="Student Middle"
                  width={260}
                  height={520}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute right-0 sm:-right-4 md:-right-6 lg:-right-8 transform rotate-[-8deg] z-30"
              initial={{ opacity: 0, x: 100, rotate: 20 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-[120px] h-[220px] sm:w-[160px] sm:h-[280px] md:w-[200px] md:h-[360px] lg:w-[260px] lg:h-[520px] overflow-hidden rounded-xl shadow-lg"
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/header-3.png"
                  alt="Student Right"
                  width={260}
                  height={520}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
