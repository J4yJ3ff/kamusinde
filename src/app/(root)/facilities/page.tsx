"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const facilities = [
  {
    id: 1,
    title: "Classrooms",
    description:
      "Modern, well-equipped classrooms designed to create an optimal learning environment for our students.",
    image1: "/assets/classroom.jpg",
    image2: "/assets/office.jpg",
    image3: "/assets/board-room.jpg",
  },
  {
    id: 2,
    title: "Laboratories",
    description:
      "State-of-the-art science laboratories for biology, chemistry, and physics, providing hands-on learning experiences.",
    image1: "/assets/lab-1.jpg",
    image2: "/assets/lab-2.jpg",
    image3: "/assets/lab-3.webp",
  },
  {
    id: 3,
    title: "Dining",
    description: "Spacious dining facilities serving nutritious meals in a comfortable and social atmosphere.",
    image1:
      "/assets/dining-1.webp",
    image2:
      "/assets/dining-2.webp",
    image3:
      "/assets/dining-3.webp",
  },
  {
    id: 4,
    title: "Sports",
    description:
      "Comprehensive sports facilities including fields, courts, and a swimming pool to support physical education and competitive sports.",
    image1: "/assets/sports-1.jpg",
    image2: "/assets/sports-2.jpg",
    image3: "/assets/sports-3.webp",
  },
]

export default function Facilities() {
  // Use state to store image URL
  const [facilitiesImage, setFacilitiesImage] = useState("/placeholder.svg?height=800&width=1200")

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image path
    setFacilitiesImage("/assets/facilities.jpg")
  }, [])

  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${facilitiesImage})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold z-10">Facilities</span>
      </div>

      <div className="my-20 max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">Our Facilities</h1>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            KBHS High School provides world-class facilities to support academic excellence, extracurricular activities,
            and student well-being.
          </p>
        </div>

        <div className="space-y-20">
          {facilities.map((facility) => (
            <Card key={facility.id} className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">{facility.title}</CardTitle>
                <Separator className="mt-2 w-24 bg-primary" />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{facility.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-[360px] w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={facility.image1 || "/placeholder.svg"}
                      alt={`${facility.title} image 1`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-[360px] w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={facility.image2 || "/placeholder.svg"}
                      alt={`${facility.title} image 2`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-[360px] w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={facility.image3 || "/placeholder.svg"}
                      alt={`${facility.title} image 3`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
