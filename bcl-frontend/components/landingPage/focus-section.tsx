import { Card, CardContent } from "@/components/ui/card"
import { aboutUs } from "@/lib/data.json"
import Image from "next/image"

export default function FocusSection() {
  const focusAreas = aboutUs.focusAreas || []

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12">
          What We Focus On
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-lg rounded-2xl bg-white hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col p-0">
              <div className="relative w-full h-32 sm:h-48 rounded-t-2xl overflow-hidden">
                <Image 
                  src={area.image || "/placeholder.jpg"} 
                  alt={area.title} 
                  fill 
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <CardContent className="p-4 sm:p-6 pt-5 sm:pt-6 flex flex-col items-center flex-1">
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 whitespace-pre-line text-center">{area.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
