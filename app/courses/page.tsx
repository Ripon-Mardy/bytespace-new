"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { courseCategories, courses } from "@/data/courses";
import type { CourseCategoryId } from "@/types/course";
import CourseCard from "@/components/ui/courses/CourseCard";

const pillClass =
  "flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-3xl border border-[#CED0D3] px-4 py-3 text-base leading-[1.2] text-[#4B4C53] transition-colors hover:bg-gray-50";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CourseCategoryId>("featured");

  return (
    <main>
      {/* Top banner */}
      <section className="relative overflow-hidden bg-[#0037d9] pb-14 sm:pb-20">
        {/* Background grid */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_2px)]
            bg-[size:64px_64px] md:bg-[size:96px_96px] lg:bg-[size:120px_120px]"
        />

        {/* Header */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Title + search */}
        <Container className="relative z-10">
          <div className="mt-8 flex flex-col items-center md:mt-10">
            <h1 className="text-center text-2xl font-semibold text-white md:text-[36px]">
              Find Your Next Course
            </h1>

            <form
              action="/courses"
              role="search"
              className="mt-6 flex w-full max-w-2xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
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

              <Button className="flex w-full cursor-pointer items-center justify-center gap-1 sm:w-auto">
                Courses <Icon name="ChevronDown" size={20} />
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* Courses */}
      <section>
        <Container>
          <div className="py-10 sm:py-14 lg:py-[72px]">
            {/* Filter row */}
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

            {/* courses category  */}
            <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {courseCategories.slice(0, 9).map((cat) => {
                const isActive = cat.id === activeCategory;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[16px] font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#c6f21a] text-gray-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* courses  */}
            <div className="mt-19.25">
              <CourseCard course={courses} />
            </div>
          </div>
        </Container>
      </section>

      {/* pagination  */}
      {/* <Pagination /> */}

      <div className="flex items-center justify-center gap-5 mb-5">
        <span className="border border-gray-400 p-3 rounded-full">
          <Icon name="ChevronLeft" className="text-[#4B4C53]" />
        </span>
        <div> 2 3 4</div>

        <span className="border border-gray-400 p-3 rounded-full">
          <Icon name="ChevronRight" className="text-[#4B4C53]" />
        </span>
      </div>
    </main>
  );
}
