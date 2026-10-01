import type { CourseCategoryId } from "@/types/course";
import { courseCategories } from "@/data/courses";

type CoursesCategoryProps = {
  activeCategory: CourseCategoryId;
  onChange: (category: CourseCategoryId) => void;
};

const CoursesCategory = ({
  activeCategory,
  onChange,
}: CoursesCategoryProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {courseCategories.map((cat) => {
        const isActive = cat.id === activeCategory;

        return (
          <button
            key={cat.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(cat.id)}
            className={`cursor-pointer rounded-full px-4 py-2 text-base font-medium transition-colors ${
              isActive
                ? "bg-[#D4FB20] text-gray-900"
                : "bg-[#F5F5F6] text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default CoursesCategory;
