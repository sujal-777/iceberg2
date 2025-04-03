import Image from "next/image";

export default function TestSeries() {
  return (
    <div className="bg-[#EEF6FF] min-h-auto flex flex-col items-center py-6 pt-14 pb-64">
      <h1 className="text-4xl font-bold text-black mb-4">Test Series Showcase</h1>

      <div className="flex space-x-8 mb-6">
        {["CA TEST SERIES", "CS TEST SERIES", "CMA TEST SERIES"].map(
          (category) => (
            <button
              key={category}
              className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden w-80"
          >
            <div className="p-6 flex justify-center">
              <Image
                src="/CALogo.png"
                alt="CA India Logo"
                width={150} 
                height={150} 
              />
            </div>
            <div className="bg-[#0052CC] text-white text-center py-4 text-lg font-bold">
              CA Foundation Exam
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
