import Image from 'next/image';

export default function FacultyShowcase() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-12 bg-gray-50 mx-[100px] sm:mx-4 md:mx-6 lg:mx-[100px]">
      
      {/* Left Section */}
      <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
          India’s Finest <br /> Faculties for CA, <br /> CS and CMA Classes
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Led by India’s finest CA, CS, and CMA educators, we provide expert mentorship,
          conceptual clarity, and strategic exam guidance ensuring you not only excel in your journey
          but emerge as an industry-ready professional, equipped with practical skills, real-world
          knowledge, and the confidence to succeed.
        </p>
        <button className="px-6 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition w-fit mx-auto lg:mx-0">
          Get in touch
        </button>
      </div>

      {/* Right Section - Faculty Card */}
      <div className="w-full lg:w-3/5 mt-10 lg:mt-0 flex justify-center">
        <div className="bg-[#EEF6FF] shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full text-center border border-gray-200">
          <Image 
            src="/faculty1.png" 
            alt="CA Anirudh Sharma" 
            width={600} 
            height={300} 
            className="rounded-lg mx-auto object-cover"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-4">CA ANIRUDH SHARMA</h2>
          <p className="text-gray-500 text-sm sm:text-base">12+ Years in Coaching experience</p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education.
            With innovative teaching methods and a student-centric approach, he has made complex subjects
            accessible, ensuring aspiring CAs receive top-notch guidance, support, and mentorship to excel.
          </p>
        </div>
      </div>
    </div>
  );
}
