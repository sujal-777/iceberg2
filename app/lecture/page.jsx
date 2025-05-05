// "use client";

// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient";
// import { Button } from "@/components/ui/button";
// import Concept from "@/components/VideoSection/Concept";
// import { Feature } from "@/components/VideoSection/Feature";
// import { Preparation } from "@/components/VideoSection/Preparation";
// import { Filters } from "@/components/VideoSection/ContentPage/Filters";
// import VideoCard from "@/components/VideoSection/ContentPage/VideoCard.jsx";
// import VideoModal from "@/components/VideoSection/ContentPage/VideoModal.jsx";

// export default function PAGE() {
//   // const [selectedVideo, setSelectedVideo] = useState<null | typeof mockVideos[0]>(null);

//   // const mockVideos = [
//   //     {
//   //       id: 1,
//   //       title: "Advanced Financial Reporting Standards",
//   //       short_desc: "A comprehensive breakdown of complex financial reporting standards with practical examples for CA",
//   //       duration: "41:30",
//   //       thumbnail: "/thumbnail.png",
//   //       lecturer_name: "Dr. Rajesh Sharma",
//   //       specialization: "CA, CMA, PhD",
//   //       lecturer_image: "/lecturer.png",
//   //       video_url: "https://link.testfile.org/bNYZFw",
//   //     },
//   //     // Add 5 more mock items...
//   //   ]

//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [limit, setLimit] = useState(6);
//   const [bookmarks, setBookmarks] = useState([]);

//   const fetchVideos = async () => {
//     const { data, error } = await supabase
//       .from("videos") 
//       .select("*")
//       .order("id", { ascending: false });

//     if (error) {
//       console.error("Error fetching videos:", error);
//     } else {
//       setVideos(data);
//     }
//   };

//   const handleBookmark = (id) => {
//     setBookmarks((prev) =>
//       prev.includes(id) ? prev.filter((b) => b !== id) : [id, ...prev]
//     );
//   };

//   const displayVideos = [
//     ...videos.filter((v) => bookmarks.includes(v.id)),
//     ...videos.filter((v) => !bookmarks.includes(v.id)),
//   ].slice(0, limit);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <Concept />

//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold text-center mb-8">Concept Videos</h1>

//         {/* TODO: Add Filter/Search Bar later */}
//         <Filters />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
//           {displayVideos.map((video) => (
//             <VideoCard
//               key={video.id}
//               video={video}
//               onClick={(v) => setSelectedVideo(v)}
//               onBookmark={handleBookmark}
//             />
//           ))}
//         </div>

//         {limit < videos.length && (
//           <div className="text-center">
//             <Button onClick={() => setLimit((prev) => prev + 6)}>
//               Load More Videos
//             </Button>
//           </div>
//         )}

//         <VideoModal
//           video={selectedVideo}
//           onClose={() => setSelectedVideo(null)}
//         />
//       </div>

//       <Feature />
//       <Preparation />
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import Concept from "@/components/VideoSection/Concept";
import { Feature } from "@/components/VideoSection/Feature";
import { Preparation } from "@/components/VideoSection/Preparation";
import { Filters } from "@/components/VideoSection/ContentPage/Filters";
import VideoCard from "@/components/VideoSection/ContentPage/VideoCard.jsx";
import VideoModal from "@/components/VideoSection/ContentPage/VideoModal.jsx";

export default function PAGE() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [limit, setLimit] = useState(6);
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from("videos")
      .select("*");

    if (error) {
      console.error("Error fetching videos:", error);
    } else {
      setVideos(data || []);
    }
  };

  const handleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [id, ...prev]
    );
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setLimit(6); // Reset pagination when filters change
  };

  const handleSubjectChange = (value) => {
    setSubjectFilter(value);
    setLimit(6);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    setLimit(6);
  };

  const filterAndSortVideos = () => {
    let filtered = [...videos];

    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(searchLower) ||
          video.short_desc.toLowerCase().includes(searchLower) ||
          video.lecturer_name.toLowerCase().includes(searchLower)
      );
    }

    if (subjectFilter !== "All") {
      filtered = filtered.filter(
        (video) => video.subject === subjectFilter
      );
    }

    if (sortOrder === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortOrder === "oldest") {
      filtered.sort((a, b) => a.id - b.id);
    }

    return filtered;
  };

  const orderedVideos = filterAndSortVideos();
  const displayVideos = [
    ...orderedVideos.filter((v) => bookmarks.includes(v.id)),
    ...orderedVideos.filter((v) => !bookmarks.includes(v.id)),
  ].slice(0, limit);

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="overflow-hidden">
      <Concept />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Concept Videos</h1>

        <Filters
          search={search}
          onSearchChange={handleSearchChange}
          subject={subjectFilter}
          onSubjectChange={handleSubjectChange}
          sortOrder={sortOrder}
          onSortOrderChange={handleSortChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {displayVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={(v) => setSelectedVideo(v)}
              onBookmark={handleBookmark}
              isBookmarked={bookmarks.includes(video.id)}
            />
          ))}
        </div>

        {limit < orderedVideos.length && (
          <div className="text-center">
            <Button onClick={() => setLimit((prev) => prev + 6)}>
              Load More Videos
            </Button>
          </div>
        )}

        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </div>

      <Feature />
      <Preparation />
    </div>
  );
}
