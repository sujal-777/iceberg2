"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import Concept from "@/components/VideoSection/Concept"
import { Feature } from "@/components/VideoSection/Feature"
import { Preparation } from "@/components/VideoSection/Preparation"
import { Filters } from "@/components/VideoSection/ContentPage/Filters"
import VideoCard from "@/components/VideoSection/ContentPage/VideoCard"
import VideoModal from "@/components/VideoSection/ContentPage/VideoModal"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function PAGE() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [limit, setLimit] = useState(6)
  const [bookmarks, setBookmarks] = useState([])
  const [search, setSearch] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("All")
  const [sortOrder, setSortOrder] = useState("newest")
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fetchVideos = async () => {
    setLoading(true)
    const { data, error } = await supabase.from("videos").select("*")

    if (error) {
      console.error("Error fetching videos:", error)
    } else {
      setVideos(data || [])
    }
    setLoading(false)
  }

  const handleBookmark = (id) => {
    setBookmarks((prev) => (prev.includes(id) ? prev.filter((b) => b !== id) : [id, ...prev]))
  }

  const handleSearchChange = (value) => {
    setSearch(value)
    setLimit(6)
  }

  const handleSubjectChange = (value) => {
    setSubjectFilter(value)
    setLimit(6)
  }

  const handleSortChange = (value) => {
    setSortOrder(value)
    setLimit(6)
  }

  const filterAndSortVideos = () => {
    let filtered = [...videos]

    if (search.trim()) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(searchLower) ||
          video.short_desc.toLowerCase().includes(searchLower) ||
          video.lecturer_name.toLowerCase().includes(searchLower),
      )
    }

    if (subjectFilter !== "All") {
      filtered = filtered.filter((video) => video.subject === subjectFilter)
    }

    if (sortOrder === "newest") {
      filtered.sort((a, b) => b.id - a.id)
    } else if (sortOrder === "oldest") {
      filtered.sort((a, b) => a.id - b.id)
    }

    return filtered
  }

  const orderedVideos = filterAndSortVideos()
  const displayVideos = [
    ...orderedVideos.filter((v) => bookmarks.includes(v.id)),
    ...orderedVideos.filter((v) => !bookmarks.includes(v.id)),
  ].slice(0, limit)

  useEffect(() => {
    fetchVideos()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Concept />

      <motion.div
        className="max-w-7xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
            Concept{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Videos
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Filters
            search={search}
            onSearchChange={handleSearchChange}
            subject={subjectFilter}
            onSubjectChange={handleSubjectChange}
            sortOrder={sortOrder}
            onSortOrderChange={handleSortChange}
          />
        </motion.div>

        {loading ? (
          <motion.div
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-blue-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {displayVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard
                    video={video}
                    onClick={(v) => setSelectedVideo(v)}
                    onBookmark={handleBookmark}
                    isBookmarked={bookmarks.includes(video.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {limit < orderedVideos.length && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => setLimit((prev) => prev + 6)}>Load More Videos</Button>
            </motion.div>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
        </AnimatePresence>
      </motion.div>

      <Feature />
      <Preparation />
    </motion.div>
  )
}
