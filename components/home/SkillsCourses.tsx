"use client";
import { useState } from "react";

import CourseCard from "../ui/courses/CourseCard";
import Container from "../ui/Container";
import CoursesCategory from "../ui/courses/CoursesCategory";
import { courses } from "@/data/courses";

import { CourseCategoryId } from "@/types/course";

const SkillsCourses = () => {
  const [activeCategory, setActiveCategory] =
    useState<CourseCategoryId>("featured");

  return (
    <section className="py-18">
      <Container>
        {/* title  */}
        <div className="flex items-center justify-center gap-4 flex-col">
          <h2 className="text-2xl md:text-[44px] w-full max-w-xl font-semibold text-center text-(--heading-color)">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-(--color-para) text-sm md:text-lg w-full max-w-5xl text-center">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* skills categories  */}
        <div className="mt-10.5 w-full md:max-w-6xl mx-auto text-center">
          <CoursesCategory
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* courses grid  */}
        <div className="mt-19.25">
          <CourseCard course={courses} />
        </div>
      </Container>
    </section>
  );
};

export default SkillsCourses;
