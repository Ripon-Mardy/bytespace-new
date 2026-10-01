import Image from "next/image";
import Link from "next/link";

import { Course } from "@/types/course";
import { demoAvatars } from "@/data/courses";

import vector from "@/public/Vector.png";
import Icon from "../Icon";

type CoursesCardProps = {
  course: Course[];
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const CourseCard = ({ course }: CoursesCardProps) => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
      {course.length > 0 ? (
        course.map((course) => (
          <Link
            key={course.id}
            href={`/course-details/${course.slug}`}
            className="rounded-3xl border border-[#CED0D3] p-3 shadow w-full max-w-93.25 mx-auto"
          >
            <Image
              src={course.thumbnail}
              width={600}
              height={400}
              className="w-full rounded-lg"
              alt={course.title}
            />

            {/* title text */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col mt-5">
                <span className="text-(--heading-color) font-semibold text-lg md:text-[20px]">
                  {course.title}
                </span>

                <span className="text-xs">
                  by <span className="text-[#003BE2]">{course.instructor}</span>
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span>{course.rating}</span>

                <Image src={vector} width={16} height={16} alt="Rating" />
              </div>
            </div>

            {/*  level + student avater  */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center justify-center gap-2 bg-[#F5F5F6] rounded-3xl px-2 w-fit text-xs py-1 text-[#4B4C53]">
                <Icon name="signal" />
                {course.level}
              </div>

              <ul className="flex items-center  -space-x-2">
                {demoAvatars.slice(0, 4).map((avater, index) => (
                  <li key={index}>
                    <Image
                      src={avater?.src}
                      width={24}
                      height={24}
                      className=" h-6 w-6 rounded-full object-cover ring-2 ring-white"
                      alt={avater?.alt}
                    />
                  </li>
                ))}
                <li className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#c6f21a] px-1.5 text-[10px] font-bold text-gray-900 ring-2 ring-white">
                  {course.studentsCountLabel}
                </li>
              </ul>
            </div>

            {/* price  */}
            <p className="mt-4">
              <span className="text-[20px] font-semibold text-[#003BE2]">
                {priceFormatter.format(course.price)}
              </span>
              <span className="ml-0.5 text-[12px] font-normal text-[#4F4F4F] leading-[1.6]">
                {course.priceNote}
              </span>
            </p>
          </Link>
        ))
      ) : (
        <div className="col-span-full py-10 text-center">Courses not found</div>
      )}
    </article>
  );
};

export default CourseCard;
