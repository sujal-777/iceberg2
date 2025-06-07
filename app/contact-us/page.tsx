import ContactUs from "@/components/ContactPage/Contactus";
import FAQSection from "@/components/home/FaqSec";
import FreeBatchesSection from "@/components/ContactPage/instant"
import Contact from "@/components/home/Contact-Us"
import { motion } from "framer-motion"

export default function PAGE() {
  return (
    <>
     {/* <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    > */}
      <ContactUs />
      <FAQSection />
      <FreeBatchesSection/>
      <Contact/>
      {/* </motion.main> */}
    </>
  );
}


