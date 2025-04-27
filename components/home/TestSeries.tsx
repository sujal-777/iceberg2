import Image from "next/image";

export default function TestSeries() {
  return (
    <div className="bg-[#EEF6FF] min-h-screen flex flex-col items-center py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-black mb-22 text-center">
        Test Series Showcase
      </h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 w-full max-w-7xl px-4">
        {["CA TEST SERIES", "CS TEST SERIES", "CMA TEST SERIES"].map(
          (category, index) => (
            <button
              key={index}
              className="bg-white text-black text-sm sm:text-base font-semibold py-3 shadow-md hover:bg-gray-200 transition-all w-full rounded-md"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl px-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center"
          >
            <div className="flex justify-center items-center p-8">
              <Image
                src="/CALogo.png"
                alt="CA India Logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <div className="w-full bg-[#0052CC] text-white text-center py-4 text-lg font-bold">
              CA Foundation Exam
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
