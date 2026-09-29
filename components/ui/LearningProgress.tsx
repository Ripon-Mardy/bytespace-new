type LearningProgressProps = {
  value: number;
  label?: string;
  className?: string;
};

export default function LearningProgress({
  value,
  label = "Learning Progress",
  className = "",
}: LearningProgressProps) {
  const progress = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <div className={`w-[300] bg-white p-5 rounded-2xl ${className}`}>
      <p className="text-base text-gray-800">{label}</p>

      <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
        {progress}%
      </p>

      {/* Track */}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100"
      >
        {/* Fill */}
        <div
          className="h-full rounded-full bg-[#c6f21a] transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
