import Image from "next/image";

export default function OurMission() {
  return (
    <section className="bg-[#F5FAFF] py-20 px-8 sm:px-20 rounded-2xl w-full max-w-[1600px] mx-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black mb-10 font-montreal">Our Mission</h2>
          <ul className="space-y-8 text-[18px] text-gray-800 font-inter leading-relaxed">
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span>To democratize education at scale in India.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span>To ensure every child has access to quality education at the most affordable costs.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span>
                To allow every child to realize his/her dream, live up to their true potential and be their lifelong learning partner.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Our-Position-Image.png"
            alt="Our Mission Visual"
            width={600}
            height={500}
            className="rounded-xl w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
