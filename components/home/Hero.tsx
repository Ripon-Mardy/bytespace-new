import Image from "next/image";

import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";

// icons
import { Search } from "lucide-react";

// images
import user from "@/public/Hero Page/user.png";
import shape from "@/public/Hero Page/Ellipse.png";
import HappyStudents from "../ui/HappyStudents";

// students
import student1 from "@/public/user/user1.png";
import student2 from "@/public/user/user2.png";
import student3 from "@/public/user/user3.png";
import student4 from "@/public/user/user4.png";
import student5 from "@/public/user/user5.png";
import student6 from "@/public/user/user6.png";
import student7 from "@/public/user/user7.png";
import UiuxDesign from "../ui/UiuxDesign";
import LearningProgress from "../ui/LearningProgress";

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
    <main className="bg-[#003be2]">
      <section
        className="relative overflow-hidden bg-[#0037d9]"
        style={{
          background: "url('/Hero Page/bg-image.png') center no-repeat",
        }}
      >
        {/* Background Grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_2px)]
            bg-[size:120px_120px]
          "
        />

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="flex items-center justify-center">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Get Access to Hundreds Courses Available
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>

              {/* search input  */}
              <div className="max-w-2xl mx-auto flex items-center gap-5 mt-10">
                <div className="flex items-center w-full gap-4 bg-white border border-gray-300 rounded-2xl py-3 px-4">
                  <Search className="text-[#82868E]" />
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Course, topic, creator"
                  />
                </div>
                <Button> Search</Button>
              </div>
            </div>
          </div>

          {/* image  */}
          <div className="relative mt-20">
            <div className="flex items-center justify-center">
              <Image src={user} alt="user" className="z-10" />
              <div className="absolute left-0 top-10">
                <Image src={shape} alt="shape" />
              </div>
            </div>

            {/* Happy student  */}
            <div className="absolute left-0 top-52 mt-4">
              <HappyStudents avatars={avatars} />
            </div>

            {/* ui ux design component  */}
            <div className="absolute left-40 top-0 mt-4">
              <UiuxDesign />
            </div>

            {/* learning progress section  */}
            <div className="absolute right-60 top-10">
              <LearningProgress value={60} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
