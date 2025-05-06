'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Clock, DollarSign, Upload, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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

  const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")

    try {
      let resume_url = ""

      if (resumeFile) {
        const fileExt = resumeFile.name.split(".").pop()
        const fileName = `${formData.first_name}_${formData.last_name}_${Date.now()}.${fileExt}`
        const { data, error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(fileName, resumeFile)

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase
          .storage
          .from("resumes")
          .getPublicUrl(fileName)

        resume_url = publicUrlData.publicUrl
      }

      const { error } = await supabase.from("job_application").insert([
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: parseInt(formData.experience),
          expertise: formData.expertise,
          additional_info: formData.additional_info,
          resume_url,
        }
      ])

      if (error) throw error

      setSuccessMessage("Application submitted successfully!")
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
      alert("Something went wrong while submitting. Please try again.")
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Why Join Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-7xl">
        <div className="border rounded-lg p-6">
          <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mb-4">
            <DollarSign className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium mb-2">Competitive Compensation</h3>
          <p className="text-sm text-gray-600">
            Attractive remuneration package with performance - based incentive and timely payments.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mb-4">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium mb-2">Flexible Work Hours</h3>
          <p className="text-sm text-gray-600">
            Work from anywhere with flexible scheduling that fits your professional commitments.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mb-4">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium mb-2">Professional Network</h3>
          <p className="text-sm text-gray-600">
            Connect with fellow experts and expand your professional network in the QA community.
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-8">Apply Now</h2>
      <div className="w-full flex justify-center">
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first_name" className="block text-sm">First Name</label>
              <Input id="first_name" value={formData.first_name} onChange={handleChange} className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last_name" className="block text-sm">Last Name</label>
              <Input id="last_name" value={formData.last_name} onChange={handleChange} className="w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">Email Address</label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm">Phone Number</label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="position" className="block text-sm">Position Applying For</label>
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
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="block text-sm">Years of Experience</label>
            <Input id="experience" type="number" value={formData.experience} onChange={handleChange} className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="expertise" className="block text-sm">Subject Expertise</label>
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
          </div>

          <div className="space-y-2">
            <label className="block text-sm">Resume/CV</label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Upload className="h-10 w-10 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 mb-4">Drag and drop your resume here, or click to select file</p>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="additional_info" className="block text-sm">Additional Information</label>
            <Textarea
              id="additional_info"
              value={formData.additional_info}
              onChange={handleChange}
              placeholder="Tell us about your experience in paper setting or any other relevant information"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="agree" checked={formData.agree} onCheckedChange={(val) => setFormData({ ...formData, agree: !!val })} />
            <label htmlFor="agree" className="text-sm">
              I have read and agreed to{" "}
              <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>{" "} and{" "}
              <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </label>
          </div>

          <div className="flex justify-center">
            <Button type="submit" disabled={loading || !formData.agree} className="bg-blue-600 hover:bg-blue-700">
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </div>

          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        </form>
      </div>
    </div>
  )
}
