import Image from "next/image";

export default function TestSeries() {
  return (
    <div className="bg-[#EEF6FF] min-h-screen flex flex-col items-center py-10">
      <h1 className="text-2xl font-semibold text-black mb-6">
        Test Series Showcase
      </h1>

      <div className="flex space-x-4 mb-8">
        {["CA TEST SERIES", "CS TEST SERIES", "CMA TEST SERIES"].map(
          (category) => (
            <button
              key={category}
              className="bg-white text-black font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-70"
          >
            <div className="p-6 flex justify-center">
              <Image
                src="/CALogo.png"
                alt="CA India Logo"
                width={120}
                height={120}
              />
            </div>
            <div className="bg-[#0052CC] text-white text-center py-3 font-semibold">
              CA Foundation Exam
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
