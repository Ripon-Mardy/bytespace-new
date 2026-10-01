import Image from "next/image";

import { Testimonial } from "@/types/course";

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

const TestimonialsCard = ({ testimonial }: TestimonialsCardProps) => {
  return (
    <article className="rounded-3xl bg-white p-6 z-50">
      <div>
        <Image src={testimonial.avatar} alt={testimonial.name} />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>

      <p className="text-lg text-[#003BE2]">{testimonial.role}</p>

      <p className="text-lg mt-5 leading-[1.6] text-[#4F4F4F]">
        &quot;{testimonial.quote}&quot;
      </p>
    </article>
  );
};

export default TestimonialsCard;
