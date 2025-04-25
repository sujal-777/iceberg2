// import ContactUs from "@/components/ContactPage/Contactus";
// import FAQSection from "@/components/home/FaqSec";
// import FreeBatchesSection from "@/components/ContactPage/instant"
// import Contact from "@/components/home/Contact-Us"

// export default function PAGE() {
//   return (
//     <>
//       <ContactUs />
//       <FAQSection />
//       <FreeBatchesSection/>1
//       <Contact/>
//     </>
//   );
// }


import ContactUs from "@/components/ContactPage/Contactus";
import FAQSection from "@/components/home/FaqSec";
import FreeBatchesSection from "@/components/ContactPage/instant";
import Contact from "@/components/home/Contact-Us";

export default function PAGE() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-16 py-8 max-w-screen-xl mx-auto">
      <ContactUs />
      <FAQSection />
      <FreeBatchesSection />
      <Contact />
    </div>
  );
}
