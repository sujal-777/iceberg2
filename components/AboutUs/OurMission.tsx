"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function OurMission() {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-[#F5FAFF] py-16 w-full overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[30px] max-w-screen-xl mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div className="w-full md:w-1/2" variants={slideInLeft}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-8 font-montreal"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Mission
              </motion.span>
            </motion.h2>

            <motion.ul className="space-y-6 text-base sm:text-lg text-gray-800 font-inter leading-relaxed">
              {[
                "To democratize education at scale in India.",
                "To ensure every child has access to quality education at the most affordable costs.",
                "To allow every child to realize his/her dream, live up to their true potential, and be their lifelong learning partner.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 group"
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span
                    className="text-yellow-500 text-xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    ⭐
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div className="w-full md:w-1/2 flex justify-center" variants={slideInRight}>
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-20 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Image
                  src="/Our-Position-Image.png"
                  alt="Our Mission Visual"
                  width={600}
                  height={500}
                  className="rounded-xl w-full max-w-md object-contain relative z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
