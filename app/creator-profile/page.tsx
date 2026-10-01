import Image from "next/image";

import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { courses } from "@/data/courses";

// images
import creator from "@/public/Image.png";
import CourseCard from "@/components/ui/courses/CourseCard";

const pillClass =
  "flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-3xl border border-[#CED0D3] px-4 py-3 text-base leading-[1.2] text-[#4B4C53] transition-colors hover:bg-gray-50";

const Page = () => {
  return (
    <section>
      <div className="relative bg-[#0037D9] pb-16 lg:min-h-[592px]">
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

        {/* {/* Profile (/} */}
        <Container>
          <div className="relative z-10 mt-15 flex flex-col items-start gap-10">
            <div className="flex items-center gap-3">
              <Image src={creator} alt="PurePearl Studio profile photo" />

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl md:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6]">
                    PurePearl Studio
                  </h1>
                  <span className="rounded-3xl bg-[#D4FB20] px-6 py-2 text-base font-medium text-[#242528]">
                    Creator
                  </span>
                </div>

                <span className="text-base md:text-[18px] font-normal leading-[1.6] text-[#F5F5F6]">
                  Passionate UI/UX, Web designer
                </span>
              </div>
            </div>

            <p className="text-[18px] font-normal leading-[1.6] text-(--color-primary)">
              Welcome to the creative world of PurePearl Studio. Here,
              you&apos;ll discover the passion, expertise, and inspiration that
              drive my creative journey. Let&apos;s explore and learn together!
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>

            <div className="flex w-full flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex w-fit items-center gap-1 rounded-3xl bg-white px-6 py-3 text-[#242528]">
                  <span className="text-[#003BE2]">3</span>
                  <span>Products</span>
                </div>
                <div className="flex w-fit items-center gap-1 rounded-3xl bg-white px-6 py-3 text-[#242528]">
                  <span className="text-[#003BE2]">12</span>
                  <span>Followers</span>
                </div>
              </div>

              <button
                type="button"
                className="cursor-pointer rounded-3xl bg-[#D4FB20] px-6 py-3 text-[18px] leading-[1.2] text-[#040819]"
              >
                Follow
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* filter section   */}
      <Container className="py-15.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className={pillClass}>
              <Icon name="Funnel" />
              Filter
            </button>
            <button type="button" className={pillClass}>
              <Icon name="signal" />
              Level
            </button>
            <button type="button" className={pillClass}>
              <Icon name="ChartColumnStacked" />
              Category
            </button>
          </div>

          <button type="button" className={pillClass}>
            <Icon name="menu" />
            Most relevant
          </button>
        </div>

        {/* course card  */}
        <div className=" mt-10">
          <CourseCard course={courses} />
        </div>
      </Container>
    </section>
  );
};

export default Page;
