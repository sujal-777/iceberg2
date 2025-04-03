"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
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
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-wider">STUDENT TESTIMONIALS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          See How ICEBERG Transformed Students&apos; Exam Journeys
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Video thumbnail with play button */}
                <div className="relative w-full md:w-2/5">
                  <div className="aspect-square relative">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={`${currentTestimonial.name}'s testimonial`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="h-12 w-12 rounded-full bg-white/80 hover:bg-white text-blue-600">
                        <Play className="h-6 w-6 fill-current" />
                        <span className="sr-only">Play video</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="w-full md:w-3/5 p-6">
                  <div className="h-full flex flex-col">
                    <div className="flex-grow">
                      {currentTestimonial.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-gray-700 mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="flex items-center mt-4">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                        <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          {currentTestimonial.name}, {currentTestimonial.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          Rating: {currentTestimonial.rating} • (Passed {currentTestimonial.title} in{" "}
                          {currentTestimonial.attempts} Attempt{currentTestimonial.attempts > 1 ? "s" : ""})
                        </p>
                      </div>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            onClick={nextTestimonial}
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-md"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

