"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Discover() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-[200px] overflow-hidden">
      <motion.section
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl mx-auto my-6 max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="relative rounded-3xl overflow-hidden" style={{ scale }}>
          <motion.div style={{ y }}>
            <Image
              src="/AboutUs2.png"
              alt="ICEBERG Team"
              width={1520}
              height={826}
              className="object-cover rounded-3xl w-full h-auto max-h-[700px] sm:max-h-[500px] md:max-h-[650px]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6 sm:p-8 md:p-10 rounded-3xl"
            style={{ opacity }}
          >
            <motion.div
              className="bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-md mb-3 sm:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xs sm:text-sm md:text-base font-medium">About ICEBERG</p>
            </motion.div>

            <motion.h1
              className="text-white text-lg sm:text-2xl md:text-3xl lg:text-[30px] italic font-medium font-montreal max-w-2xl mb-3 sm:mb-4 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
                Empowering Future Chartered Accountants & Cost Accountants with{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Expert Guidance & Unmatched Test Series!
              </motion.span>
            </motion.h1>

            <motion.p
              className="hidden md:block text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wide max-w-3xl"
              style={{ fontFamily: "Neue Montreal" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              ICEBERG is a CA & CMA test series platform designed to help students achieve top scores and career
              success. Our comprehensive approach, including mock tests, expert counseling, and strategic guidance, has
              helped thousands of students ace their exams and secure top ranks.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
