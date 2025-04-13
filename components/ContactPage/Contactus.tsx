"use client";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-medium text-center mb-8 font-neue text-[64px]">Contact Us</h1>

      {/* Description */}
      <p className="text-[#696969] text-center font-neue text-[24px] font-normal leading-normal  mx-auto">
        At Iceberg, we are committed to helping aspiring professionals succeed in their CA, CS, and CMA journeys.
        Whether you&apos;re looking for course details, need help with registration, or want to know more about our online
        test series, our team is just a message away.
      </p>
      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Contact Information and Map */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Information */}
        <div className="flex w-[297px] flex-col items-start gap-[40px]">
        <h2 className="text-black font-[Neue Montreal] text-[72px] not-italic font-medium leading-none tracking-[-0.09em]">ICEBERG</h2>
          <p  className="text-[#484848] font-inter text-[24px] not-italic font-semibold leading-none tracking-[-0.03em]">Iceberg Coaching Center</p>
          <address className="text-[#484848] font-inter text-[24px] not-italic font-normal leading-none tracking-[-0.03em]">
            123 Knowledge Street,
            <br />
            Dehradun, Uttarakhand 248001
            <br />
            India
          </address>

          <Link href="mailto:support@iceberg.com" className="text-blue-600 hover:underline block mb-6">
            support@iceberg.com
          </Link>

          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
            Get Direction
          </button>
        </div>

        {/* Map */}
        <div className="md:w-2/3">
          <div className="rounded-md shadow-md overflow-hidden w-full h-[300px] md:h-[400px]">
            <iframe
              title="Iceberg Coaching Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.748917369384!2d78.03219121504653!3d30.316495081777777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909290d6c624eff%3A0xe3d02d7bc66e03f!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1681800953836!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
}
