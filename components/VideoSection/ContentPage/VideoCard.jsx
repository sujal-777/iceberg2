// components/VideoCard.jsx
import Image from "next/image"
import { PlayCircle, Bookmark } from "lucide-react"

export default function VideoCard({ video, onClick, onBookmark }) {
  return (
    <div className="relative shadow rounded-lg border hover:shadow-md transition cursor-pointer" onClick={() => onClick(video)}>
      <div className="relative">
        <Image src={video.thumbnail || "/thumbnail.png" } alt={video.title} width={400} height={220} className="rounded-t-lg w-full h-auto" />
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">{video.duration}</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="text-white w-12 h-12 opacity-90" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base mb-1">{video.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{video.short_desc}</p>
        <div className="flex items-center gap-3">
          <Image src={video.lecturer_image || "/lecturer.png"} alt={video.lecturer_name} width={32} height={32} className="rounded-full" />
          <div>
            <p className="text-sm font-medium">{video.lecturer_name}</p>
            <p className="text-xs text-gray-500">{video.specialization}</p>
          </div>
          <button className="ml-auto" onClick={(e) => { e.stopPropagation(); onBookmark(video.id); }}>
            <Bookmark size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
