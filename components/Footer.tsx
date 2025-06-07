"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [typedText, setTypedText] = useState("")
  const fullText = "ICEBERG"

  // Typing animation effect
  useEffect(() => {
    if (isInView) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 150)

      return () => clearInterval(interval)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const socialIconVariants = {
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
    <motion.footer
      className="bg-[#f0f7ff] text-gray-700 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Section - Logo & Description */}
          <motion.div className="md:col-span-2 flex flex-col space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-[#0099ff] text-6xl font-bold relative"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.span className="relative">
                {typedText}
                <motion.span
                  className="absolute right-0 top-0 h-full w-[3px] bg-[#0099ff]"
                  animate={{
                    opacity: typedText.length < fullText.length ? [1, 0, 1] : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: typedText.length < fullText.length ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "loop",
                  }}
                />
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-md"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ICEBERG provides expert-led test series, <br />
              counseling, and study resources to help <br />
              CA & CMA aspirants achieve their goals.
            </motion.p>
            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { icon: <Facebook size={24} />, href: "#" },
                { icon: <Twitter size={24} />, href: "#" },
                { icon: <Instagram size={24} />, href: "#" },
                { icon: <Linkedin size={24} />, href: "#" },
                { icon: <Youtube size={24} />, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  variants={socialIconVariants}
                  custom={index}
                  whileHover={{ scale: 1.2, color: "#3b82f6" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={social.href} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Quick Links
              </motion.h3>
              <br />

              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { text: "Test Series", href: "/test-series" },
                  { text: "Blogs", href: "/blog" },
                  { text: "Updates", href: "#" },
                  { text: "Pricing", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Company
              </motion.h3>
              <br />
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { text: "About", href: "/about" },
                  { text: "Contact Us", href: "/contact" },
                  { text: "Careers", href: "#" },
                  { text: "Culture", href: "#" },
                  { text: "Success Stories", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Support
              </motion.h3>
              <br />
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { text: "Getting Started", href: "#" },
                  { text: "Help Center", href: "#" },
                  { text: "Chat Support", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Contact Us
              </motion.h3>
              <br />
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
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
                    <Mail size={16} className="text-gray-600" />
                  </motion.div>
                  <Link href="mailto:hr@iceberg.com" className="text-gray-600 hover:text-blue-500">
                    hr@iceberg.com
                  </Link>
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  >
                    <Phone size={16} className="text-gray-600" />
                  </motion.div>
                  <Link href="tel:8458521285" className="text-gray-600 hover:text-blue-500">
                    845-852-1285
                  </Link>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1.5,
                    }}
                  >
                    <MapPin size={16} className="text-gray-600 mt-1" />
                  </motion.div>
                  <span className="text-gray-600">
                    123 Xavier St
                    <br />
                    San Francisco, 94102
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="text-sm text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Copyright © 2025{" "}
            <Link href="" className="text-blue-500">
              ICEBERG
            </Link>{" "}
            All Rights Reserved
          </motion.div>
          <motion.div
            className="text-sm text-gray-600 mt-2 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="" className="text-blue-500 hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
