import Image from "next/image";
import { Search } from "lucide-react";

import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import HappyStudents from "../ui/HappyStudents";
import UiuxDesign from "../ui/UiuxDesign";
import LearningProgress from "../ui/LearningProgress";

// images
import user from "@/public/Hero Page/user.png";
import shape from "@/public/Hero Page/Ellipse.png";

// students
import student1 from "@/public/user/user1.png";
import student2 from "@/public/user/user2.png";
import student3 from "@/public/user/user3.png";
import student4 from "@/public/user/user4.png";
import student5 from "@/public/user/user5.png";
import student6 from "@/public/user/user6.png";
import student7 from "@/public/user/user7.png";

const avatars = [
  { src: student1, alt: "Student 1" },
  { src: student2, alt: "Student 2" },
  { src: student3, alt: "Student 3" },
  { src: student4, alt: "Student 4" },
  { src: student5, alt: "Student 5" },
  { src: student6, alt: "Student 6" },
  { src: student7, alt: "Student 7" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0037d9",
        backgroundImage: "url('/Hero Page/bg-image.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Background grid: smaller cells on mobile, bigger on desktop */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_2px)]
          bg-[size:64px_64px] md:bg-[size:96px_96px] lg:bg-[size:120px_120px]
        "
      />

      {/* Header (z-20 so a mobile menu can open over the content) */}
      <div className="relative z-20">
        <Header />
      </div>

      <Container className="relative z-10">
        {/* Text content */}
        <div className="mx-auto mt-8 max-w-4xl text-center md:mt-12">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E5E6E8] sm:mt-8 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search: stacked on mobile, one row from sm */}
          <form
            action="/courses"
            role="search"
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <label className="flex w-full flex-1 items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-3 sm:gap-4 sm:px-6">
              <Search className="size-5 shrink-0 text-[#82868E]" />
              <input
                type="search"
                name="q"
                aria-label="Search courses"
                placeholder="Course, topic, creator"
                className="w-full min-w-0 bg-transparent outline-none"
              />
            </label>

            <Button className="w-full cursor-pointer sm:w-auto">Search</Button>
          </form>
        </div>

        {/* Visual area */}
        <div className="relative mt-10 flex flex-col lg:mt-0">
          {/* Floating cards: normal flow on mobile/tablet, absolute on desktop */}
          <div className="order-1 flex flex-wrap items-stretch justify-center gap-4 pb-8 lg:pb-0">
            <div className="lg:absolute lg:left-8 lg:top-72 lg:z-50 xl:left-30 xl:top-80">
              <HappyStudents avatars={avatars} />
            </div>

            <div className="lg:absolute lg:left-32 lg:top-24 lg:z-50 xl:left-55 xl:top-30">
              <UiuxDesign />
            </div>

            <div className="lg:absolute lg:right-16 lg:top-36 lg:z-50 xl:right-60 xl:top-40">
              <LearningProgress value={60} />
            </div>
          </div>

          {/* Person image + ellipse */}
          <div className="relative order-2 flex justify-center">
            <Image
              src={user}
              alt="Smiling student holding books"
              priority
              className="relative z-10 h-auto w-[85%] max-w-md sm:max-w-lg md:max-w-xl lg:w-auto lg:max-w-full"
            />

            <div className="absolute left-0 top-10 md:top-24 hidden md:block">
              <Image
                src={shape}
                alt="shape"
                aria-hidden="true"
                className="h-auto w-40 md:w-64 lg:w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
