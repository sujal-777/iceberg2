"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full py-16 bg-[#e6f7f2]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-4">
          <p className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wider">
            STUDENT TESTIMONIALS
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
          See How ICEBERG Transformed Student&apos;s Exam Journeys
        </h2>

        <div className="relative max-w-4xl mx-auto">
        <Card className="overflow-hidden border-2 border-[#0066CC] rounded-2xl shadow-sm max-w-5xl mx-auto">
  <CardContent className="p-0">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between h-full">

      {/* Left Side: Image */}
      <div className="relative w-full md:w-[45%] h-full p-6">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={currentTestimonial.image || "/placeholder.svg"}
            alt={`${currentTestimonial.name}'s testimonial`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-md"
            >
              <Play className="h-7 w-7 fill-current" />
              <span className="sr-only">Play video</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-[55%] p-8 flex flex-col justify-between h-full">
        <div>
          {currentTestimonial.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-base text-gray-800 mb-6 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
            <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-semibold text-gray-900">
              {currentTestimonial.name}, {currentTestimonial.title}
            </p>
            <p className="text-sm text-gray-600">
              Rating: {currentTestimonial.rating} ⭐ (Passed {currentTestimonial.title} in {currentTestimonial.attempts} Attempt{currentTestimonial.attempts > 1 ? "s" : ""})
            </p>
          </div>
        </div>
      </div>

    </div>
  </CardContent>
</Card>


          {/* Navigation buttons */}
          <Button
            onClick={prevTestimonial}
            size="icon"
            className="absolute left-[-60px]  top-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            onClick={nextTestimonial}
            size="icon"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
