import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full bg-[#EEF6FF]">
      <div className="w-[1400px] h-[571px] mx-auto flex justify-center items-center shrink-0">
        <Image
          src="/mission-main-2.png"
          alt="Mission Main"
          width={400}
          height={440}
          style={{ height: "auto" }}
          className="w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
