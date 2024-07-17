"use client";

import Link from "next/link";
import React, { useState } from "react";
import Menu from "../icons/Menu";
import Cross from "../icons/Cross";
import Logo from "./Logo";

import navigationData from "./navigationData.json";
import Button from "../ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-300 z-50 top-0 w-full shadow">
      <nav className="bg-slate-300 max-w-full mx-auto p-6 flex items-center justify-between">
        <Link href="#" aria-label="Page d'accueil du blog">
          <Logo />
        </Link>
        <button
          aria-label="toggle button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          className="cursor-pointer w-7 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </button>
        <ul
          className={`w-full absolute top-full left-0 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } bg-slate-300 text-xl font-semibold -z-10 text-slate-600 flex flex-col items-center lg:static lg:z-10 lg:w-max lg:transform-none lg:flex-row`}
        >
          {navigationData.map((link, i) => (
            <li
              key={i}
              className="py-4 lg:py-0 lg:mr-6 relative w-fit block after:rounded-lg after:block after:content-[''] after:absolute after:h-[2px] after:bg-slate-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <Link href={link.href} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
