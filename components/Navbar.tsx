"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { motion, AnimatePresence } from "framer-motion"
import { FiHome } from "react-icons/fi"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTestDropdownOpen, setIsTestDropdownOpen] = useState(false)
  const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false)
  const [isMobileTestDropdownOpen, setIsMobileTestDropdownOpen] = useState(false)
  const [isMobileAcademyDropdownOpen, setIsMobileAcademyDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useUser()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.div
      className="w-full pb-6 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`w-full bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}
        animate={{
          boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image src="/iceberg-icon.png" width={100} height={50} alt="icon" className="object-cover" />
            </motion.div>
            <motion.div className="flex-shrink-0 pt-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/">
                <Image src="/logo-top.png" width={160} height={80} alt="logo" className="object-cover" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex md:items-center md:space-x-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink href="/" text="Home" />
            <div className="relative">
              <motion.button
                onClick={() => {
                  setIsTestDropdownOpen(!isTestDropdownOpen)
                  setIsAcademyDropdownOpen(false)
                }}
                className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Test Series
                <motion.div animate={{ rotate: isTestDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="ml-1 h-5 w-5" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isTestDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {["ca", "cma", "cs"].map((type, index) => (
                      <motion.div
                        key={type}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={`/test-series/${type}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                        >
                          {type.toUpperCase()} Test Series
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <Link
                        href="/test-series/free-mock-test"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                      >
                        Free Mock Test
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink href="/counseling" text="Counseling" />
            <NavLink href="/blog" text="Blog" />
            <NavLink href="/lecture" text="Concept Videos" />

            <div className="relative">
              <motion.button
                onClick={() => {
                  setIsAcademyDropdownOpen(!isAcademyDropdownOpen)
                  setIsTestDropdownOpen(false)
                }}
                className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Academy
                <motion.div animate={{ rotate: isAcademyDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="ml-1 h-5 w-5" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isAcademyDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      { href: "/about-us", text: "About Us" },
                      { href: "/career", text: "Partner with Us" },
                      { href: "/contact-us", text: "Contact Us" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                        >
                          {item.text}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>

          {/* Auth Buttons */}
          <motion.div
            className="hidden md:flex md:items-center md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SignedOut>
              <div className="flex gap-4">
                <SignInButton mode="modal">
                  <motion.button
                    className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Log in
                  </motion.button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <motion.button
                    className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
  <motion.div
    className="flex items-center gap-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {user?.firstName && (
      <motion.span
        className="text-sm text-gray-700 font-medium hidden lg:inline"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        👋 Welcome, {user.firstName}
      </motion.span>
    )}
    <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Dashboard"
            labelIcon={<FiHome />}
            href="/dashboard"
          />
        </UserButton.MenuItems>
      </UserButton>
  </motion.div>
</SignedIn>

          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Blue line separator */}
      <motion.div
        className="h-1 w-full bg-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200 bg-white shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-2">
              <MobileNavLink href="/" text="Home" />
              <div className="space-y-1">
                <motion.button
                  onClick={() => setIsMobileTestDropdownOpen(!isMobileTestDropdownOpen)}
                  className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Test Series
                  <motion.div animate={{ rotate: isMobileTestDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {isMobileTestDropdownOpen && (
                    <motion.div
                      className="ml-4 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {["ca", "cma", "cs"].map((type, index) => (
                        <motion.div
                          key={type}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link
                            href={`/test-series/${type}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
                          >
                            {type.toUpperCase()} Test Series
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        <Link
                          href="/test-series/free-mock-test"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 rounded-md"
                        >
                          Free Mock Test
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <MobileNavLink href="/counseling" text="Counseling" />
              <MobileNavLink href="/blog" text="Blog" />
              <MobileNavLink href="/lecture" text="Concept Videos" />
              <div className="space-y-1">
                <motion.button
                  onClick={() => setIsMobileAcademyDropdownOpen(!isMobileAcademyDropdownOpen)}
                  className="flex w-full justify-between items-center px-4 py-3 text-lg font-medium text-gray-700"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Academy
                  <motion.div
                    animate={{ rotate: isMobileAcademyDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {isMobileAcademyDropdownOpen && (
                    <motion.div
                      className="ml-4 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MobileNavLink href="/about-us" text="About Us" />
                      <MobileNavLink href="/career" text="Career with Us" />
                      <MobileNavLink href="/contact-us" text="Contact Us" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <motion.div
              className="mt-6 border-t border-gray-200 px-6 py-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    className="block w-full rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700"
                    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Log in
                  </motion.button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <motion.button
                    className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <motion.div
                  className="flex flex-col items-center space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {user?.firstName && (
                    <motion.span
                      className="text-sm text-gray-700 font-medium text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      👋 Welcome, {user.firstName}
                    </motion.span>
                  )}
                  <UserButton afterSignOutUrl="/" />
                </motion.div>
              </SignedIn>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="flex items-center px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
      >
        {text}
      </Link>
    </motion.div>
  )
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
      >
        {text}
      </Link>
    </motion.div>
  )
}
