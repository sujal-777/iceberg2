import Image from "next/image";

export default function OurMission() {
  return (
    <section className="bg-[#F5FAFF] py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 rounded-2xl w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 font-montreal">
            Our Mission
          </h2>
          <ul className="space-y-6 text-base sm:text-lg text-gray-800 font-inter leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span>To democratize education at scale in India.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span>
                To ensure every child has access to quality education at the most affordable costs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span>
                To allow every child to realize his/her dream, live up to their true potential, and be their lifelong learning partner.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Our-Position-Image.png"
            alt="Our Mission Visual"
            width={600}
            height={500}
            className="rounded-xl w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
