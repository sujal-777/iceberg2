"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Blog {
  id: string
  image1?: string
  title: string
  short_description: string
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <motion.div
        className="border rounded-lg p-4 shadow-md transform transition duration-300 hover:scale-105 cursor-pointer flex flex-col h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image Container with Fixed Height */}
        {blog.image1 && (
          <motion.div
            className="w-full flex justify-center h-[270px] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={blog.image1 || "/placeholder.svg"}
              width={400}
              height={250}
              alt={blog.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        )}

        {/* Blog Content */}
        <motion.div
          className="flex flex-col flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl font-bold mt-2"
            whileHover={{ scale: 1.02, color: "#2563eb" }}
            transition={{ duration: 0.2 }}
          >
            {blog.title}
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-1 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {blog.short_description}
          </motion.p>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default BlogCard
