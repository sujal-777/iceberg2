import Image from "next/image"
import Link from "next/link"

export default function Concept() {
  return (
    <section className="relative mx-auto my-8 h-[662px] w-full max-w-[1520px] overflow-hidden">
      {/* Background Image - Full width and height */}
      <div className="absolute inset-0 z-0">
        <Image src="/content-page.png" alt="Background image showing workspace" fill className="object-cover" priority />
      </div>

      {/* Rectangle overlay for the left half */}
      <div className="absolute inset-y-0 left-0 z-10 w-2/3">
        <Image src="/Rectangle.png" alt="White overlay background" fill className="object-cover opacity-85" priority />
      </div>

      {/* Content Container - Centered with margins */}
      <div className="relative z-20 mx-auto h-full max-w-7xl px-8 md:px-12">
        <div className="flex h-full items-center">
          <div className="max-w-xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Ace Your CA & CMA Exams</h2>
            <h3 className="mb-5 text-2xl font-semibold text-gray-800">With Expert Test Series & Counseling</h3>
            <p className="mb-10 text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
            Comprehensive learning resources designed by industry experts to help you succeed in your professional accounting examinations.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="#start"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:text-lg"
              >
                Start Learning Now
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:text-lg"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
