import Image from 'next/image';

export default function FacultyShowcase() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-50">
      {/* Left Section */}
      <div className="md:w-1/4 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-bold">
          India’s Finest <br /> Faculties for CA, <br /> CS and CMA Classes
        </h1>
        <p className="text-gray-600">
          Led by India’s finest CA, CS, and CMA educators, we provide expert mentorship,
          conceptual clarity, and strategic exam guidance ensuring you not only excel in your journey
          but emerge as an industry-ready professional, equipped with practical skills, real-world
          knowledge, and the confidence to succeed.
        </p>
        <button className="px-6 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition">
          Get in touch
        </button>
      </div>

      {/* Right Section - Faculty Card */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="bg-[#EEF6FF] shadow-lg rounded-lg p-6 max-w-sm text-center border border-gray-200">
          <Image 
            src="/faculty1.png" 
            alt="CA Anirudh Sharma" 
            width={700} 
            height={300} 
            className="rounded-lg mx-auto" 
          />
          <h2 className="text-xl font-bold text-blue-700 mt-4">CA ANIRUDH SHARMA</h2>
          <p className="text-gray-500 text-sm">12+ Years in Coaching experience</p>
          <p className="text-gray-600 mt-2 text-sm">
            A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education.
            With innovative teaching methods and a student-centric approach, he has made complex subjects
            accessible, ensuring aspiring CAs receive top-notch guidance, support, and mentorship to excel.
          </p>
        </div>
      </div>
    </div>
  );
}
