"use client"

import { useEffect, useState } from "react"
import BlogCard from "@/components/BlogSection/BlogCard"
import { createClient } from "@supabase/supabase-js"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const supabase = createClient(
  "https://dugvwcbevjwcqdbegsot.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Z3Z3Y2Jldmp3Y3FkYmVnc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODY5MDYsImV4cCI6MjA2MDQ2MjkwNn0.pihqfVNSly5OHje9U0Q61TLhrIh3xnRDmpGPp9NrTzs",
)

interface Blog {
  id: string
  title: string
  short_description: string
  author?: string
  image1?: string
  description1?: string
  image2?: string
  description2?: string
  image3?: string
  description3?: string
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select("*")
      if (error) {
        console.error("Error fetching blogs:", error)
      } else {
        setBlogs(data as Blog[])
      }
    }

    fetchBlogs()
  }, [])

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Blog
      </motion.h1>
      <motion.p
        className="text-center text-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Explore our latest articles, tips, and news updates.
      </motion.p>
      <motion.hr
        className="border-gray-300 w-32 mx-auto mb-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Latest Blogs
      </motion.h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
