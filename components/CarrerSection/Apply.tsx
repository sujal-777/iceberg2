"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Clock, DollarSign, Upload, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function JobApplication() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    expertise: "",
    additional_info: "",
    agree: false,
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")

    try {
      let resume_url = ""

      // Upload resume if selected
      if (resumeFile) {
        const fileExt = resumeFile.name.split(".").pop()
        const fileName = `${formData.first_name}_${formData.last_name}_${Date.now()}.${fileExt}`

        const { error: uploadError } = await supabase.storage.from("resumes").upload(fileName, resumeFile)

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage.from("resumes").getPublicUrl(fileName)

        resume_url = publicUrlData.publicUrl
      }

      // Save to Supabase
      const { error } = await supabase.from("job_application").insert([
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: Number.parseInt(formData.experience),
          expertise: formData.expertise,
          additional_info: formData.additional_info,
          resume_url,
        },
      ])

      if (error) throw error

      // Send email
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.first_name,
          email: formData.email,
        }),
      })

      if (!res.ok) {
        const errText = await res.text()
        console.error("Email sending failed:", errText)
        toast.warning("Application submitted, but email failed to send.")
      } else {
        toast.success("Application submitted and email sent successfully!")
      }

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        expertise: "",
        additional_info: "",
        agree: false,
      })
      setResumeFile(null)
    } catch (err) {
      console.error("Submission Error:", err)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="container mx-auto max-w-7xl py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="apply"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          Why{" "}
        </motion.span>
        <motion.span
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join Us
        </motion.span>
      </motion.h1>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            icon: <DollarSign className="h-5 w-5 text-blue-600" />,
            title: "Competitive Compensation",
            description: "Attractive remuneration package with performance - based incentive and timely payments.",
          },
          {
            icon: <Clock className="h-5 w-5 text-blue-600" />,
            title: "Flexible Work Hours",
            description: "Work from anywhere with flexible scheduling that fits your professional commitments.",
          },
          {
            icon: <Users className="h-5 w-5 text-blue-600" />,
            title: "Professional Network",
            description: "Connect with fellow experts and expand your professional network in the QA community.",
          },
        ].map((benefit, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-6 group cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
              whileHover={{ rotate: 360 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.3,
              }}
            >
              {benefit.icon}
            </motion.div>
            <motion.h3
              className="font-medium mb-2 group-hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {benefit.title}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {benefit.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          Apply{" "}
        </motion.span>
        <motion.span
          className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Now
        </motion.span>
      </motion.h2>

      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.form className="space-y-6 w-full" onSubmit={handleSubmit} variants={containerVariants}>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
            <motion.div
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <label htmlFor="first_name" className="block text-sm">
                First Name
              </label>
              <Input id="first_name" value={formData.first_name} onChange={handleChange} className="w-full" />
            </motion.div>
            <motion.div
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <label htmlFor="last_name" className="block text-sm">
                Last Name
              </label>
              <Input id="last_name" value={formData.last_name} onChange={handleChange} className="w-full" />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="email" className="block text-sm">
              Email Address
            </label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} className="w-full" />
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="phone" className="block text-sm">
              Phone Number
            </label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" />
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="position" className="block text-sm">
              Position Applying For
            </label>
            <Select onValueChange={(val) => handleSelectChange("position", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="educator">Educator</SelectItem>
                <SelectItem value="institutional_partnership">Institutional Partnership</SelectItem>
                <SelectItem value="paper_setter">Paper Setter</SelectItem>
                <SelectItem value="subject_reviewer">Subject Reviewer</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="experience" className="block text-sm">
              Years of Experience
            </label>
            <Input
              id="experience"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              className="w-full"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="expertise" className="block text-sm">
              Subject Expertise
            </label>
            <Select onValueChange={(val) => handleSelectChange("expertise", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ca_foundation">CA Foundation</SelectItem>
                <SelectItem value="ca_intermediate">CA Intermediate</SelectItem>
                <SelectItem value="ca_final">CA Final</SelectItem>
                <SelectItem value="gst">GST & Taxation</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label className="block text-sm">Resume/CV</label>
            <motion.div
              className="border-2 border-dashed rounded-lg p-8 text-center relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                borderColor: "#3b82f6",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="flex justify-center mb-4 relative z-10"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Upload className="h-10 w-10 text-blue-600" />
              </motion.div>
              <motion.p
                className="text-sm text-gray-500 mb-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Drag and drop your resume here, or click to select file
              </motion.p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                className="relative z-10"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <label htmlFor="additional_info" className="block text-sm">
              Additional Information
            </label>
            <Textarea
              id="additional_info"
              value={formData.additional_info}
              onChange={handleChange}
              placeholder="Tell us about your experience in paper setting or any other relevant information"
              className="min-h-[100px]"
            />
          </motion.div>

          <motion.div
            className="flex items-start space-x-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <Checkbox
              id="agree"
              checked={formData.agree}
              onCheckedChange={(val) => setFormData({ ...formData, agree: !!val })}
            />
            <label htmlFor="agree" className="text-sm">
              I have read and agreed to{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                disabled={loading || !formData.agree}
                className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{loading ? "Submitting..." : "Submit Application"}</span>
              </Button>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {successMessage && (
              <motion.p
                className="text-green-600 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {successMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}
