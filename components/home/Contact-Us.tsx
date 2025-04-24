import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[200px] bg-white py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
        
        {/* Left Section - Contact Information */}
        <div className="text-black w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold">Contact Us</h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Email, call, or fill out the form to discover how ICEBERG can
            simplify your CA & CMA exam preparation with expert guidance and test series.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-base sm:text-lg font-medium">info@iceberg.com</p>
            <p className="text-base sm:text-lg font-medium">845-852-1285</p>
            <a href="#" className="text-blue-600 underline font-medium text-base sm:text-lg">
              Student Support
            </a>
          </div>

          {/* Horizontal Cards Section */}
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4">
            {/* Student Support */}
            <div className="bg-white p-6 rounded-lg w-full sm:w-[48%] lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition">
              <h3 className="font-semibold text-gray-800 text-lg">Student Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our team is here 24/7 to assist you with test series, counseling, or exam strategies.
              </p>
            </div>

            {/* Feedback and Suggestions */}
            <div className="bg-white p-6 rounded-lg w-full sm:w-[48%] lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition">
              <h3 className="font-semibold text-gray-800 text-lg">Feedback & Suggestions</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your feedback helps us improve! Share your thoughts to make ICEBERG even better.
              </p>
            </div>

            {/* Success Stories */}
            <div className="bg-white p-6 rounded-lg w-full sm:w-full lg:w-1/3 border border-transparent hover:border-blue-400 hover:bg-blue-50 transition">
              <h3 className="font-semibold text-gray-800 text-lg">Success Stories</h3>
              <p className="text-sm text-gray-600 mt-2">
                Have ICEBERG’s test series helped you? Share your experience at  
                <a href="mailto:success@icebergexams.com" className="text-blue-600">
                  {" "}success@icebergexams.com
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Zoho Form Embed */}
        <div className="bg-[#EEF6FF] rounded-lg p-6 sm:p-8 shadow-lg w-full">
          <iframe 
            src="https://forms.zohopublic.in/temp77261gm1/form/ContactUs/formperma/0AfcmeoQrO6xqt_X4H_SZTojLn0IXMq6bzvzCEy7ZuY" 
            width="100%" 
            height="700px" 
            className="border-none w-full rounded-md mt-4"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
