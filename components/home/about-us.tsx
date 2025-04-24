import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#EEF6FF] py-16 px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[800px] rounded-lg overflow-hidden">
              <Image
                src="/about-group.png"
                alt="Hero Image"
                width={800}
                height={550}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div>
            <h3 className="text-blue-700 font-bold uppercase tracking-wide text-lg sm:text-xl">
              Who We Are
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-black mt-2">
              “Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!”
            </p>
            <p className="text-gray-700 mt-4 text-base sm:text-lg">
              ICEBERG is a leading CA & CMA test series platform designed to help students achieve top scores and career success.
            </p>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">
              Our comprehensive approach, including mock tests, expert counseling, and strategic study planning, has helped thousands of students clear their exams with confidence.
            </p>
            <button className="mt-6 px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-700 text-blue-700 font-medium rounded-full hover:bg-blue-700 hover:text-white transition text-base sm:text-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
