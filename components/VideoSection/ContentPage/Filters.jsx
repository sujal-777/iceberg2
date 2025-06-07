"use client"

import { motion } from "framer-motion"

export function Filters({ search, onSearchChange, sortOrder, onSortChange, subject, onSubjectChange }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.select
          className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </motion.select>
        <motion.select
          className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        >
          <option value="All">Explore Videos</option>
          <option value="ca-final">CA Final</option>
          <option value="cs">CS</option>
          <option value="ca-intermediate">CA Intermediate</option>
        </motion.select>
      </motion.div>
    </motion.div>
  )
}
