"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Form validation schema
const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  form: z.string().min(1, "Form is required"),
  admission_number: z.string().min(1, "Admission number is required"),
  hostel: z.string().min(1, "Hostel is required"),
})

type FormData = z.infer<typeof formSchema>

export default function Admissions() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    form: "",
    admission_number: "",
    hostel: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      formSchema.parse(formData)

      // In a real implementation, you would send this data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Admission successfully submitted!")

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        form: "",
        admission_number: "",
        hostel: "",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        error.errors.forEach((err) => {
          toast.error(err.message)
        })
      } else {
        toast.error("There was an error submitting the form. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <main className="flex flex-col items-center flex-1 w-full max-w-4xl px-4">
        <Card className="w-full max-w-lg mt-10 mb-10">
          <CardHeader>
            <CardTitle className="text-xl">Admission Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form">Form</Label>
                <Input
                  id="form"
                  name="form"
                  type="text"
                  value={formData.form}
                  onChange={handleChange}
                  placeholder="Form"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admission_number">Admission Number</Label>
                <Input
                  id="admission_number"
                  name="admission_number"
                  type="text"
                  value={formData.admission_number}
                  onChange={handleChange}
                  placeholder="Admission Number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hostel">Hostel</Label>
                <Input
                  id="hostel"
                  name="hostel"
                  type="text"
                  value={formData.hostel}
                  onChange={handleChange}
                  placeholder="Hostel"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <Button type="submit" className="bg-[#295E4F] hover:bg-[#1e4a3e]" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
