"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Create a simple AlumniEvents component
const AlumniEvents = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Alumni Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=300&width=500" alt="Event" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Annual Alumni Reunion</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual alumni gathering to reconnect with classmates and teachers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Dec 15, 2024</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Create a simple Cards component
const Cards = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notable Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/images/alumni1.jpg" alt="Alumni" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. James Mwangi</h3>
                <p className="text-gray-600 mb-2">Class of 2005</p>
                <p className="text-gray-700">
                  Leading researcher in renewable energy technologies and recipient of the National Science Award.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AlumniPage() {
  // Use state to store image URLs
  const [images, setImages] = useState({
    alumni: "/placeholder.svg?height=800&width=1200",
    alumni3: "/placeholder.svg?height=600&width=800",
    alumni4: "/placeholder.svg?height=600&width=1200",
  })

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      alumni: "/assets/alumni1.jpg",
      alumni3: "/assets/alumni3.jpg",
      alumni4: "/assets/alumni4.jpg",
    })
  }, [])

  return (
    <div className="min-h-screen">
      <header className="relative h-[92vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${images.alumni})` }}
        >
          <div className="absolute bottom-10 left-20 text-white text-5xl font-semibold">Alumni</div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-center py-20 px-8 md:px-20 bg-gray-50">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative h-[400px] w-full md:max-w-[525px]">
            <Image
              src={images.alumni3 || "/placeholder.svg"}
              alt="Success Story"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-16">
          <h2 className="text-3xl font-bold mb-6">A Success Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi there! I'm Emily, a proud alumna of KBHS and now a dedicated nurse. The education and support I received
            at KBHS were instrumental in my journey. The challenging coursework and encouraging teachers helped me
            discover my passion for healthcare. With hard work and determination, I pursued a nursing degree and now get
            to make a difference in people's lives every day. To all current students, I want to say: believe in
            yourself and never give up. KBHS provides a strong foundation for your future success. With perseverance,
            you can achieve your dreams, just as I did.
          </p>
        </div>
      </div>

      <AlumniEvents />

      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${images.alumni4})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center">
          <p className="text-white text-5xl font-bold mb-8">Alumni Association</p>
          <Button className="bg-[#295E4F] hover:bg-[#1e4a3e] text-white px-8 py-6 rounded-full text-lg">
            Join now
          </Button>
        </div>
      </section>

      <Cards />
    </div>
  )
}
