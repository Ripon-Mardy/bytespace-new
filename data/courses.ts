import type {
  Course,
  CourseCategory,
  StudentAvatar,
  Testimonial,
} from "@/types/course";

export const courseCategories: CourseCategory[] = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social-media", label: "Social Media" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "creative-marketing", label: "Creative Marketing" },
  { id: "digital-illustration", label: "Digital Illustration" },
  { id: "film-video", label: "Film & Video" },
  { id: "crafts", label: "Crafts" },
  { id: "freelance-entrepreneurship", label: "Freelance & Entrepreneurship" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
  { id: "productivity", label: "Productivity" },
  { id: "web-development", label: "Web Development" },
  { id: "data-science", label: "Data Science" },
  { id: "cooking", label: "Cooking" },
];

// avaters
import avater1 from "@/public/user/user1.png";
import avater2 from "@/public/user/user2.png";
import avater3 from "@/public/user/user3.png";
import avater4 from "@/public/user/user4.png";

export const demoAvatars: StudentAvatar[] = [
  { src: avater1, alt: "Student 1" },
  { src: avater2, alt: "Student 2" },
  { src: avater3, alt: "Student 3" },
  { src: avater4, alt: "Student 4" },
];

// courses image
import course1 from "@/public/courses/Frame1.png";
import course2 from "@/public/courses/Frame2.png";
import course3 from "@/public/courses/Frame3.png";
import course4 from "@/public/courses/Frame4.png";
import course5 from "@/public/courses/Frame5.png";
import course6 from "@/public/courses/Frame6.png";

export const courses: Course[] = [
  {
    id: "course-001",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    instructor: "pureport studio",
    thumbnail: course1,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: ["featured", "ui-ux-design", "graphic-design"],
  },
  {
    id: "course-002",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    instructor: "pureport studio",
    thumbnail: course2,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: [
      "featured",
      "digital-illustration",
      "freelance-entrepreneurship",
    ],
  },
  {
    id: "course-003",
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    instructor: "pureport studio",
    thumbnail: course3,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: ["featured", "data-science"],
  },
  {
    id: "course-004",
    slug: "balancing-productivity-and-life",
    title: "Balancing Productivity and Life",
    instructor: "pureport studio",
    thumbnail: course4,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: ["productivity", "freelance-entrepreneurship"],
  },
  {
    id: "course-005",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    instructor: "pureport studio",
    thumbnail: course5,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: ["featured", "marketing", "data-science"],
  },
  {
    id: "course-006",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    instructor: "pureport studio",
    thumbnail: course6,
    lessons: 17,
    durationLabel: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    priceNote: "/lifetime",
    studentAvatars: demoAvatars,
    studentsCountLabel: "26+",
    categories: ["freelance-entrepreneurship", "creative-marketing"],
  },
];

// Learning path data
import learn1 from "@/public/learningPath/Frame1.png";
import learn2 from "@/public/learningPath/Frame2.png";
import learn3 from "@/public/learningPath/Frame3.png";
import learn4 from "@/public/learningPath/Frame4.png";
import learn5 from "@/public/learningPath/Frame5.png";
import learn6 from "@/public/learningPath/Frame6.png";

export const learningPath = [
  {
    title: "Design",
    src: learn1,
    alt: "learn1",
  },
  {
    title: "Development",
    src: learn2,
    alt: "learn2",
  },
  {
    title: "IT & Software ",
    src: learn3,
    alt: "learn3",
  },
  {
    title: "Business",
    src: learn4,
    alt: "learn4",
  },
  {
    title: "Marketing",
    src: learn5,
    alt: "learn5",
  },
  {
    title: "Photography",
    src: learn6,
    alt: "learn6",
  },
];

// testimonials data
import testi1 from "@/public/testimonials/Ellipse1.png";
import testi2 from "@/public/testimonials/Ellipse2.png";
import testi3 from "@/public/testimonials/Ellipse3.png";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: testi1,
    name: "Sarah M.",
    role: "UX Designer",
    quote:
      "ByteSpace gave me a clear path from beginner to job-ready. The projects felt like real work, and my mentor reviewed every one.",
  },
  {
    id: 2,
    name: "James L.",
    avatar: testi2,
    role: "Frontend Developer",
    quote:
      "The lessons are short and practical. I finished a full course in three weeks while working full time, and used it in my next interview.",
  },
  {
    id: 3,
    avatar: testi3,
    name: "Aisha K.",
    role: "Course Creator",
    quote:
      "Teaching on ByteSpace was easy to set up. I published my first course in a weekend and had students within days.",
  },
];

// course details data

import type { CourseDetail } from "@/types/course";

export const courseDetails: CourseDetail[] = [
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    level: "Intermediate",
    rating: 4.5,
    reviewCount: 172,
    students: 199,
    lessonsCount: 112,
    totalHours: 24,
    price: 25,
    priceNote: "/lifetime",
    videoThumbnail: "/courses/details/video-thumb.jpg",
    instructor: {
      name: "PureReef Studio",
      role: "Professional Creator",
      avatar: "/avatars/1.jpg",
    },
    lessons: [
      { id: "l1", title: "Introduction to Digital Asset", duration: "12 mins" },
      { id: "l2", title: "Design Principles for Impacts", duration: "12 mins" },
      {
        id: "l3",
        title: "Advanced Techniques in Digital Creation",
        duration: "14 mins",
      },
      { id: "l4", title: "Project Showcase and Critique", duration: "18 mins" },
      {
        id: "l5",
        title: "Optimizing for Various Platforms",
        duration: "16 mins",
      },
      {
        id: "l6",
        title: "Digital Asset Management Best Practices",
        duration: "15 mins",
      },
    ],
    includes: [
      { label: "Learning Resources", icon: "resources" },
      { label: "Quality Lesson Videos", icon: "video" },
      { label: "Certificate of Completion", icon: "certificate" },
      { label: "Private Consultation", icon: "consultation" },
    ],
    description: [
      "Embark on an enlightening exploration into the world of digital asset creation with this comprehensive course. You will learn how to turn ideas into polished, production-ready assets.",
      "In the initial modules, you will establish a solid foundation by examining the essentials of digital asset creation, then move into advanced techniques, color theory and optimization.",
      "As you progress through the course, you will apply what you learn to real projects and receive feedback that helps you build a strong, professional portfolio.",
    ],
    sneakPeek: [
      { src: "/courses/details/peek-1.jpg", alt: "Lesson preview 1" },
      { src: "/courses/details/peek-2.jpg", alt: "Lesson preview 2" },
      { src: "/courses/details/peek-3.jpg", alt: "Lesson preview 3" },
      { src: "/courses/details/peek-4.jpg", alt: "Lesson preview 4" },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    reviews: [
      {
        id: "r1",
        name: "Faisal Ahmed",
        rating: 5,
        text: "Clear lessons and very practical projects.",
      },
      {
        id: "r2",
        name: "Shanta Islam",
        rating: 4,
        text: "Great content. I wish there were more advanced exercises.",
      },
    ],
  },
];

export function getCourseDetail(slug: string) {
  return courseDetails.find((course) => course.slug === slug);
}
