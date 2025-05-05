import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from industry professionals with decades of experience in accounting and finance.",
    icon: "/icon-1.png",
  },
  {
    title: "Practice Tests",
    description: "Comprehensive test series with detailed solutions and performance analytics.",
    icon: "/icon-2.png",
  },
  {
    title: "Live Counseling",
    description: "One-on-one guidance from mentors to help you navigate your exam preparation.",
    icon: "/icon-3.png",
  },
  {
    title: "Study Materials",
    description: "Comprehensive notes, case studies and reference materials for in-depth learning.",
    icon: "/icon-4.png",
  },
]

export function Feature() {
    return (
      <div className="mx-auto my-16 px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border rounded-lg overflow-hidden relative">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    width={30}
                    height={30}
                    className="h-10 w-10"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                <p className="text-sm text-center">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  