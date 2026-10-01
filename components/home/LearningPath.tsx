import Image from "next/image";

import Container from "../ui/Container";
import { learningPath } from "@/data/courses";

const LearningPath = () => {
  return (
    <section className="py-10">
      <Container>
        {/* title */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="w-full text-center text-2xl font-semibold tracking-[-1%] text-(--heading-color) md:text-[36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="w-full max-w-5xl text-center text-lg font-normal leading-[1.6] text-(--color-para)">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* paths */}
        <ul className="mt-17 flex flex-wrap items-center justify-between gap-7 md:gap-10">
          {learningPath.map((learn) => (
            <li
              key={learn.title}
              className="flex h-41.75 w-41.75 flex-col flex-wrap items-center justify-center gap-2 rounded-3xl border border-[#CED0D3]"
            >
              <Image src={learn.src} className="h-10 w-10" alt={learn.alt} />

              <span className="text-sm">{learn.title}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default LearningPath;
