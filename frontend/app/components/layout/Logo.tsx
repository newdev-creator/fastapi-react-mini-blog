import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <h1
      className={`text-slate-600 text-4xl flex md:mr-4 ${russoOne.className}`}
    >
      My Blog
    </h1>
  );
}
