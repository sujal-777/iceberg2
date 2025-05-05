import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "The concept videos helped me understand complex accounting standard with ease. The practice tests were invaluable for my CA Final preparation.",
    name: "Ananya Desai",
    title: "CA Final, Cleared with AIR 15",
  },
  {
    quote:
      "The personalized counseling sessions helped me identify my weak areas and create a focused study plan. I couldn't have cleared CMA without this platform.",
    name: "Rahul Kapoor",
    title: "CMA, First Attempt",
  },
]

export function Preparation() {
    return (
      <div className="max-w-7xl w-full mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Exam Preparation Today</h2>
            <p className="mb-8">
              Get access to our comprehensive library of concept videos, practice tests, and personalized counseling
              sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Join Now</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6">
                Try Free for 7 Days
              </Button>
            </div>
          </div>
  
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">What Our Students Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="italic mb-2">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  