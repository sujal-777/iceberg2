import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/fallback.png"
        alt="some image"
        layout="responsive"
        width={1920}
        height={765}
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
};

export default ImageSection;
