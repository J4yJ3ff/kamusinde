"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Create simple components for the page sections
const StudentLeaders = () => {
  const leaders = [
    { name: "James Ochieng", position: "School Captain", image: "/assets/about.jpg" },
    { name: "Faith Wambui", position: "Deputy School Captain", image: "/assets/about.jpg" },
    { name: "David Mwangi", position: "Academic Prefect", image: "/assets/about.jpg" },
    { name: "Sarah Njeri", position: "Sports Captain", image: "/assets/about.jpg" },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Student Leaders</h2>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const Clubs = () => {
  const clubs = [
    { name: "Science Club", desc: "Explore scientific concepts through experiments and projects" },
    { name: "Debate Team", desc: "Develop critical thinking and public speaking skills" },
    { name: "Drama Club", desc: "Express creativity through theatrical performances" },
    { name: "Sports Teams", desc: "Participate in various competitive sports" },
    { name: "Music Club", desc: "Learn instruments and perform in school concerts" },
    { name: "Art Club", desc: "Explore various artistic mediums and techniques" },
  ]

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Clubs & Activities</h2>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-[#295E4F]">{club.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{club.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const StudentAchievements = () => {
  const achievements = [
    {
      title: "National Science Competition Winners",
      description:
        "Our students won first place in the National Science Competition with their innovative project on renewable energy.",
      date: "June 15, 2024",
      image: "/assets/alumni2.jpg",
    },
    {
      title: "Regional Debate Champions",
      description:
        "The debate team secured the regional championship, demonstrating exceptional research and argumentation skills.",
      date: "May 22, 2024",
      image: "/assets/alumni2.jpg",
    },
    {
      title: "Art Exhibition Recognition",
      description:
        "Student artists received special recognition at the national youth art exhibition for their creative expressions.",
      date: "April 8, 2024",
      image: "/assets/alumni2.jpg",
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Student Achievements</h2>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Students() {
  // Use state to store image URLs
  const [images, setImages] = useState({
    students: "/placeholder.svg?height=800&width=1200",
    students1: "/placeholder.svg?height=600&width=800",
  })

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      students: "/assets/students.jpg",
      students1: "/assets/students1.jpg",
    })
  }, [])

  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${images.students})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-10 left-20 text-white text-5xl font-semibold z-10">Students</div>
      </div>

      <div className="flex flex-col md:flex-row items-center py-20 px-8 md:px-20 bg-gray-50">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative h-[400px] w-full md:max-w-[525px] rounded-lg overflow-hidden shadow-lg">
            <Image src={images.students1 || "/placeholder.svg"} alt="Student Life" fill className="object-cover" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-16">
          <h2 className="text-3xl font-bold mb-2 text-primary">STUDENT LIFE</h2>
          <Separator className="mb-6 w-24 bg-primary" />
          <p className="text-muted-foreground leading-relaxed">
            At KBHS High School, student life is vibrant and dynamic, fostering both academic and personal growth.
            Students participate in diverse extracurricular activities, from sports and arts to science clubs and
            community service. The supportive environment encourages collaboration, creativity, and leadership, ensuring
            every student can explore their interests and develop their talents.
          </p>
        </div>
      </div>

      <StudentLeaders />
      <Clubs />
      <StudentAchievements />
    </div>
  )
}
