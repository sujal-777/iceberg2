// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

//   return (
//     <div className="w-full pb-6">
//       <div className="w-full bg-white shadow-sm">
//       <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">

//           <div className="flex-shrink-0 pt-2">
//             <Link href="/">
//               <Image
//                 src="/logo-top.png"
//                 width={160}
//                 height={60}
//                 alt="logo"
//                 className="object-cover"
//               />
//             </Link>
//           </div>
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-8 relative">
//             <NavLink href="/" text="Home" />
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//               >
//                 Test Series
//                 <ChevronDown
//                   className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50">
//                   {["ca", "cma", "cs"].map((type) => (
//                     <Link
//                       key={type}
//                       href={`/test-series/${type}`}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
//                     >
//                       {type.toUpperCase()} Test Series
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <NavLink href="/counseling" text="Counseling" />
//             <NavLink href="/blog" text="Blog" />
//             <NavLink href="/about-us" text="About Us" />
//             <NavLink href="/contact-us" text="Contact Us" />
//           </nav>
//           {/* Auth Buttons */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             <Link
//               href="/login"
//               className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               Log in
//             </Link>
//             <Link
//               href="/sign-up"
//               className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
//             >
//               Get Started
//             </Link>
//           </div>
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Blue line separator */}
//       <div className="h-1 w-full bg-blue-500"></div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
//           <div className="px-6 py-4 space-y-2">
//             <MobileNavLink href="/" text="Home" />
//             <div className="space-y-1">
//               <button
//                 onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//                 className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
//               >
//                 Test Series
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform duration-300 ${
//                     isMobileDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {isMobileDropdownOpen && (
//                 <div className="ml-4 space-y-2">
//                   {["ca", "cma", "cs"].map((type) => (
//                     <Link
//                       key={type}
//                       href={`/test-series/${type}`}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
//                     >
//                       {type.toUpperCase()} Test Series
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <MobileNavLink href="/counseling" text="Counseling" />
//             <MobileNavLink href="/blog" text="Blog" />
//             <MobileNavLink href="/about-us" text="About Us" />
//             <MobileNavLink href="/contact-us" text="Contact Us" />
//           </div>
//           <div className="mt-6 border-t border-gray-200 px-6 py-6 space-y-4">
//             <Link
//               href="/login"
//               className="block w-full rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700"
//             >
//               Log in
//             </Link>
//             <Link
//               href="/test-series"
//               className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function NavLink({
//   href,
//   text,
//   hasDropdown = false,
// }: {
//   href: string;
//   text: string;
//   hasDropdown?: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//     >
//       {text}
//       {hasDropdown && <ChevronDown className="ml-1 h-5 w-5" />}
//     </Link>
//   );
// }

// function MobileNavLink({ href, text }: { href: string; text: string }) {
//   return (
//     <Link
//       href={href}
//       className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//     >
//       {text}
//     </Link>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

//   return (
//     <div className="w-full pb-6">
//       <div className="w-full bg-white shadow-sm">
//         <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
//           <div className="flex-shrink-0 pt-2">
//             <Link href="/">
//               <Image
//                 src="/logo-top.png"
//                 width={160}
//                 height={60}
//                 alt="logo"
//                 className="object-cover"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-8 relative">
//             <NavLink href="/" text="Home" />
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//               >
//                 Test Series
//                 <ChevronDown
//                   className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50">
//                   {["ca", "cma", "cs"].map((type) => (
//                     <Link
//                       key={type}
//                       href={`/test-series/${type}`}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
//                     >
//                       {type.toUpperCase()} Test Series
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <NavLink href="/counseling" text="Counseling" />
//             <NavLink href="/blog" text="Blog" />
//             <NavLink href="/about-us" text="About Us" />
//             <NavLink href="/contact-us" text="Contact Us" />
//           </nav>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             <SignedOut>
//               <div className="flex gap-4">
//                 <SignInButton mode="modal">
//                   <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
//                     Log in
//                   </button>
//                 </SignInButton>
//                 <SignUpButton mode="modal">
//                   <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
//                     Get Started
//                   </button>
//                 </SignUpButton>
//               </div>
//             </SignedOut>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Blue line separator */}
//       <div className="h-1 w-full bg-blue-500"></div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
//           <div className="px-6 py-4 space-y-2">
//             <MobileNavLink href="/" text="Home" />
//             <div className="space-y-1">
//               <button
//                 onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//                 className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
//               >
//                 Test Series
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform duration-300 ${
//                     isMobileDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {isMobileDropdownOpen && (
//                 <div className="ml-4 space-y-2">
//                   {["ca", "cma", "cs"].map((type) => (
//                     <Link
//                       key={type}
//                       href={`/test-series/${type}`}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
//                     >
//                       {type.toUpperCase()} Test Series
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <MobileNavLink href="/counseling" text="Counseling" />
//             <MobileNavLink href="/blog" text="Blog" />
//             <MobileNavLink href="/about-us" text="About Us" />
//             <MobileNavLink href="/contact-us" text="Contact Us" />
//           </div>

//           {/* Mobile Auth Buttons */}
//           <div className="mt-6 border-t border-gray-200 px-6 py-6 space-y-4">
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="block w-full rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700">
//                   Log in
//                 </button>
//               </SignInButton>
//               <SignUpButton mode="modal">
//                 <button className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
//                   Get Started
//                 </button>
//               </SignUpButton>
//             </SignedOut>
//             <SignedIn>
//               <div className="flex justify-center">
//                 <UserButton afterSignOutUrl="/" />
//               </div>
//             </SignedIn>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function NavLink({
//   href,
//   text,
//   hasDropdown = false,
// }: {
//   href: string;
//   text: string;
//   hasDropdown?: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//     >
//       {text}
//       {hasDropdown && <ChevronDown className="ml-1 h-5 w-5" />}
//     </Link>
//   );
// }

// function MobileNavLink({ href, text }: { href: string; text: string }) {
//   return (
//     <Link
//       href={href}
//       className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
//     >
//       {text}
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTestDropdownOpen, setIsTestDropdownOpen] = useState(false);
  const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false);
  const [isMobileTestDropdownOpen, setIsMobileTestDropdownOpen] =
    useState(false);
  const [isMobileAcademyDropdownOpen, setIsMobileAcademyDropdownOpen] =
    useState(false);

  const { user } = useUser();

  return (
    <div className="w-full pb-6">
      <div className="w-full bg-white shadow-sm">
        <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
          <div className="flex-shrink-0 pt-2">
            <Link href="/">
              <Image
                src="/logo-top.png"
                width={160}
                height={60}
                alt="logo"
                className="object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8 relative">
            <NavLink href="/" text="Home" />
            <div className="relative">
              <button
                onClick={() => {
                  setIsTestDropdownOpen(!isTestDropdownOpen);
                  setIsAcademyDropdownOpen(false);
                }}
                className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Test Series
                <ChevronDown
                  className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
                    isTestDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isTestDropdownOpen && (
                <div className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50">
                  {["ca", "cma", "cs"].map((type) => (
                    <Link
                      key={type}
                      href={`/test-series/${type}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                    >
                      {type.toUpperCase()} Test Series
                    </Link>
                  ))}
                  <Link
                    href="/test-series/free-mock-test"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    Free Mock Test
                  </Link>
                </div>
              )}
            </div>
            <NavLink href="/counseling" text="Counseling" />
            <NavLink href="/blog" text="Blog" />
            <NavLink href="/lecture" text="Concept Videos" />

            <div className="relative">
              <button
                onClick={() => {
                  setIsAcademyDropdownOpen(!isAcademyDropdownOpen);
                  setIsTestDropdownOpen(false);
                }}
                className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Academy
                <ChevronDown
                  className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
                    isAcademyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAcademyDropdownOpen && (
                <div className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50">
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/career"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    Career with Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <SignedOut>
              <div className="flex gap-4">
                <SignInButton mode="modal">
                  <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Log in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-3">
                {user?.firstName && (
                  <span className="text-sm text-gray-700 font-medium hidden lg:inline">
                    👋 Welcome, {user.firstName}
                  </span>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
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
      <div className="h-1 w-full bg-blue-500"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="px-6 py-4 space-y-2">
            <MobileNavLink href="/" text="Home" />
            <div className="space-y-1">
              <button
                onClick={() =>
                  setIsMobileTestDropdownOpen(!isMobileTestDropdownOpen)
                }
                className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
              >
                Test Series
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isMobileTestDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileTestDropdownOpen && (
                <div className="ml-4 space-y-2">
                  {["ca", "cma", "cs"].map((type) => (
                    <Link
                      key={type}
                      href={`/test-series/${type}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
                    >
                      {type.toUpperCase()} Test Series
                    </Link>
                  ))}
                  <Link
                    href="/test-series/free-mock-test"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
                  >
                    Free Mock Test
                  </Link>
                </div>
              )}
            </div>
            <MobileNavLink href="/counseling" text="Counseling" />
            <MobileNavLink href="/blog" text="Blog" />
            <MobileNavLink href="/lecture" text="Concept Videos" />
            <div className="space-y-1">
              <button
                onClick={() =>
                  setIsMobileAcademyDropdownOpen(!isMobileAcademyDropdownOpen)
                }
                className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
              >
                Academy
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isMobileAcademyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileAcademyDropdownOpen && (
                <div className="ml-4 space-y-2">
                  <MobileNavLink href="/about-us" text="About Us" />
                  <MobileNavLink href="/career" text="Career with Us" />
                  <MobileNavLink href="/contact-us" text="Contact Us" />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="mt-6 border-t border-gray-200 px-6 py-6 space-y-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="block w-full rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex flex-col items-center space-y-2">
                {user?.firstName && (
                  <span className="text-sm text-gray-700 font-medium text-center">
                    👋 Welcome, {user.firstName}
                  </span>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
    >
      {text}
    </Link>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
    >
      {text}
    </Link>
  );
}
