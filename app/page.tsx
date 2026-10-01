import CourseFeatures from "@/components/home/CourseFeatures";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import LearningPath from "@/components/home/LearningPath";
import LogoPartner from "@/components/home/LogoPartner";
import SkillsCourses from "@/components/home/SkillsCourses";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <LogoPartner />
      <SkillsCourses />
      <LearningPath />
      <CourseFeatures />
      <CTASection />
      <Testimonials />
    </div>
  );
}
