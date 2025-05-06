"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Upload, X, ChevronDown, FileText } from "lucide-react"

const assignmentsList = [
  {
    id: 1,
    name: "Biology Assignment",
    date: "October 15, 2024",
    form: "Form 4",
  },
  {
    id: 2,
    name: "Chemistry Assignment",
    date: "October 10, 2024",
    form: "Form 3",
  },
  {
    id: 3,
    name: "Kiswahili Assignment",
    date: "September 12, 2024",
    form: "Form 2",
  },
  {
    id: 4,
    name: "English Assignment",
    date: "September 15, 2024",
    form: "Form 1",
  },
]

export default function Assignments() {
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle file selection and preview
  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      if (selectedFile.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(selectedFile))
      } else {
        setFilePreview(null)
      }
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      setMessage("No file selected!")
      setMessageType("error")
      toast.error("No file selected!")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      // In a real implementation, you would send this data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setMessage("File uploaded successfully!")
      setMessageType("success")
      toast.success("File uploaded successfully!")

      // Reset form
      setFile(null)
      setFilePreview(null)
    } catch (error) {
      setMessage("Error uploading file.")
      setMessageType("error")
      toast.error("Error uploading file.")
      console.error("Error uploading file:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Assignment Submission</h1>
          <Separator className="mt-2 mx-auto w-32 bg-primary" />
        </div>

        <Card className="mb-10 shadow-md">
          <CardHeader>
            <CardTitle>Upload Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between items-center min-h-[200px]">
              <input
                className="hidden"
                type="file"
                id="file"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />

              <label htmlFor="file" className="flex items-center gap-4 cursor-pointer mb-6">
                <Upload className="h-10 w-10 text-[#295E4F]" />
                <span className="text-lg">Select a file to upload</span>
              </label>

              {file && (
                <div className="my-4 relative">
                  {filePreview ? (
                    <div className="relative h-[100px] w-[100px] rounded-md overflow-hidden border">
                      <img
                        src={filePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FileText className="h-10 w-10 text-gray-500" />
                      <p className="text-sm mt-2">{file.name}</p>
                    </div>
                  )}
                  <button
                    className="absolute -top-2 -right-6 cursor-pointer"
                    onClick={() => {
                      setFile(null)
                      if (filePreview) {
                        URL.revokeObjectURL(filePreview)
                        setFilePreview(null)
                      }
                    }}
                    aria-label="Remove file"
                  >
                    <X className="h-6 w-6 text-red-500" />
                  </button>
                </div>
              )}

              {message && (
                <div className={`mb-4 text-center ${messageType === "success" ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("file")?.click()}
                  className="border-[#295E4F] text-[#295E4F]"
                >
                  Select File
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-[#295E4F] hover:bg-[#1e4a3e]"
                  disabled={!file || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary">Previously uploaded assignments</h2>
            <div className="flex gap-2 items-center cursor-pointer">
              <span>All</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          <div className="space-y-4">
            {assignmentsList.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex justify-between items-center p-6">
                  <div>
                    <h3 className="font-medium">{assignment.name}</h3>
                    <p className="text-sm text-muted-foreground">{assignment.form}</p>
                  </div>
                  <p className="text-muted-foreground">{assignment.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
