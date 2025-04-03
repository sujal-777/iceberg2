import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Section - Contact Information */}
        <div className="text-black">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            Email, call, or fill out the form to discover how ICEBERG can
            simplify your CA & CMA exam preparation with expert guidance and test series.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-lg font-medium">info@iceberg.com</p>
            <p className="text-lg font-medium">845-852-1285</p>
            <a href="#" className="text-blue-600 underline font-medium">
              Student Support
            </a>
          </div>

          {/* Additional Information */}
          <div className="mt-10 space-y-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800">Student Support</h3>
              <p className="text-sm">
                Our team is here 24/7 to assist you with any questions about test series, 
                counseling, or exam preparation strategies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Feedback and Suggestions</h3>
              <p className="text-sm">
                Your feedback helps us improve! Share your thoughts, and let’s 
                make ICEBERG even better for CA & CMA aspirants like you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Success Stories</h3>
              <p className="text-sm">
                Have ICEBERG’s test series or counseling sessions helped you? 
                We’d love to hear your story! Share your experience at
                <a href="mailto:success@icebergexams.com" className="text-blue-600">
                  {" "}success@icebergexams.com
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Zoho Form Embed */}
        <div className="bg-[#EEF6FF] rounded-lg p-8 shadow-lg w-full">
          <h2 className="text-2xl font-semibold text-black">Get in Touch</h2>
          <p className="text-gray-600 text-sm mt-2">You can reach us anytime</p>

          {/* Zoho Form Embed - Replace YOUR_ZOHO_FORM_URL */}
          <iframe 
            src="YOUR_ZOHO_FORM_URL" 
            width="100%" 
            height="600px" 
            className="border-none mt-4"
            allowFullScreen>
          </iframe>

        </div>

      </div>
    </div>
  );
}
