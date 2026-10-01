import Image from "next/image";
import { StaticImageData } from "next/image";

type Avater = {
  src: StaticImageData;
  alt: string;
};

type HappyStudentsProps = {
  avatars: Avater[];
  rating?: number;
  reviewCount?: number;
  totalLabel?: string;
  className?: string;
};

export default function HappyStudents({
  avatars,
  rating = 4.5,
  reviewCount = 240,
  totalLabel = "2K+",
  className = "",
}: HappyStudentsProps) {
  return (
    <div
      className={`inline-flex flex-col gap-3 ${className} bg-white p-5 rounded-2xl `}
    >
      {/* Title + rating */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Happy Students</h3>

        <div className="mt-0.5 flex items-center gap-1 text-sm">
          <span className="font-medium text-gray-900">{rating}</span>
          <span className="text-gray-500">({reviewCount})</span>
          <StarIcon className="h-4 w-4 text-yellow-400" />
        </div>
      </div>

      {/* Overlapping avatars */}
      <ul className="flex items-center -space-x-3">
        {avatars.map((avatar, index) => (
          <li key={index}>
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
            />
          </li>
        ))}

        {/* badge */}
        <li
          className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 text-sm font-bold text-gray-900 ring-2 ring-white"
          aria-label={`${totalLabel} happy students`}
        >
          {totalLabel}
        </li>
      </ul>
    </div>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
