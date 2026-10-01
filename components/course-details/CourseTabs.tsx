"use client";

import { useState } from "react";
import Image from "next/image";

import banner from "@/public/banner.png";
import Icon from "../ui/Icon";

const tabs = ["About", "Lessons", "Reviews"];

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="z-50">
      {/* Tabs */}
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              console.log("Clicked:", tab);
              setActiveTab(tab);
            }}
            className={`cursor-pointer rounded-full px-4 py-2 text-base font-medium transition-colors ${
              activeTab === tab
                ? "bg-[#D4FB20] text-[#000000] font-medium text-base leading-[1.2]"
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-8">
        {activeTab === "About" && (
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-[20px] leading-[1.2] text-[#242528]">
              Description
            </h2>

            <p className="font-normal text-base leading-[1.6] text-[#4B4C53] tracking-[-1%]">
              Embark on an enlightening exploration into the world of digital
              creation with our comprehensive course, &quot;Build Digital
              Assets: A Comprehensive Guide.&quot; This transformative learning
              experience invites you to delve deep into the intricacies of
              crafting impactful digital content. From laying the groundwork
              with foundational concepts to mastering advanced techniques, this
              guide is meticulously curated to empower you with the skills
              essential for navigating the dynamic landscape of digital asset
              creation.
            </p>

            <p className="font-normal text-base leading-[1.6] text-[#4B4C53] tracking-[-1%]">
              In the initial modules, you&apos;ll establish a solid foundation
              by immersing yourself in the foundational concepts that form the
              backbone of digital asset creation. Understand the fundamental
              elements that constitute compelling digital content and gain
              proficiency in leveraging these elements to communicate
              effectively in the digital realm.
            </p>

            <p className="font-normal text-base leading-[1.6] text-[#4B4C53] tracking-[-1%]">
              As you progress through the course, you&apos;ll ascend to higher
              levels of expertise, delving into the nuances of design principles
              that drive impactful creations. Uncover the secrets behind
              effective visual communication, exploring color theory,
              typography, and layout strategies that elevate your digital assets
              to new heights. Engage in hands-on exercises that reinforce your
              understanding, allowing you to apply these principles in practical
              scenarios.
            </p>

            <div className="space-y-4">
              <h2 className="font-semibold text-[20px] leading-[1.2] text-[#242528]">
                Sneak Peak
              </h2>

              <Image src={banner} alt="banner" />
            </div>

            {/* Key points */}
            <div>
              <h2 className="font-semibold text-[20px] leading-[1.6] text-[#242528]">
                Key Points
              </h2>

              <ul className="mt-3 space-y-4">
                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Foundational Concepts
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Design Principles Mastery
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Advanced Techniques in Digital Creation
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Project Showcase and Critique
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Optimizing for Various Platforms
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Digital Asset Management Best Practices
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Monetization Strategies
                </li>

                <li className="flex items-center gap-2 text-[#4B4C53] text-base font-normal">
                  <span className="rounded-full bg-[#003BE2] p-1 text-white">
                    <Icon name="check" />
                  </span>
                  Capstone Project: Building Your Portfolio
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "Lessons" && (
          <div>
            <h3 className="text-2xl font-semibold text-[#242528]">
              Course Lessons
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Here you can show all lessons included in this course.
            </p>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div>
            <h3 className="text-2xl font-semibold text-[#242528]">
              Student Reviews
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Here you can show reviews from students.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTabs;
