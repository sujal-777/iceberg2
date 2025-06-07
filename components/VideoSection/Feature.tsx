"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from industry professionals with decades of experience in accounting and finance.",
    icon: "/icon-1.png",
  },
  {
    title: "Practice Tests",
    description: "Comprehensive test series with detailed solutions and performance analytics.",
    icon: "/icon-2.png",
  },
  {
    title: "Live Counseling",
    description: "One-on-one guidance from mentors to help you navigate your exam preparation.",
    icon: "/icon-3.png",
  },
  {
    title: "Study Materials",
    description: "Comprehensive notes, case studies and reference materials for in-depth learning.",
    icon: "/icon-4.png",
  },
]

export function Feature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="mx-auto my-16 px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={cardVariants}>
          <Card className="border rounded-lg overflow-hidden relative group cursor-pointer h-full">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="p-6 h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.div
                    className="bg-gray-100 rounded-full p-4 mb-4 group-hover:bg-blue-50 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.title}
                        width={30}
                        height={30}
                        className="h-10 w-10"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-2 text-center group-hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </CardContent>
            </motion.div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
