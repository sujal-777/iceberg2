import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CAExamHero() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Ace Your CA & CMA Exams <br className="hidden sm:block" />
              With Expert Test Series & Counseling
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Get access to top-quality test series, expert counseling and study materials to ensure your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Book an Appointment
              </Button>
            </div>
          </div>

          {/* Image Stack */}
          <div className="relative w-full flex items-center justify-center h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px]">
            {/* Left Image */}
            <div className="absolute left-0 sm:-left-4 md:-left-6 lg:-left-8 transform rotate-[-8deg] z-10">
              <div className="w-[140px] h-[240px] sm:w-[180px] sm:h-[300px] md:w-[220px] md:h-[400px] lg:w-[290px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/header-1.png"
                  alt="Student Left"
                  width={290}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Middle Image */}
            <div className="z-20 transform scale-105">
              <div className="w-[150px] h-[250px] sm:w-[190px] sm:h-[320px] md:w-[240px] md:h-[420px] lg:w-[290px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl rotate-3">
                <Image
                  src="/header-2.png"
                  alt="Student Middle"
                  width={290}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute right-0 sm:-right-4 md:-right-6 lg:-right-8 transform rotate-[-8deg] z-30">
              <div className="w-[140px] h-[240px] sm:w-[180px] sm:h-[300px] md:w-[220px] md:h-[400px] lg:w-[290px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/header-3.png"
                  alt="Student Right"
                  width={290}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
