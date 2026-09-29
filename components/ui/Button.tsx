import React from "react";
import Link from "next/link";
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}
const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-[#D4FB20] text-gray-950 hover:bg-[#c5eb18]"
      : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50";
  const classes = ` inline-flex h-12 items-center justify-center rounded-xl px-10 text-sm font-semibold transition-colors ${styles} ${className} `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};
export default Button;
