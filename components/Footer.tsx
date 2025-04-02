"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f0f7ff] text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-[#0099ff] text-3xl font-bold">ICEBERG</h2>
            <p className="text-sm">
              ICEBERG provides expert-led test series, counseling, and study resources to help CA & CMA aspirants
              achieve their goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Test Series
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
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
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
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
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Contacts us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600" />
                  <Link href="mailto:hr@iceberg.com" className="text-gray-600 hover:text-blue-500">
                    hr@iceberg.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <Link href="tel:8458521285" className="text-gray-600 hover:text-blue-500">
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
          </div>
          <div className="text-sm text-gray-600 mt-2 md:mt-0">
            All Rights Reserved |{" "}
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
  )
}