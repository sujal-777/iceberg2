"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const cardVariants = {
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-40 bg-white py-12 overflow-hidden">
      <motion.div
        ref={ref}
        className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Section - Contact Information */}
        <motion.div className="text-black w-full" variants={slideInLeft}>
          <motion.h1
            className="text-3xl sm:text-4xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contact{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Us
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Email, call, or fill out the form to discover how ICEBERG can simplify your CA & CMA exam preparation with
            expert guidance and test series.
          </motion.p>

          <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className="text-base sm:text-lg font-medium"
              whileHover={{ scale: 1.02, color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              info@iceberg.com
            </motion.p>
            <motion.p
              className="text-base sm:text-lg font-medium"
              whileHover={{ scale: 1.02, color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              845-852-1285
            </motion.p>
            <motion.a
              href="#"
              className="text-blue-600 underline font-medium text-base sm:text-lg block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Student Support
            </motion.a>
          </motion.div>

          {/* Horizontal Cards Section */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Student Support */}
            <motion.div
              className="bg-white p-6 rounded-lg w-full sm:w-[48%] lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-gray-800 text-lg">Student Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our team is here 24/7 to assist you with test series, counseling, or exam strategies.
              </p>
            </motion.div>

            {/* Feedback and Suggestions */}
            <motion.div
              className="bg-white p-6 rounded-lg w-full sm:w-[48%] lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-gray-800 text-lg">Feedback & Suggestions</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your feedback helps us improve! Share your thoughts to make ICEBERG even better.
              </p>
            </motion.div>

            {/* Success Stories */}
            <motion.div
              className="bg-white p-6 rounded-lg w-full sm:w-full lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-gray-800 text-lg">Success Stories</h3>
              <p className="text-sm text-gray-600 mt-2">
                Have ICEBERG's test series helped you? Share your experience at
                <a href="mailto:success@icebergexams.com" className="text-blue-600">
                  {" "}
                  success@icebergexams.com
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Zoho Form Embed */}
        <motion.div
          className="bg-[#EEF6FF] rounded-lg p-6 sm:p-8 shadow-lg w-full"
          variants={slideInRight}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.iframe
            src="https://forms.zohopublic.in/temp77261gm1/form/ContactUs/formperma/0AfcmeoQrO6xqt_X4H_SZTojLn0IXMq6bzvzCEy7ZuY"
            width="100%"
            height="700px"
            className="border-none w-full rounded-md mt-4"
            allowFullScreen
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
