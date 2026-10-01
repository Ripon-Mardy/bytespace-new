import Image from "next/image";

import Container from "../ui/Container";
import Icon from "../ui/Icon";

// images
import frame1 from "@/public/Frame11.png";
import frame2 from "@/public/Frame12.png";

const coursesManage = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const CourseFeatures = () => {
  return (
    <section className="py-10">
      <Container>
        {/* 1  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:items-center md:justify-items-center relative">
          <div className=" flex flex-col gap-10">
            <div className="relative">
              <h2 className="text-2xl md:text-[36px] w-full font-semibold text-(--heading-color) tracking-[-1%]">
                Your Path to Professional Growth Starts Here!
              </h2>

              {/* shadow  */}
              <div className="glow-lime pointer-events-none  h-[420px] w-[620px] md:h-[600px] md:w-[900px] backdrop-blur-lg absolute left-0 -top-90 -z-10"></div>
            </div>
            <p className="text-[#4F4F4F] text-lg font-medium">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex items-center justify-start gap-10">
              <div className="flex flex-col items-center">
                <span className="text-4xl text-[#003BE2] font-semibold">
                  12K
                </span>
                <span className="text-[#4B4C53] text-[18px] leading-[1.6]">
                  Students
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-[#003BE2] font-semibold">
                  70+
                </span>
                <span className="text-[#4B4C53] text-[18px] leading-[1.6]">
                  Courses
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-[#003BE2] font-semibold">
                  16
                </span>
                <span className="text-[#4B4C53] text-[18px] leading-[1.6]">
                  Creators
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image src={frame1} alt="course features" />
          </div>
        </div>

        {/* 2  */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:justify-items-center md:gap-32">
          <div className="relative order-2 overflow-hidden md:order-1">
            <Image
              src={frame2}
              alt="course features"
              className="h-auto w-full"
            />

            {/* glows */}
            <div
              aria-hidden="true"
              className="glow-lime pointer-events-none absolute -bottom-50 -left-120 -z-10 h-[420px] w-[620px] transform-gpu blur-[20px] md:h-[600px] md:w-[900px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-190 top-90 -z-10 h-[420px] w-[620px] transform-gpu blur-[20px] bg-[radial-gradient(closest-side,rgba(0,59,226,1)_0%,rgba(0,59,226,0.23)_40%,rgba(0,59,226,0.06)_70%,rgba(0,59,226,0)_100%)] md:h-[600px] md:w-[900px]"
            />
          </div>

          <div className="order-1 flex flex-col gap-6 md:order-2 md:gap-10">
            <h2 className="w-full text-2xl font-semibold tracking-[-0.01em] text-(--heading-color) md:max-w-sm md:text-[36px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-lg font-medium text-[#4F4F4F]">
              <span className="font-semibold">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="flex flex-col gap-2">
              {coursesManage.map((course) => (
                <div key={course} className="flex items-center gap-2">
                  <div className="rounded-full bg-[#003BE2] p-0.5">
                    <Icon name="check" className="text-white" />
                  </div>
                  <span className="text-lg text-black">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseFeatures;
