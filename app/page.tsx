import Header from "@/components/home/Header"
import TestimonialCarousel from "@/components/home/testimonial"
import FacultyShowcase from "@/components/home/faculty"
import TestSeries from "@/components/home/TestSeries"
import AboutUs from "@/components/home/about-us"
import ContactUs from "@/components/home/Contact-Us"
import FAQSection from "@/components/home/FaqSec"
export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
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
