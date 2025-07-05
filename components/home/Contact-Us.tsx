"use client"
import { motion } from "framer-motion"
import type React from "react"

import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Loader2, CheckCircle } from "lucide-react"

interface FormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  additional: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    additional: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error } = await supabase.from("contact").insert([formData])

      if (error) {
        throw error
      }

      setIsSubmitted(true)
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        additional: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-40 bg-white py-12 overflow-hidden">
      <motion.div
        ref={ref}
        className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[58%_42%] gap-12 items-start"
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
            className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Student Support */}
            <motion.div
              className="bg-white p-6 rounded-lg flex-1 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer w-full"
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
              className="bg-white p-6 rounded-lg flex-1 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer w-full"
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
              className="bg-white p-6 rounded-lg flex-1 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer w-full"
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

        {/* Right Section - Custom Form */}
        <motion.div
          className="bg-[#EEF6FF] rounded-lg p-8 shadow-lg w-full min-h-[600px]"
          variants={slideInRight}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">You can reach us anytime</p>

            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 text-base"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 text-base"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 pl-10 h-12 text-base"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 text-base"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    name="additional"
                    placeholder="How can we help you?"
                    value={formData.additional}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none text-base"
                  />
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm bg-red-50 p-3 rounded-md"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium transition-colors text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
