// components/VideoModal.jsx
import { X } from "lucide-react"
import { motion } from "framer-motion"

export default function VideoModal({ video, onClose }) {
  if (!video) return null
  const videoId = new URL(video.video_url).searchParams.get("v")

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="relative w-[80vw] h-[45vw] bg-black rounded-lg shadow-xl">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow" onClick={onClose}>
          <X className="text-black" />
        </button>
      </div>
    </motion.div>
  )
}
