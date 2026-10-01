import { StaticImageData } from "next/image";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategoryId =
  | "featured"
  | "music"
  | "drawing-painting"
  | "marketing"
  | "animation"
  | "social-media"
  | "ui-ux-design"
  | "creative-marketing"
  | "digital-illustration"
  | "film-video"
  | "crafts"
  | "freelance-entrepreneurship"
  | "graphic-design"
  | "photography"
  | "productivity"
  | "web-development"
  | "data-science"
  | "cooking";

export type CourseCategory = {
  id: CourseCategoryId;
  label: string;
};

export type StudentAvatar = {
  src: StaticImageData;
  alt: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnail: StaticImageData;
  lessons: number;
  durationLabel: string; // e.g. "2 hours 16 mins"
  comments: number;
  level: CourseLevel;
  rating: number; // 0 to 5
  price: number; // in USD
  priceNote: string; // e.g. "/lifetime"
  studentAvatars: StudentAvatar[];
  studentsCountLabel: string; // e.g. "26+"
  categories: CourseCategoryId[];
};

export type learningPathType = {
  title: string;
  src: StaticImageData;
  alt: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: StaticImageData;
};

// course details

export type Lesson = {
  id: string;
  title: string;
  duration: string; // e.g. "12 mins"
};

export type IncludeIcon =
  | "resources"
  | "video"
  | "certificate"
  | "consultation";

export type CourseDetail = {
  slug: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewCount: number;
  students: number;
  lessonsCount: number;
  totalHours: number;
  price: number;
  priceNote: string;
  videoThumbnail: string;
  instructor: { name: string; role: string; avatar: string };
  lessons: Lesson[];
  includes: { label: string; icon: IncludeIcon }[];
  description: string[];
  sneakPeek: { src: string; alt: string }[];
  keyPoints: string[];
  reviews: { id: string; name: string; rating: number; text: string }[];
};
