"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Mission() {
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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative bg-blue-600 py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.h2
        className="text-3xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our{" "}
        </motion.span>
        <motion.span
          className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Mission
        </motion.span>
      </motion.h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          { src: "/mission-1.png", alt: "Mission 1", delay: 0 },
          { src: "/mission-2.png", alt: "Mission 2", delay: 0.2 },
          { src: "/mission-3.png", alt: "Mission 3", delay: 0.4 },
        ].map((mission, index) => (
          <motion.div
            key={index}
            className="flex justify-center group cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-lg"
              animate={index === 1 ? floatingAnimation : {}}
              whileHover={{
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src={mission.src || "/placeholder.svg"}
                alt={mission.alt}
                width={450}
                height={400}
                className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
