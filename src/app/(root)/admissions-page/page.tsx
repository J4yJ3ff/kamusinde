"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function AdmissionsPage() {
  const router = useRouter()

  // Use state to store image URLs
  const [images, setImages] = useState({
    admissions: "/assets/admission.jpg",
      admissions2: "/assets/admission1.jpg",
  })

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      admissions: "/assets/admission.jpg",
      admissions2: "/assets/admission1.jpg",
    })
  }, [])

  const handleRedirect = () => {
    router.push("/contact")
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${images.admissions})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">Admissions page</span>
      </div>

      <div className="my-20 max-w-screen-lg m-auto flex flex-col md:flex-row gap-5 px-4">
        <div className="bg-gray-100 flex-grow">
          <div className="bg-yellow-300 w-[30%] text-center p-1">1</div>
          <p className="w-full md:w-[280px] p-10">
            The first stage in any enquiry is to complete an enquiry form and return it to the Registrar, who would be
            happy to assist with any questions.
          </p>
        </div>

        <div className="bg-gray-100 flex-grow">
          <div className="bg-yellow-300 w-[30%] text-center p-1">2</div>
          <p className="w-full md:w-[280px] p-10">
            We then invite you to visit our school. We offer individual family tours in the mornings during the school
            week. You would usually meet the Headmaster. To officially register for a place please fill the Application
            Form and pay our Registration Fees. We will guide you through any other documents or assessments that may be
            required.
          </p>
        </div>

        <div className="bg-gray-100 flex-grow">
          <div className="bg-yellow-300 w-[30%] text-center p-1">3</div>
          <p className="w-full md:w-[280px] p-10">
            We would then write offering a place to your son or daughter. To confirm the place, you are required to
            accept this place formally and pay the Caution Deposit.
          </p>
        </div>
      </div>

      <div className="h-auto md:h-[60vh] my-20 max-w-screen-lg m-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="flex-1">
          <div className="w-full md:w-[80%] space-y-4">
            <h2 className="text-xl">APPLICATION FEES</h2>
            <p>
              Following your visit to our school, if you are eager to join the KBHS family, you will need to begin the
              application process. Please complete the application form and return it along with the application fee
              (see below). This ensures that your child&apos;s name is added to our prospective list for the selected
              year of entry.
            </p>
            <Button className="bg-[#295E4F] hover:bg-[#1e4a3e] w-full">Download Fee Structure</Button>
          </div>
        </div>

        <div className="flex-1 h-[300px] md:h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src={images.admissions2 || "/placeholder.svg"}
              alt="admissions 2nd banner"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="my-20 max-w-screen-lg m-auto space-y-8 px-4">
        <ul className="bg-gray-100">
          <li className="bg-[#295E4F] text-white flex justify-between">
            <span className="p-4">Fees-Charges per term</span>
            <span className="w-[5%] bg-yellow-300"></span>
          </li>
          <li className="flex justify-between items-center p-4">
            <span>Term One</span>
            <span>Ksh. 55,000.00</span>
          </li>
          <li className="flex justify-between items-center p-4">
            <span>Term Two</span>
            <span>Ksh. 45,000.00</span>
          </li>
          <li className="flex justify-between items-center p-4">
            <span>Term Three</span>
            <span>Ksh. 35,000.00</span>
          </li>
        </ul>

        <Button onClick={handleRedirect} className="bg-[#295E4F] hover:bg-[#1e4a3e] py-2 px-6">
          Contact our Admission team
        </Button>
      </div>
    </div>
  )
}
