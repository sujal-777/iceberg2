import { Clock, DollarSign, Upload, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function JobApplication() {
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

      <form className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm">
              First Name
            </label>
            <Input id="firstName" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm">
              Last Name
            </label>
            <Input id="lastName" className="w-full" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email Address
          </label>
          <Input id="email" type="email" className="w-full" />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm">
            Phone Number
          </label>
          <Input id="phone" type="tel" className="w-full" />
        </div>

        <div className="space-y-2">
          <label htmlFor="position" className="block text-sm">
            Position Applying For
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">Software Developer</SelectItem>
              <SelectItem value="designer">UI/UX Designer</SelectItem>
              <SelectItem value="manager">Project Manager</SelectItem>
              <SelectItem value="qa">QA Engineer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="experience" className="block text-sm">
            Years of Experience
          </label>
          <Input id="experience" type="number" className="w-full" />
        </div>

        <div className="space-y-2">
          <label htmlFor="expertise" className="block text-sm">
            Subject Expertise
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontend">Frontend Development</SelectItem>
              <SelectItem value="backend">Backend Development</SelectItem>
              <SelectItem value="fullstack">Full Stack Development</SelectItem>
              <SelectItem value="mobile">Mobile Development</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
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
            <Button variant="outline" size="sm" className="mx-auto">
              Upload Resume
              <Upload className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="additional" className="block text-sm">
            Additional Information
          </label>
          <Textarea
            id="additional"
            placeholder="Tell us about your experience in paper setting or any other relevant information"
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            I have read and agreed to{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Submit Application
          </Button>
        </div>
      </form>
      </div>

    </div>
  )
}
