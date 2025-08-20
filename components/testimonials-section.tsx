import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      role: "Computer Science, 400L",
      avatar: "/male-student-portrait.png",
      content:
        "Joining the blockchain club was the best decision I made at LAUTECH. The workshops helped me land an internship at a fintech startup, and I've built amazing connections with fellow tech enthusiasts.",
      rating: 5,
    },
    {
      name: "Fatima Abdullahi",
      role: "Information Technology, 300L",
      avatar: "/diverse-female-student.png",
      content:
        "The club's hands-on approach to learning blockchain technology is incredible. I went from knowing nothing about crypto to building my own DApp in just three months. The community support is unmatched!",
      rating: 5,
    },
    {
      name: "Chinedu Okwu",
      role: "Software Engineering, 500L",
      avatar: "/male-student-portrait.png",
      content:
        "As a final year student, the blockchain club helped me understand emerging technologies that aren't covered in our regular curriculum. The guest speakers from industry are always inspiring and insightful.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our community of blockchain enthusiasts about their transformative experiences and achievements
            through the club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
