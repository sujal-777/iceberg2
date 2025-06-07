"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function FreeBatchesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setPhoneNumber("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Get Access Section */}
      <motion.div
        ref={ref}
        className="bg-blue-50 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern Animation */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Left Section: Text Content */}
        <motion.div className="sm:w-1/2 text-center sm:text-left" variants={slideInLeft}>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get Access To Our{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Free Batches
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {" "}
              Now
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get instant access to material & Test series
          </motion.p>

          {/* Input Field with Animation */}
          <motion.form
            className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-sm mx-auto sm:mx-0 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
            whileTap={{ scale: 0.98 }}
            onSubmit={handleSubmit}
          >
            <motion.span className="px-3 text-gray-700">+91</motion.span>
            <motion.input
              type="text"
              placeholder="Enter Mobile Number"
              className="flex-1 p-2 outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              className="bg-blue-600 text-white px-3 py-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative z-10"
                animate={
                  isSubmitting
                    ? {
                        rotate: 360,
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                  ease: "linear",
                }}
              >
                {isSubmitting ? "⏳" : "⏩"}
              </motion.div>
            </motion.button>

            {/* Success Message */}
            <motion.div
              className="absolute -bottom-8 left-0 text-green-600 text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isSuccess ? 1 : 0, y: isSuccess ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              Access granted! Check your phone for details.
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right Section: Image with Animation */}
        <motion.div className="sm:w-1/2 flex justify-center mt-6 sm:mt-0" variants={slideInRight}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/img1.png"
              alt="Iceberg Illustration"
              width={260}
              height={160}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
