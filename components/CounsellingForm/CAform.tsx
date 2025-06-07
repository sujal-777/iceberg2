"use client"

import { toast } from "sonner"
import type React from "react"
import Image from "next/image"
import { useState, useRef } from "react"
import { HiOutlineCalendarDateRange } from "react-icons/hi2"
import { PiBookOpen } from "react-icons/pi"
import { MdPhone } from "react-icons/md"
import { FaRegUser } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "@/lib/supabaseClient"

const CAForm = () => {
  const [detailsSelection, setDetailsSelection] = useState<string>("Personal Details")
  const [detailsCompletionArray, setDetailsCompletionArray] = useState<string[]>(["Personal Details"])
  const dateInputRef = useRef<HTMLInputElement>(null)
  const dobInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    study: "",
    ca_level: "",
    attempt: "",
    additional: "",
    date: "",
    time: "",
    contact: {
      phone: false,
      whatsApp: false,
      email: false,
    },
  })

  const handledateIconClick = () => {
    dateInputRef.current?.showPicker?.()
    dateInputRef.current?.focus()
  }

  const handledobIconClick = () => {
    dobInputRef.current?.showPicker?.()
    dobInputRef.current?.focus()
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [name]: checked,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.from("counseling").insert([formData])

    if (error) {
      console.error("Insert error:", error.message)
      toast.error("Failed to submit your data. Please try again.")
      return
    }

    try {
      const res = await fetch("/api/send-thank-you", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.first_name,
          email: formData.email,
        }),
      })

      if (res.ok) {
        toast.success("Form submitted and confirmation email sent!")
      } else {
        const errText = await res.text()
        console.error("Email sending failed:", errText)
        toast.warning("Form submitted, but failed to send email.")
      }
    } catch (err) {
      console.error("Unexpected email send error:", err)
      toast.error("Something went wrong while sending the email.")
    }
  }

  const formSteps = [
    {
      SlNo: 1,
      name: "Personal Details",
    },
    {
      SlNo: 2,
      name: "Academics Details",
    },
    {
      SlNo: 3,
      name: "Additional Information & Declaration",
    },
  ]

  const CA_levelOptions = [
    "CA Foundation",
    "CA Intermidiate (Group I)",
    "CA Intermidiate (Group II)",
    "CA Final (Group I)",
    "CA Final (Group II)",
    "Not yet Entrolled/Planing to entroll",
    "Not applicable",
  ]

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section with Better Animation */}
      <motion.section
        className="relative w-full overflow-hidden rounded-3xl mx-[5px] md:mx-auto my-6 max-w-6xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div className="relative rounded-3xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
            <Image
              src="/icebergeTeam.png"
              alt="ICEBERG Team"
              width={1520}
              height={826}
              className="object-cover rounded-3xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-black/72 flex flex-col items-center justify-center text-white text-center p-6 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="bg-blue-600 px-4 py-2 rounded-[68px] mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <p className="text-sm font-medium">About ICEBERG</p>
            </motion.div>
            <motion.h1
              className="text-white text-2xl sm:text-[30px] italic font-light max-w-2xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              "Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!"
            </motion.h1>
            <motion.p
              className="text-white text-lg sm:text-xl font-normal tracking-wide max-w-3xl"
              style={{ fontFamily: "Neue Montreal" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              ICEBERG is a CA & CMA test series platform designed to help students achieve top scores and career
              success. Our comprehensive approach, including mock tests, expert counseling, and strategic guidance, has
              helped thousands of students ace their exams and secure top ranks.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Form Section - Keeping Original Structure */}
      <motion.section
        className="relative mt-16 flex flex-col justify-center items-center max-w-6xl mb-[60px] mx-[20px] md:mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-[32px] md:text-[43px] text-center font-[600]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Counseling Intake Form
        </motion.h1>
        <motion.p
          className="text-[18px] md:text-[23px] text-center mt-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Please fill out the form below to help us understand your needs better, This information will be kept
          confidential.
        </motion.p>

        <div className="flex flex-col gap-[57px] mt-[20px]">
          {/* Progress Steps - Keeping Original Structure */}
          <motion.div
            className="flex gap-[5px] md:gap-[29px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {formSteps.map((item) => (
              <motion.div
                key={item.SlNo}
                className="flex items-center gap-[5px] md:gap-[16px]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-[16px]">
                  <motion.div
                    className={`flex items-center justify-center w-[30px] h-[30px] md:w-[50px] md:h-[50px] border-[3px] text-center rounded-full ${
                      detailsCompletionArray.length >= item.SlNo ? "border-[#0048B0] text-[#0048B0]" : "border-black"
                    } ${
                      (detailsCompletionArray.includes("Academics Details") && item.name === "Personal Details") ||
                      (
                        detailsCompletionArray.includes("Additional Information & Declaration") &&
                          item.name === "Academics Details"
                      )
                        ? "bg-[#0048B0] text-white"
                        : "bg-white text-[#0048B0]"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={
                      detailsSelection === item.name
                        ? {
                            scale: [1, 1.1, 1],
                            transition: { duration: 0.5 },
                          }
                        : {}
                    }
                  >
                    <p className="">{item.SlNo}</p>
                  </motion.div>
                  <motion.p
                    className={`text-[18px] font-normal ${
                      detailsCompletionArray.length >= item.SlNo ? "text-[#0048B0]" : "text-black"
                    }`}
                    onClick={() => setDetailsSelection(item.name)}
                    whileHover={{ scale: 1.05 }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </motion.p>
                </div>
                {`${item.SlNo}` != "3" && (
                  <motion.div
                    className={`border-[2px] w-[50px] md:w-[130px] ${
                      detailsCompletionArray.length >= item.SlNo ? "border-[#0048B0]" : "border-black"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form Content - Preserving Original Structure */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Personal Details form - EXACT Original Structure */}
              {detailsSelection === "Personal Details" && (
                <motion.div
                  className="flex flex-col gap-[33px]"
                  key="personal"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="text-[24px] font-[600]">Name</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] max-w-[1312px]">
                      <motion.div
                        className="flex flex-col gap-[10px]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="first_name">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          className="max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                        />
                        <FaRegUser className="relative top-[-40px] left-[15px]" />
                      </motion.div>
                      <motion.div
                        className="flex flex-col gap-[10px]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          className="max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                    />
                    <MdPhone className="relative top-[-40px] left-[15px]" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                    />
                    <MdOutlineMail className="relative top-[-40px] left-[15px]" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-[24px] font-[600]">Date of birth</p>
                    <motion.div className="flex flex-col gap-[10px] relative" whileHover={{ scale: 1.01 }}>
                      <label htmlFor="dob">DD-MM-YYYY</label>
                      <HiOutlineCalendarDateRange
                        className="absolute left-[10px] top-[57px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={handledobIconClick}
                      />
                      <input
                        type="date"
                        name="dob"
                        ref={dobInputRef}
                        value={formData.dob}
                        onChange={handleChange}
                        className="max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-[24px] font-[600]">Gender</p>
                    {["Male", "Female", "Rather not say", "Others"].map((option) => (
                      <motion.div
                        key={option}
                        className="flex gap-[19px] items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={option}
                          id={option}
                          checked={formData.gender === option}
                          onChange={handleChange}
                          className="accent-[#0048B0]"
                        />
                        <label htmlFor={option}>{option}</label>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="study">Education</label>
                    <input
                      type="text"
                      name="study"
                      value={formData.study}
                      onChange={handleChange}
                      className="max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                    />
                    <PiBookOpen className="relative top-[-40px] left-[15px]" />
                  </motion.div>

                  <motion.button
                    className="text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white"
                    onClick={() => {
                      setDetailsSelection("Academics Details")
                      setDetailsCompletionArray((prev) => [...prev, "Academics Details"])
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}

              {/* Academics Details form - EXACT Original Structure */}
              {detailsSelection === "Academics Details" && (
                <motion.div
                  className="flex flex-col gap-[33px]"
                  key="academic"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="text-[20px] text-[#000000] font-[600]">
                      Current CA Level <span className="text-[#DA0027]">*</span>
                    </p>
                    <label htmlFor="select" className="">
                      Please select your current level in the CA program:
                    </label>
                    <motion.select
                      id="select"
                      name="ca_level"
                      value={formData.ca_level}
                      onChange={handleChange}
                      className="block max-w-[650px] h-[45px] p-2 border border-black rounded-[10px] focus:ring-[#0048B0] focus:border-blue-500"
                      required
                      whileHover={{ scale: 1.01 }}
                    >
                      {CA_levelOptions.map((option, idx) => (
                        <option key={idx} value={option} className="">
                          {option}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-[20px] text-[#000000] font-[600]">
                      Upcoming Exam Attempt <span className="text-[#DA0027]">*</span>
                    </p>
                    <div className="flex flex-col gap-[10px]">
                      <label htmlFor="attempt">
                        Which examination are you preparing for? Ex: May 2025, November 2025 etc. else NA
                      </label>
                      <motion.input
                        type="text"
                        name="attempt"
                        value={formData.attempt}
                        onChange={handleChange}
                        className="max-w-[1312px] h-[45px] border-[1px] border-[#000000] rounded-[10px]"
                        required
                        whileHover={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-[10px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-[20px] text-[#000000] font-[600]">Additional Comments</p>
                    <div className="flex flex-col gap-[10px]">
                      <label htmlFor="additional">Please share any other information or concerns you have:</label>
                      <motion.input
                        type="text"
                        name="additional"
                        value={formData.additional}
                        onChange={handleChange}
                        className="max-w-[1312px] h-[127px] border-[1px] border-[#000000] rounded-[10px]"
                        whileHover={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-[34px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.button
                      className="text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white"
                      onClick={() => {
                        setDetailsSelection("Personal Details")
                        setDetailsCompletionArray((prev) => prev.filter((item) => item !== "Academics Details"))
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back
                    </motion.button>
                    <motion.button
                      className="text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white"
                      onClick={() => {
                        setDetailsSelection("Additional Information & Declaration")
                        setDetailsCompletionArray((prev) => [...prev, "Additional Information & Declaration"])
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {/* Additional Information & Declaration - EXACT Original Structure */}
              {detailsSelection === "Additional Information & Declaration" && (
                <motion.div
                  className="flex flex-col gap-[33px]"
                  key="additional"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex flex-col md:flex-row gap-[42px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.div className="flex flex-col gap-[10px]" whileHover={{ scale: 1.01 }}>
                      <p className="text-[20px] text-[#000000] font-[600]">
                        Preferred Date <span className="text-[#DA0027]">*</span>
                      </p>
                      <p>Please select your preferred date for the counseling session:</p>
                      <div className="flex flex-col relative">
                        <HiOutlineCalendarDateRange
                          className="absolute left-[10px] top-[23px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          onClick={handledateIconClick}
                        />
                        <input
                          type="date"
                          name="date"
                          ref={dateInputRef}
                          value={formData.date}
                          onChange={handleChange}
                          className="max-w-[650px] h-[45px] border-[1px] border-[#000000] rounded-[10px] px-[30px]"
                        />
                        <label htmlFor="date" className="">
                          DD-MM-YYYY
                        </label>
                      </div>
                    </motion.div>
                    <motion.div className="flex flex-col gap-[10px]" whileHover={{ scale: 1.01 }}>
                      <p className="text-[20px] text-[#000000] font-[600]">
                        Preferred Time Slots <span className="text-[#DA0027]">*</span>
                      </p>
                      <p>Choose the time slots that suit you best:</p>
                      <input
                        type="time"
                        name="time"
                        placeholder="11:00 AM"
                        value={formData.time}
                        onChange={handleChange}
                        className="h-[45px] border-[1px] border-[#000000] rounded-[10px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-[20px] text-[#000000] font-[600]">
                      Contact preference <span className="text-[#DA0027]">*</span>
                    </p>
                    <p>
                      Your contact number will be used solely for scheduling adn communication purposes. All your
                      details are securely encrypted and kept confidential.
                    </p>

                    <motion.label
                      htmlFor=""
                      className="flex items-center gap-[19px]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="checkbox"
                        name="phone"
                        checked={formData.contact.phone}
                        onChange={handleChange}
                        className="accent-[#0048B0] w-5 h-5"
                      />
                      Phone
                    </motion.label>

                    <motion.label
                      htmlFor=""
                      className="flex items-center gap-[19px]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="checkbox"
                        name="whatsApp"
                        checked={formData.contact.whatsApp}
                        onChange={handleChange}
                        className="accent-[#0048B0] w-5 h-5"
                      />
                      WhatsApp
                    </motion.label>

                    <motion.label
                      htmlFor=""
                      className="flex items-center gap-[19px]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="checkbox"
                        name="email"
                        checked={formData.contact.email}
                        onChange={handleChange}
                        className="accent-[#0048B0] w-5 h-5"
                      />
                      Email
                    </motion.label>
                  </motion.div>

                  <motion.div
                    className="flex gap-[34px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.button
                      className="text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white"
                      onClick={() => {
                        setDetailsSelection("Academics Details")
                        setDetailsCompletionArray((prev) =>
                          prev.filter((item) => item !== "Additional Information & Declaration"),
                        )
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="text-[16px] text-[#0048B0] text-center w-[99px] h-[45px] rounded-[12px] border-[1px] border-[#0048B0] hover:bg-[#0048B0] hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.section>
    </main>
  )
}

export default CAForm
