import Header from "@/components/home/Header"
import TestimonialCarousel from "@/components/home/testimonial"
import FacultyShowcase from "@/components/home/faculty"
<<<<<<< HEAD
import TestSeries from "@/components/TestSeries"
import AboutUs from "@/components/about-us"
import ContactUs from "@/components/Contact-Us"
import FAQSection from "@/components/home/FaqSec"
=======
import TestSeries from "@/components/home/TestSeries"
import AboutUs from "@/components/home/about-us"
import ContactUs from "@/components/home/Contact-Us"
>>>>>>> ddc92b6bcb1dd0ebd8d4aa984e01e84fc1bd9c23
export default function Home() {
  return (
    <>
      <main className="space-y-8 overflow-x-hidden">
        <Header />

        <AboutUs/>


        <TestSeries/>

         
        <FacultyShowcase/>

        <TestimonialCarousel/>

        <FAQSection/>

        <ContactUs/>
      </main>
    </>
    
  )
}
