"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogSection/BlogCard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dugvwcbevjwcqdbegsot.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Z3Z3Y2Jldmp3Y3FkYmVnc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODY5MDYsImV4cCI6MjA2MDQ2MjkwNn0.pihqfVNSly5OHje9U0Q61TLhrIh3xnRDmpGPp9NrTzs"
);

interface Blog {
  id: string;
  title: string;
  short_description: string;
  author?: string;
  image1?: string;
  description1?: string;
  image2?: string;
  description2?: string;
  image3?: string;
  description3?: string;
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select("*");
      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data as Blog[]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-6">Our Blog</h1>
      <p className="text-center text-lg mb-4">
        Explore our latest articles, tips, and news updates.
      </p>
      <hr className="border-gray-300 w-32 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
