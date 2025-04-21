"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full pb-6"> {/* Increased bottom padding */}
      <div className="w-full bg-white shadow-sm">
        <div className="flex h-20 items-center justify-between px-4 md:px-12 lg:px-20"> {/* Increased height */}
          {/* Logo */}
          <div className="flex-shrink-0 pt-2">
            <Link href="/">
              <Image
                src="/logo-top.png"
                width={160} // Slightly larger logo
                height={60}
                alt="logo"
                className="object-cover"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/test-series" text="Test Series" hasDropdown />
            <NavLink href="/counseling" text="Counseling" />
            <NavLink href="/blog" text="Blog" />
            <NavLink href="/about-us" text="About Us"/>
            <NavLink href="/contact-us" text="Contact Us" />
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/login"
              className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link
              href="/test-series"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Blue line separator */}
      <div className="h-1 w-full bg-blue-500"></div> {/* Slightly thicker line */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="px-6 py-4 space-y-2">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="/test-series" text="Test Series" />
            <MobileNavLink href="/counseling" text="Counseling" />
            <MobileNavLink href="/blog" text="Blog" />
            <MobileNavLink href="/about-us" text="About Us" />
            <MobileNavLink href="/contact-us" text="Contact Us" />
          </div>
          <div className="mt-6 border-t border-gray-200 px-6 py-6 space-y-4">
            <Link
              href="/login"
              className="block w-full rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700"
            >
              Log in
            </Link>
            <Link
              href="/test-series"
              className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({
  href,
  text,
  hasDropdown = false,
}: {
  href: string;
  text: string;
  hasDropdown?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600"
    >
      {text}
      {hasDropdown && <ChevronDown className="ml-1 h-5 w-5" />}
    </Link>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-lg font-medium text-gray-700"
    >
      {text}
    </Link>
  );
}
