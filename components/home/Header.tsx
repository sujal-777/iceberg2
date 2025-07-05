"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CAExamHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  // Floating elements data
  const floatingElements = [
    {
      id: 1,
      size: "w-16 h-16",
      color: "bg-blue-200",
      position: "top-10 left-10",
      animation: {
        y: [0, -25, 0],
        x: [0, 15, 0],
        rotate: [0, 180, 360],
      },
      duration: 8,
      delay: 0,
    },
    {
      id: 2,
      size: "w-12 h-12",
      color: "bg-purple-200",
      position: "top-20 right-16",
      animation: {
        y: [0, 20, 0],
        x: [0, -10, 0],
        scale: [1, 1.2, 1],
      },
      duration: 6,
      delay: 1,
    },
    {
      id: 3,
      size: "w-20 h-20",
      color: "bg-indigo-200",
      position: "bottom-32 left-20",
      animation: {
        y: [0, -30, 0],
        rotate: [0, -180, -360],
      },
      duration: 10,
      delay: 2,
    },
    {
      id: 4,
      size: "w-14 h-14",
      color: "bg-cyan-200",
      position: "bottom-20 right-10",
      animation: {
        y: [0, 25, 0],
        x: [0, 12, 0],
        scale: [1, 0.8, 1],
      },
      duration: 7,
      delay: 0.5,
    },
    {
      id: 5,
      size: "w-10 h-10",
      color: "bg-pink-200",
      position: "top-1/3 left-1/4",
      animation: {
        y: [0, -15, 0],
        x: [0, 20, 0],
        rotate: [0, 90, 180],
      },
      duration: 9,
      delay: 3,
    },
    {
      id: 6,
      size: "w-18 h-18",
      color: "bg-emerald-200",
      position: "top-2/3 right-1/4",
      animation: {
        y: [0, 18, 0],
        x: [0, -15, 0],
        scale: [1, 1.3, 1],
      },
      duration: 5,
      delay: 1.5,
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden relative">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-20 pointer-events-none ${element.position}`}
          animate={element.animation}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: element.delay,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
        />
      ))}

      {/* Additional Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-blue-300 opacity-30 pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-purple-300 to-pink-300 opacity-25 pointer-events-none"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.5,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
      />

      {/* Particle-like small dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-6 h-6 bg-blue-400 rounded-full opacity-40 pointer-events-none"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}


      <div className="container mx-auto px-6 lg:px-28 relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div className="space-y-6 max-w-2xl" variants={textVariants}>
            <motion.h1
              className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight"
              variants={textVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ace Your CA & CMA Exams
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                With Expert Test Series & Counseling
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg sm:text-xl"
              variants={textVariants}
            >
              Get access to top-quality test series, expert counseling and study
              materials to ensure your success
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={textVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Free Trial</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/counseling" tabIndex={-1}>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Book an Appointment
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Stack - Adjusted size */}
          <motion.div
            className="relative w-full flex items-center justify-center h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px]"
            variants={imageVariants}
          >
            {/* Left Image */}
            <motion.div
              className="absolute left-0 sm:-left-4 md:-left-6 lg:-left-8 transform rotate-[-8deg] z-10"
              initial={{ opacity: 0, x: -100, rotate: -20 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-[100px] h-[200px] sm:w-[140px] sm:h-[260px] md:w-[180px] md:h-[320px] lg:w-[230px] lg:h-[460px] overflow-hidden rounded-xl shadow-lg"
                animate={floatingAnimation}
              >
                <Image
                  src="/header-1.png"
                  alt="Student Left"
                  width={230}
                  height={460}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Middle Image */}
            <motion.div
              className="z-20 transform scale-105"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-[110px] h-[210px] sm:w-[150px] sm:h-[270px] md:w-[200px] md:h-[340px] lg:w-[240px] lg:h-[480px] overflow-hidden rounded-xl shadow-2xl rotate-3"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [3, 1, 3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/header-2.png"
                  alt="Student Middle"
                  width={240}
                  height={480}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute right-0 sm:-right-4 md:-right-6 lg:-right-8 transform rotate-[-8deg] z-30"
              initial={{ opacity: 0, x: 100, rotate: 20 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-[100px] h-[200px] sm:w-[140px] sm:h-[260px] md:w-[180px] md:h-[320px] lg:w-[230px] lg:h-[460px] overflow-hidden rounded-xl shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/header-3.png"
                  alt="Student Right"
                  width={230}
                  height={460}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
