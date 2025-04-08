import Image from "next/image";

export default function Mission() {
  return (
    <section className="relative bg-blue-600 py-16 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Our Mission
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
        {/* Card Image 1 */}
        <div className="flex justify-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/mission-1.png"
            alt="Mission 1"
            width={450}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Card Image 2 */}
        <div className="flex justify-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/mission-2.png"
            alt="Mission 2"
            width={450}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Card Image 3 */}
        <div className="flex justify-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/mission-3.png"
            alt="Mission 3"
            width={450}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
