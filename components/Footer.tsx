"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f0f7ff] text-gray-700 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left Section - Logo & Description */}
          <div className="md:col-span-2 flex flex-col space-y-6">
            <h2 className="text-[#0099ff] text-6xl font-bold">ICEBERG</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              ICEBERG provides expert-led test series, <br />
              counseling, and study resources to help <br />
              CA & CMA aspirants achieve their goals.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <br />

              <ul className="space-y-2">
                <li>
                  <Link href="/test-series" className="text-gray-600 hover:text-blue-500">
                    Test Series
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-blue-500">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <br />
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <br />
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Chat Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <br />
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600" />
                  <Link
                    href="mailto:hr@iceberg.com"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    hr@iceberg.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <Link
                    href="tel:8458521285"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    845-852-1285
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-gray-600 mt-1" />
                  <span className="text-gray-600">
                    123 Xavier St
                    <br />
                    San Francisco, 94102
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            Copyright © 2025{" "}
            <Link href="" className="text-blue-500">
              ICEBERG
            </Link>
            {" "}All Rights Reserved
          </div>
          <div className="text-sm text-gray-600 mt-2 md:mt-0">
            <Link href="" className="text-blue-500 hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
