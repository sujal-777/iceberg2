import Image from "next/image";

export default function Discover() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl mx-auto my-6 max-w-7xl">
      <div className="relative">
        <Image
          src="/AboutUs2.png"
          alt="ICEBERG Team"
          width={1520}
          height={826}
          className="object-cover rounded-3xl w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6 rounded-3xl">
          <div className="bg-blue-600 px-4 py-2 rounded-md mb-4">
            <p className="text-sm font-medium">About ICEBERG</p>
          </div>
          <h1 className="text-white text-[30px] italic font-small font-montreal text-center max-w-2xl mb-4">
            "Empowering Future Chartered Accountants & Cost Accountants with
            Expert Guidance & Unmatched Test Series!"
          </h1>

          <p
            className="text-white text-[24px] font-normal tracking-[0.48px] max-w-3xl"
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
