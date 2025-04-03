"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full pb-4"> {/* Reduced bottom padding */}
      <div className="w-full bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 md:px-8 lg:px-16"> {/* Reduced height & width */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo-top.png"
                width={140} // Reduced logo size
                height={50}
                alt="logo"
                className="object-cover"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="/" text="Home" />
            <NavLink href="/test-series" text="Test Series" />
            <NavLink href="/counseling" text="Counseling" />
            <NavLink href="/blog" text="Blog" hasDropdown />
            <NavLink href="/about-us" text="About Us" hasDropdown />
            <NavLink href="/contact-us" text="Contact Us" />
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link
              href="/get-started"
              className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Thinner Blue Line Separator */}
      <div className="h-[2px] w-full bg-blue-500"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="px-4 py-3 space-y-2">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="/test-series" text="Test Series" />
            <MobileNavLink href="/counseling" text="Counseling" />
            <MobileNavLink href="/blog" text="Blog" />
            <MobileNavLink href="/about-us" text="About Us" />
            <MobileNavLink href="/contact-us" text="Contact Us" />
          </div>
          <div className="mt-4 border-t border-gray-200 px-4 py-4 space-y-3">
            <Link
              href="/login"
              className="block w-full rounded-md border border-gray-300 px-5 py-2 text-center text-sm font-medium text-gray-700"
            >
              Log in
            </Link>
            <Link
              href="/get-started"
              className="block w-full rounded-md bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white"
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
      className="flex items-center px-2 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
    >
      {text}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-700"
    >
      {text}
    </Link>
  );
}
