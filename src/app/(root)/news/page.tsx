"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  content: string;
  date: string;
  img: string;
}

const NewsCard = ({ title, content, date, img }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow">
      <div className="h-[200px] relative">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-top"
        />
      </div>
      <CardContent className="p-0 bg-gray-50 h-[calc(100%-200px)]">
        <h3 className="text-[#295E4F] p-4 pt-2 font-semibold">{title}</h3>
        <p className="p-4 pt-0 text-muted-foreground">{content}</p>
        <div className="flex gap-1 items-center p-4 pt-0 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function News() {
  // Use state to store image URLs
  const [images, setImages] = useState({
    about: "/placeholder.svg?height=800&width=1200",
    art: "/placeholder.svg?height=400&width=600",
  });

  // In a real implementation, you would use actual image imports
  useEffect(() => {
    // In production, replace with actual image paths
    setImages({
      about: "/assets/aboutimage.jpg",
      art: "/assets/art.jpg",
    });
  }, []);

  const latestNews = [
    {
      id: 1,
      img: images.art,
      title: "KBHS Students Excel in Science Fair",
      content:
        "Our students excelled at the State Science Fair, winning top honors for their innovative projects. Their success highlights KBHS's strong focus on STEM education and critical thinking.",
      date: "2 days ago",
    },
    {
      id: 2,
      img: images.art,
      title: "New Library Resources Available",
      content:
        "We've expanded our library with new digital resources and books to support student research and reading. These additions enhance our commitment to literacy and academic excellence.",
      date: "1 week ago",
    },
    {
      id: 3,
      img: images.art,
      title: "Teacher Recognition Award",
      content:
        "Congratulations to Ms. Wanjiku for receiving the Excellence in Teaching Award. Her dedication to innovative teaching methods has inspired countless students.",
      date: "2 weeks ago",
    },
  ];

  const eventNews = [
    {
      id: 1,
      img: "/assets/news1.avif",
      title: "Track Star Shines",
      content:
        "Our track athlete broke the school record, winning gold in the 100m sprint with an impressive time.",
      date: "2 days ago",
    },
    {
      id: 2,
      img: "/assets/news1.avif",
      title: "Annual Sports Day",
      content:
        "Join us for our annual sports day celebration featuring competitions, demonstrations, and community activities.",
      date: "1 week ago",
    },
    {
      id: 3,
      img: "/assets/news1.avif",
      title: "Basketball Team Advances",
      content:
        "Our basketball team has advanced to the regional finals after an impressive season of teamwork and determination.",
      date: "3 weeks ago",
    },
  ];

  const studentNews = [
    {
      id: 1,
      img: "/assets/students1.jpg",
      title: "Debate Team Success",
      content:
        "The KBHS debate team won first place in a regional competition, showcasing outstanding argumentation and teamwork.",
      date: "2 days ago",
    },
    {
      id: 2,
      img: "/assets/students2.jpg",
      title: "Student Leadership Conference",
      content:
        "Our student leaders participated in a national leadership conference, bringing back valuable insights for our school community.",
      date: "1 week ago",
    },
    {
      id: 3,
      img: "/assets/student3.jpg",
      title: "Art Exhibition Success",
      content:
        "Student artists showcased their talents at the annual art exhibition, impressing visitors with their creativity and technical skills.",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${images.about})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <span className="absolute bottom-10 left-5 sm:left-10 md:left-20 text-white text-3xl font-semibold z-10">
          News & Events
        </span>
      </div>

      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20">
        <div
          style={{ backgroundImage: `url(${images.about})` }}
          className="bg-cover bg-center h-[30vh] md:h-[40vh] lg:h-[60vh] relative my-12"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-2 md:bottom-5 lg:bottom-10 left-5 sm:left-8 md:left-10 lg:left-20 text-white z-10">
            <span className="text-xl md:text-3xl font-semibold block">
              KBHS TEAM MAKES IT TO THE FINALS
            </span>
            <span className="block text-sm sm:text-base">
              KBHS students showcase an outstanding performance
            </span>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              Latest <span className="text-[#295E4F]">News</span>
            </h2>
            <Separator className="mt-2 mx-auto w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {latestNews.map((card) => (
              <NewsCard
                key={card.id}
                img={card.img}
                title={card.title}
                content={card.content}
                date={card.date}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              Event <span className="text-[#295E4F]">News</span>
            </h2>
            <Separator className="mt-2 mx-auto w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {eventNews.map((card) => (
              <NewsCard
                key={card.id}
                img={card.img}
                title={card.title}
                content={card.content}
                date={card.date}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              Students <span className="text-[#295E4F]">News</span>
            </h2>
            <Separator className="mt-2 mx-auto w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {studentNews.map((card) => (
              <NewsCard
                key={card.id}
                img={card.img}
                title={card.title}
                content={card.content}
                date={card.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
