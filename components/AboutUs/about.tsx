import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden rounded-3xl mx-auto my-6 max-w-6xl">
        <div className="relative">
          <Image
            src="/image.png"
            alt="ICEBERG Team"
            width={1520}
            height={826}
            className="object-cover rounded-3xl w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6 rounded-3xl">
            <div className="bg-blue-600 px-4 py-2 rounded-md mb-4">
              <p className="text-sm font-medium">About ICEBERG</p>
            </div>
            <h1 className="text-white text-2xl sm:text-[30px] italic font-light max-w-2xl mb-4">
              "Empowering Future Chartered Accountants & Cost Accountants with
              Expert Guidance & Unmatched Test Series!"
            </h1>
            <p className="text-white text-lg sm:text-xl font-normal tracking-wide max-w-3xl" style={{ fontFamily: "Neue Montreal" }}>
              ICEBERG is a CA & CMA test series platform designed to help
              students achieve top scores and career success. Our comprehensive
              approach, including mock tests, expert counseling, and strategic
              guidance, has helped thousands of students ace their exams and
              secure top ranks.
            </p>
          </div>
        </div>
      </section>

{/* Mission Image Section 1 */}
<section className="w-full bg-white py-12">
  <div className="w-full flex justify-center">
    <Image
      src="/AboutUs3.png"
      alt="About Us"
      width={1920}
      height={600}
      className="w-full h-auto object-cover"
    />
  </div>
</section>


{/* Mission Image Section 2 */}
<section className="w-full bg-[#EEF6FF]">
  <div className="w-[1600px] h-[771px] mx-auto flex justify-center items-center shrink-0">
    <Image
      src="/mission-main-2.png"
      alt="Mission Main"
      width={500}
      height={583}
      style={{ height: "auto" }}
      className="w-full object-cover rounded-xl"
    />
  </div>
</section>

      {/* Founder Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Founder</h2>
        <div className="max-w-4xl mx-auto text-center">
          {/* You can add an Image and Founder Bio here */}
          <p className="text-lg text-gray-700">
            Coming soon: Learn about the visionary who started ICEBERG and their mission to guide CA & CMA aspirants toward excellence.
          </p>
        </div>
      </section>
    </main>
  );
}