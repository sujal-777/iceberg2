"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Mail, ExternalLink } from "lucide-react"

export default function ContactUs() {
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

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const title = "Contact Us"

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Header */}
      <motion.h1
        className="text-4xl font-medium text-center mb-8 font-neue text-[64px]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.05,
              ease: "easeOut",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description with fade-in animation */}
      <motion.p
        className="text-[#696969] text-center font-neue text-[24px] font-normal leading-normal mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        At Iceberg, we are committed to helping aspiring professionals succeed in their CA, CS, and CMA journeys.
        Whether you&apos;re looking for course details, need help with registration, or want to know more about our
        online test series, our team is just a message away.
      </motion.p>

      {/* Animated Divider */}
      <motion.div
        className="border-t border-gray-200 my-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Contact Information and Map */}
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Contact Information */}
        <motion.div className="flex w-[297px] flex-col items-start gap-[40px]" variants={slideInLeft}>
          <motion.h2
            className="text-black font-[Neue Montreal] text-[72px] not-italic font-medium leading-none tracking-[-0.09em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ICEBERG
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-[#484848] font-inter text-[24px] not-italic font-semibold leading-none tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Iceberg Coaching Center
          </motion.p>

          <motion.div
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <MapPin className="text-blue-600 mt-1" />
            </motion.div>
            <motion.address className="text-[#484848] font-inter text-[24px] not-italic font-normal leading-none tracking-[-0.03em]">
              123 Knowledge Street,
              <br />
              Dehradun, Uttarakhand 248001
              <br />
              India
            </motion.address>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <Mail className="text-blue-600" />
            </motion.div>
            <Link href="mailto:support@iceberg.com" className="text-blue-600 hover:underline block">
              support@iceberg.com
            </Link>
          </motion.div>

          <motion.button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Direction
            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Map */}
        <motion.div className="md:w-2/3" variants={slideInRight}>
          <motion.div
            className="rounded-md shadow-md overflow-hidden w-full h-[300px] md:h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <iframe
              title="Iceberg Coaching Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.748917369384!2d78.03219121504653!3d30.316495081777777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909290d6c624eff%3A0xe3d02d7bc66e03f!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1681800953836!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Divider */}
      <motion.div
        className="border-t border-gray-200 mt-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </motion.div>
  )
}
