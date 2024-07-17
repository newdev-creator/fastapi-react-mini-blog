import React from "react";
import { Russo_One } from "next/font/google";
import Link from "next/link";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface ButtonProps {
  href: string;
  label: string;
  variant?: "blue" | "pink";
}

const Button: React.FC<ButtonProps> = ({ href, label, variant = "blue" }) => {
  const gradientClass =
    variant === "blue"
      ? "bg-gradient-to-t from-blue1 to-blue2"
      : "bg-gradient-to-t from-pink1 to-pink2";

  return (
    <button
      className={`text-2xl p-2 text-white capitalize ${gradientClass} rounded-tl-2xl rounded-tr-2xl rounded-br-2xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ${russoOne.className}`}
    >
      <Link href={href}>{label}</Link>
    </button>
  );
};

export default Button;
