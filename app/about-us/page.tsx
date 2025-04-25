// import Discover from "@/components/AboutUs/Discover";
// import Founder from "@/components/AboutUs/Founder";
// import Mission from "@/components/AboutUs/Mission";
// import OurMission from "@/components/AboutUs/OurMission";

// export default function AboutUs() {
//   return (
//     <main className="min-h-screen">
//       <Discover />
//       <Mission />
//       <OurMission />
//       <Founder />
      
//     </main>
//   );
// }

import Discover from "@/components/AboutUs/Discover";
import Founder from "@/components/AboutUs/Founder";
import Mission from "@/components/AboutUs/Mission";
import OurMission from "@/components/AboutUs/OurMission";

export default function AboutUs() {
  return (
    <main className="bg-white min-h-screen w-full">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-16">
        <Discover />
        <Mission />
        <OurMission />
        <Founder />
      </section>
    </main>
  );
}
