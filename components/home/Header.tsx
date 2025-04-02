import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Ace Your CA & CMA Exams With Expert Test Series & Counseling
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Get access to top-quality test series, expert counseling and study materials to ensure your success
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/trial"
                className="rounded-md border border-blue-600 bg-white px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                Start Free Trial
              </Link>
              <Link
                href="/appointment"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right image collage */}
          <div className="relative w-full max-w-lg h-[400px] md:h-[450px]">
            {/* First student image */}
            <div className="absolute left-[5%] top-[5%] w-[200px] h-[300px] overflow-hidden rounded-lg shadow-lg transform rotate-[-5deg]">
              <div className="relative w-full h-full">
                <Image
                  src="/header-1.png"
                  alt="Student studying in library"
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Second student image */}
            <div className="absolute left-[30%] top-[10%] w-[220px] h-[320px] overflow-hidden rounded-lg shadow-lg z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/header-2.png"
                  alt="Student with books"
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Third student image */}
            <div className="absolute left-[55%] top-[15%] w-[200px] h-[280px] overflow-hidden rounded-lg shadow-lg transform rotate-[5deg]">
              <div className="relative w-full h-full">
                <Image
                  src="/header-3.png"
                  alt="Student in classroom"
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}