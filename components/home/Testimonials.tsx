import { testimonials } from "@/data/courses";

import Container from "../ui/Container";
import TestimonialsCard from "../TestimonialsCard";

const Testimonials = () => {
  return (
    <main className="py-20 bg-[#FAFAFA] overflow-hidden">
      <Container>
        <div className="relative isolate">
          <div className="blue-lime pointer-events-none absolute -left-120 top-50 -z-10 h-[300px] w-[300px] blur-[20px] md:h-[600px] md:w-[900px]" />

          {/* title */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center">
            <h2 className="w-full text-2xl md:max-w-lg font-semibold tracking-[-0.01em] text-(--heading-color) md:text-[36px]">
              Discover What Our Community Is Saying
            </h2>
            <p className="text-base leading-[1.6] text-[#4F4F4F] md:text-lg relative isolate overflow-hidden">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
              <div className="glow-lime pointer-events-none absolute -left-100 -top-60 -z-10 h-75 w-[300px] blur-[20px] md:h-[600px] md:w-[600px]" />
            </p>
          </div>

          {/* cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 z-50">
            {testimonials.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Testimonials;
