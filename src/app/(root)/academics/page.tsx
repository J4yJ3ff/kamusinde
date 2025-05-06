"use client"
import { useState, useEffect } from "react"

export default function Academics() {
  // Use state to store image URLs
  const [images, setImages] = useState({
    banner: "/assets/academics-header.jpg",
    banner2: "/assets/academics2.jpg",
    banner3: "/assets/academics3.jpg",
  })

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      banner: "/assets/academics-header.jpg",
      banner2: "/assets/academics2.jpg",
      banner3: "/assets/academics3.jpg",
    })
  }, [])

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Banner */}
      <section className="relative bg-cover bg-top h-[55vh]" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="absolute bg-black bg-opacity-40 inset-0"></div>
        <div className="flex items-end justify-start h-full pb-8">
          <h2 className="text-4xl font-bold text-white ml-8 md:ml-28 z-10">ACADEMICS</h2>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Curriculum Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold inline-block">CURRICULUM OVERVIEW</h2>
          <p className="mt-4 text-lg text-black">
            At KBHS High School, our curriculum is designed to provide a comprehensive and balanced education that
            prepares students for future academic and professional success. We offer a wide range of subjects that cater
            to diverse interests and career aspirations.
          </p>
        </section>

        {/* Curriculum Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Core Subjects:</h3>
          <ul className="list-disc list-inside text-black mb-8 text-lg">
            <li>Mathematics: From foundational concepts to advanced topics.</li>
            <li>Sciences: Including Biology, Chemistry, and Physics with hands-on lab experiences.</li>
            <li>Languages: English and Kiswahili to enhance communication skills.</li>
            <li>Social Studies: History, Geography, and Civics to foster global awareness and citizenship.</li>
          </ul>

          <h3 className="text-3xl font-bold mb-4">Electives:</h3>
          <ul className="list-disc list-inside text-black mb-8 text-lg">
            <li>Arts: Visual Arts, Music, and Drama to nurture creativity.</li>
            <li>Technology: Computer Science and Information Technology courses to develop digital literacy.</li>
            <li>Physical Education: Promoting health and fitness through various sports and activities.</li>
          </ul>

          <h3 className="text-3xl font-bold mb-4">Advanced Programs:</h3>
          <ul className="list-disc list-inside text-black mb-8 text-lg">
            <li>STEM initiatives: Specialized programs in Science, Technology, Engineering, and Mathematics.</li>
            <li>Humanities and Social Sciences: Advanced courses in literature, history, and social sciences.</li>
          </ul>

          <h3 className="text-3xl font-bold mb-4">Extracurricular Activities:</h3>
          <ul className="list-disc list-inside text-black text-lg">
            <li>Clubs and Societies: Science Club, Debate Team, Art Club, and more.</li>
            <li>Sports: Football, Basketball, Athletics, and other team sports.</li>
            <li>Community Service: Opportunities to engage in volunteer work and social responsibility projects.</li>
          </ul>
        </section>
      </main>

      {/* Image for Subjects Offered */}
      <section
        className="relative w-full bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${images.banner2})` }}
      >
        <div className="absolute bg-black bg-opacity-40 inset-0"></div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Subjects Offered */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Subjects Offered</h2>
          <h3 className="text-2xl font-bold mb-4">Core Subjects:</h3>
          <ul className="list-disc list-inside text-black mb-8 text-lg">
            <li>Mathematics</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
            <li>English</li>
            <li>Kiswahili</li>
            <li>Geography</li>
            <li>History</li>
            <li>Religious Studies</li>
            <li>Business Studies</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Electives:</h3>
          <ul className="list-disc list-inside text-black mb-8 text-lg">
            <li>Computer Science</li>
            <li>Music</li>
            <li>Visual Arts</li>
            <li>French</li>
            <li>Drama</li>
            <li>Home Science</li>
            <li>Physical Education</li>
            <li>Agriculture</li>
          </ul>

          <h3 className="text-3xl font-bold mb-4">Advanced Programs:</h3>
          <ul className="list-disc list-inside text-black text-lg">
            <li>Advanced Mathematics</li>
            <li>Advanced Biology, Chemistry, and Physics</li>
            <li>Philosophy and Ethics</li>
            <li>Advanced Computer Science</li>
            <li>Research-based Projects</li>
          </ul>
        </section>
      </main>

      <section
        className="relative w-full bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${images.banner3})` }}
      >
        <div className="absolute bg-black bg-opacity-40 inset-0"></div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Term Dates */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Term 1 */}
          <div className="bg-[#295E4F] p-8 rounded-lg shadow-md text-white flex flex-col items-center justify-center text-center relative h-80 mx-auto w-full max-w-md">
            <h4 className="font-semibold text-2xl mb-4">Term 1</h4>
            <p className="text-lg">
              <strong className="font-bold">Start Date:</strong> January 8
            </p>
            <p className="text-lg">
              <strong className="font-bold">Mid-Term Break:</strong> February 19 - February 23
            </p>
            <p className="text-lg">
              <strong className="font-bold">End Date:</strong> April 5
            </p>
            <div className="absolute bottom-0 w-full h-10 bg-yellow-100"></div>
            <div className="absolute bottom-0 w-full h-4 bg-[#295E4F]"></div>
          </div>

          {/* Term 2 */}
          <div className="bg-[#295E4F] p-8 rounded-lg shadow-md text-white flex flex-col items-center justify-center text-center relative h-80 mx-auto w-full max-w-md">
            <h4 className="font-semibold text-2xl mb-4">Term 2</h4>
            <p className="text-lg">
              <strong className="font-bold">Start Date:</strong> May 2
            </p>
            <p className="text-lg">
              <strong className="font-bold">Mid-Term Break:</strong> June 19 - June 23
            </p>
            <p className="text-lg">
              <strong className="font-bold">End Date:</strong> August 4
            </p>
            <div className="absolute bottom-0 w-full h-10 bg-yellow-100"></div>
            <div className="absolute bottom-0 w-full h-4 bg-[#295E4F]"></div>
          </div>

          {/* Term 3 */}
          <div className="bg-[#295E4F] p-8 rounded-lg shadow-md text-white flex flex-col items-center justify-center text-center relative h-80 mx-auto w-full max-w-md">
            <h4 className="font-semibold text-2xl mb-4">Term 3</h4>
            <p className="text-lg">
              <strong className="font-bold">Start Date:</strong> September 5
            </p>
            <p className="text-lg">
              <strong className="font-bold">Mid-Term Break:</strong> October 19 - October 23
            </p>
            <p className="text-lg">
              <strong className="font-bold">End Date:</strong> December 11
            </p>
            <div className="absolute bottom-0 w-full h-10 bg-yellow-100"></div>
            <div className="absolute bottom-0 w-full h-4 bg-[#295E4F]"></div>
          </div>
        </section>
      </main>
    </div>
  )
}
