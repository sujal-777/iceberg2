import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#EEF6FF] min-h-screen flex justify-center items-center px-8">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Single Image */}
        <div className="relative w-full flex justify-center">
          <div className="w-[450px] h-auto rounded-lg overflow-hidden">
            <Image src="/about-group.png" alt="Hero Image" width={450} height={300} />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h3 className="text-blue-700 font-bold uppercase tracking-wide text-sm">
            Who We Are
          </h3>
          <p className="text-xl font-semibold italic text-black mt-2">
            “Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!”
          </p>
          <p className="text-gray-700 mt-4">
            ICEBERG is a leading CA & CMA test series platform designed to help students achieve top scores and career success.
          </p>
          <p className="text-gray-700 mt-2">
            Our comprehensive approach, including mock tests, expert counseling, and strategic study planning, has helped thousands of students clear their exams with confidence.
          </p>
          <button className="mt-6 px-6 py-2 border-2 border-blue-700 text-blue-700 font-medium rounded-full hover:bg-blue-700 hover:text-white transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
