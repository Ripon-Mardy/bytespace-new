import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-[#D4FB20] text-[#242528] hover:bg-[#c5eb18]"
      : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50";
  const classes = ` inline-flex h-12 items-center justify-center rounded-3xl px-10 text-[18px] font-semibold transition-colors ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};
export default Button;
