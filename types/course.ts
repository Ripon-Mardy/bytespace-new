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
  src: string;
  alt: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnail: string;
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
