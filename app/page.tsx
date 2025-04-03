import Header from "@/components/home/Header"
import TestimonialCarousel from "@/components/home/testimonial"
import FacultyShowcase from "@/components/home/faculty"
import TestSeries from "@/components/TestSeries"
import AboutUs from "@/components/about-us"
import ContactUs from "@/components/Contact-Us"
export default function Home() {
  return (
    <>
      <main className="space-y-8 overflow-x-hidden">
        <Header />

        <AboutUs/>


        <TestSeries/>

         
        <FacultyShowcase/>

        <TestimonialCarousel/>


        <ContactUs/>
      </main>
    </>
    
  )
}
