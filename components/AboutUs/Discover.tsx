import Image from "next/image";

export default function Discover() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl">
        <Image
          src="/AboutUs2.png"
          alt="ICEBERG Team"
          width={1520}
          height={826}
          className="object-cover rounded-3xl w-full h-auto max-h-[700px] sm:max-h-[500px] md:max-h-[650px]"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 md:p-10 rounded-3xl">
          <div className="bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-md mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm md:text-base font-medium">About ICEBERG</p>
          </div>

          <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-[30px] italic font-medium font-montreal max-w-2xl mb-3 sm:mb-4 leading-snug">
            Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!
          </h1>

          <p
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wide max-w-3xl"
            style={{ fontFamily: "Neue Montreal" }}
          >
            ICEBERG is a CA & CMA test series platform designed to help students
            achieve top scores and career success. Our comprehensive approach,
            including mock tests, expert counseling, and strategic guidance, has
            helped thousands of students ace their exams and secure top ranks.
          </p>
        </div>
      </div>
    </section>
  );
}
