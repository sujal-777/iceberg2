import Image from "next/image";

export default function Page() {
  return (
    <div>

    <div className="flex flex-col items-center text-center">
      {/* Header Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <Image 
          src="/test-series-header.png" 
          alt="header-image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-6 md:px-10 py-8 md:py-12 max-w-3xl md:max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
          CA Foundation Online Test
        </h2>
        <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
          CA Anirudh Sharma&apos;s classes provide top-notch guidance for aspiring Chartered Accountants, 
          offering in-depth knowledge and expert-designed courses. With a team of experienced CAs, our goal 
          is to simplify complex concepts and help you achieve your CA dreams with confidence. 🚀
        </p>
      </div>

    </div>

    
    </div>
  );
}
