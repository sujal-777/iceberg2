"use client";
import Image from "next/image";

export default function FreeBatchesSection() {
  return (
    <div className="bg-blue-50 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-5xl mx-auto">
      {/* Left Section: Text Content */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Get Access To Our <span className="text-blue-600">Free Batches</span> Now
        </h2>
        <p className="text-gray-600 mt-2">Get instant access to material & Test series</p>

        {/* Input Field */}
        <div className="mt-3 flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-sm mx-auto sm:mx-0">
          <span className="px-3 text-gray-700">+91</span>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-3 py-2">⏩</button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="sm:w-1/2 flex justify-center">
        <Image
          src="/img1.png" // Ensure this path is correct
          alt="Iceberg Illustration"
          width={220}  // Reduced width for better alignment
          height={220}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
