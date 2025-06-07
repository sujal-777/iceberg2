"use client"

import Image from "next/image"
import { PlayCircle, Bookmark } from "lucide-react"
import { motion } from "framer-motion"

export default function VideoCard({ video, onClick, onBookmark, isBookmarked }) {
  return (
    <motion.div
      className="relative shadow rounded-lg border hover:shadow-md transition cursor-pointer group"
      onClick={() => onClick(video)}
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
      <motion.div className="relative overflow-hidden rounded-t-lg">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={video.thumbnail || "/thumbnail.png"}
            alt={video.title}
            width={400}
            height={220}
            className="rounded-t-lg w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {video.duration}
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <PlayCircle className="text-white w-12 h-12 opacity-90 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>

      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h3
          className="font-semibold text-base mb-1 group-hover:text-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {video.title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-600 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {video.short_desc}
        </motion.p>
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Image
              src={video.lecturer_image || "/lecturer.png"}
              alt={video.lecturer_name}
              width={32}
              height={32}
              className="rounded-full"
            />
          </motion.div>
          <div>
            <p className="text-sm font-medium">{video.lecturer_name}</p>
            <p className="text-xs text-gray-500">{video.specialization}</p>
          </div>
          <motion.button
            className="ml-auto"
            onClick={(e) => {
              e.stopPropagation()
              onBookmark(video.id)
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div animate={isBookmarked ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.3 }}>
              <Bookmark
                size={20}
                className={`${isBookmarked ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} transition-colors`}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
