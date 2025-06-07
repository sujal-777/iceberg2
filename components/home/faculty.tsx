"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FacultyShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[100px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Section */}
        <motion.div className="w-full lg:w-2/5 text-center lg:text-left space-y-6" variants={slideInLeft}>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              India's Finest
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Faculties for CA,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              CS and CMA Classes
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Led by India's finest CA, CS, and CMA educators, we provide expert mentorship, conceptual clarity, and
            strategic exam guidance ensuring you not only excel in your journey but emerge as an industry-ready
            professional, equipped with practical skills, real-world knowledge, and the confidence to succeed.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="px-6 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get in touch</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section - Faculty Card */}
        <motion.div className="w-full lg:w-2/5 flex justify-center" variants={slideInRight}>
          <motion.div
            className="bg-[#EEF6FF] border border-gray-200 shadow-md rounded-xl p-4 sm:p-6 w-full max-w-md text-center group"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/faculty1.png"
                alt="CA Anirudh Sharma"
                width={600}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
            </motion.div>

            <motion.h2
              className="text-xl sm:text-2xl font-bold text-blue-700 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CA ANIRUDH SHARMA
            </motion.h2>

            <motion.p
              className="text-gray-500 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              12+ Years in Coaching experience
            </motion.p>

            <motion.p
              className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education. With
              innovative teaching methods and a student-centric approach, he has made complex subjects accessible,
              ensuring aspiring CAs receive top-notch guidance, support, and mentorship to excel.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
