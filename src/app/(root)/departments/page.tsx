"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const departments = [
  { name: "Mathematics" },
  { name: "Languages" },
  { name: "Science" },
  { name: "Art" },
  { name: "Humanities" },
  { name: "Physical Education" },
]

export default function Departments() {
  // Use state to store image URL
  const [departmentImage, setDepartmentImage] = useState("/placeholder.svg?height=800&width=1200")

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image path
    setDepartmentImage("/images/departments.jpg")
  }, [])

  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${departmentImage})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold z-10">Departments</span>
      </div>

      <div className="my-20 max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">Academic Departments</h1>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our school is organized into specialized departments, each dedicated to providing excellence in their
            respective fields of study.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {departments.map((department, index) => (
            <Card
              key={index}
              className="h-[200px] bg-[#295E4F] text-white rounded-lg relative overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex items-center justify-center h-full">
                <h3 className="text-2xl font-semibold text-center">{department.name}</h3>
              </CardContent>
              <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-yellow-300 rounded-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
