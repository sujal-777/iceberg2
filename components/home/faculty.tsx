import Image from 'next/image';

export default function FacultyShowcase() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Section */}
        <div className="w-full lg:w-2/5 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            India’s Finest <br /> Faculties for CA, <br /> CS and CMA Classes
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Led by India’s finest CA, CS, and CMA educators, we provide expert mentorship,
            conceptual clarity, and strategic exam guidance ensuring you not only excel in your journey
            but emerge as an industry-ready professional, equipped with practical skills, real-world
            knowledge, and the confidence to succeed.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition">
              Get in touch
            </button>
          </div>
        </div>

        {/* Right Section - Faculty Card */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <div className="bg-[#EEF6FF] border border-gray-200 shadow-md rounded-xl p-6 sm:p-8 max-w-md w-full text-center">
            <Image 
              src="/faculty1.png" 
              alt="CA Anirudh Sharma" 
              width={600} 
              height={300} 
              className="rounded-lg object-cover w-full h-auto"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-4">
              CA ANIRUDH SHARMA
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              12+ Years in Coaching experience
            </p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
              A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education.
              With innovative teaching methods and a student-centric approach, he has made complex subjects
              accessible, ensuring aspiring CAs receive top-notch guidance, support, and mentorship to excel.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
