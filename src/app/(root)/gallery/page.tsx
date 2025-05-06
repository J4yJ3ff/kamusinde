"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function Gallery() {
  // Use state to store image URLs
  const [images, setImages] = useState({
    banner: "/placeholder.svg?height=800&width=1200",
    image1: "/placeholder.svg?height=400&width=400",
    image2: "/placeholder.svg?height=400&width=400",
    image3: "/placeholder.svg?height=400&width=400",
    image4: "/placeholder.svg?height=400&width=400",
    image5: "/placeholder.svg?height=400&width=400",
    image6: "/placeholder.svg?height=400&width=400",
    image7: "/placeholder.svg?height=400&width=400",
    image8: "/placeholder.svg?height=400&width=400",
    image9: "/placeholder.svg?height=400&width=400",
    image10: "/placeholder.svg?height=400&width=400",
    image11: "/placeholder.svg?height=400&width=400",
    image12: "/placeholder.svg?height=400&width=400",
    image13: "/placeholder.svg?height=400&width=400",
    image14: "/placeholder.svg?height=400&width=400",
    image15: "/placeholder.svg?height=400&width=400",
  })

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      banner: "/assets/IMG_031.jpg",
      image1: "/assets/IMG_001.jpg",
      image2: "/assets/IMG_002.jpg",
      image3: "/assets/IMG_003.jpg",
      image4: "/assets/IMG_029.jpg",
      image5: "/assets/IMG_005.jpg",
      image6: "/assets/IMG_006.jpg",
      image7: "/assets/IMG_007.jpg",
      image8: "/assets/IMG_008.jpg",
      image9: "/assets/IMG_021.jpg",
      image10: "/assets/IMG_018.jpg",
      image11: "/assets/IMG_012.jpg",
      image12: "/assets/IMG_013.jpg",
      image13: "/assets/IMG_014.jpg",
      image14: "/assets/IMG_034.jpg",
      image15: "/assets/IMG_025.jpg",
    })
  }, [])

  return (
    <div className="min-h-screen">
      <div
        style={{
          backgroundImage: `url(${images.banner})`,
        }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold z-10">Gallery</span>
      </div>

      <div className="my-20 max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">School Memories</h1>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of photos showcasing school life, events, and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First section - large image */}
          <div className="relative h-80 md:h-96 col-span-1 md:col-span-2 lg:col-span-1 rounded-lg overflow-hidden shadow-md">
            <Image
              src={images.image1 || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Second section - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image2 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image3 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image4 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image5 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Third section - large image */}
          <div className="relative h-80 md:h-96 col-span-1 rounded-lg overflow-hidden shadow-md">
            <Image
              src={images.image6 || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Fourth section - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image7 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image8 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image9 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-44 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image10 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Fifth section - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-3">
            <div className="relative h-40 md:h-52 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image11 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-52 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image12 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-52 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image13 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-52 rounded-lg overflow-hidden shadow-md">
              <Image
                src={images.image14 || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
