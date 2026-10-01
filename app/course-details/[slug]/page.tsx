import Image from "next/image";

import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

import { courses } from "@/data/courses";

import frame from "@/public/Frame.png";
import EnrollCard from "@/components/course-details/EnrollCard";
import CourseTabs from "@/components/course-details/CourseTabs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const singleCourse = courses.find((course) => course.slug === slug);

  return (
    <div>
      {/* Hero / Course Header */}
      <section className="relative md:h-[957px] bg-[#0037D9]">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
            bg-[size:64px_64px]
            md:bg-[size:96px_96px]
            lg:bg-[size:120px_120px]
          "
        />

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        <Container>
          <div className="relative md:z-10 mt-12">
            {/* Course title */}
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-1%] text-white">
                    {singleCourse?.title}
                  </h2>

                  <p className="text-[20px] font-semibold leading-[1.2] tracking-[-1%] text-white">
                    Unlock the Power of Digital Creation with Expert Guidance
                  </p>
                </div>

                <p className="text-white">
                  by
                  <span className="font-medium text-[#D4FB20]">
                    purepearl studio
                  </span>
                </p>

                {/* Course meta */}
                <div className="flex flex-wrap items-center justify-start gap-4">
                  <div className="flex w-fit items-center justify-center gap-2 rounded-3xl bg-white px-6 py-2 text-[#242528]">
                    <Icon name="signal" />
                    Intermediate
                  </div>

                  <div className="flex w-fit items-center justify-center gap-2 rounded-3xl bg-white px-6 py-2 text-[#242528]">
                    <Icon name="Star" />
                    4.8 (172 reviews)
                  </div>

                  <div className="flex w-fit items-center justify-center gap-2 rounded-3xl bg-white px-6 py-2 text-[#242528]">
                    <Icon name="UsersRound" />
                    199 Students
                  </div>
                </div>
              </div>

              {/* Share */}
              <Button className="flex cursor-pointer items-center justify-center gap-2 text-sm">
                <Icon name="Share2" size={20} />
                Share
              </Button>
            </div>

            {/* Course video + enroll card */}
            <div className="mt-14.75 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 h-auto">
              {/* Course video */}
              <div>
                <Image
                  src={frame}
                  alt="Course preview"
                  className="block w-full"
                />
              </div>

              {/* Course details */}
              <div>
                <EnrollCard />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom course content */}
      <section className="bg-white py-20 z-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2">
            {/* Left side */}
            <CourseTabs />

            {/* Right side */}
            <div className="col-span-full"></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
