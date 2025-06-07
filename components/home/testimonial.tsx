"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rahul",
    title: "CA Finalist",
    rating: 4.9,
    attempts: 1,
    image: "/testimonial1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim",
  },
  {
    id: 2,
    name: "Priya",
    title: "ACCA Student",
    rating: 4.8,
    attempts: 2,
    image: "/testimonial1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: 3,
    name: "Michael",
    title: "CFA Level 2",
    rating: 5.0,
    attempts: 1,
    image: "/testimonial1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      nextTestimonial()
    } else {
      prevTestimonial()
    }
  }

  return (
    <div className="w-full py-16 bg-[#e6f7f2] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wider">STUDENT TESTIMONIALS</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See How{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            ICEBERG
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {" "}
            Transformed Student's Exam Journeys
          </motion.span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden border-2 border-[#0066CC] rounded-2xl shadow-sm max-w-5xl mx-auto">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between h-full">
                    {/* Left Side: Image */}
                    <motion.div
                      className="relative w-full md:w-[45%] h-full p-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={currentTestimonial.image || "/placeholder.svg"}
                          alt={`${currentTestimonial.name}'s testimonial`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="icon"
                              className="h-14 w-14 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-md"
                            >
                              <Play className="h-7 w-7 fill-current" />
                              <span className="sr-only">Play video</span>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-[55%] p-8 flex flex-col justify-between h-full">
                      <div>
                        {currentTestimonial.content.split("\n\n").map((paragraph, i) => (
                          <motion.p
                            key={i}
                            className="text-base text-gray-800 mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Avatar className="h-12 w-12 border">
                          <AvatarImage
                            src={currentTestimonial.image || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                          />
                          <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">
                            {currentTestimonial.name}, {currentTestimonial.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            Rating: {currentTestimonial.rating} ⭐ (Passed {currentTestimonial.title} in{" "}
                            {currentTestimonial.attempts} Attempt{currentTestimonial.attempts > 1 ? "s" : ""})
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.div>
            <Button
              onClick={() => paginate(-1)}
              size="icon"
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </motion.div>

          <motion.div>
            <Button
              onClick={() => paginate(1)}
              size="icon"
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
