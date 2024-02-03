"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {};

const NavLinks = (props: Props) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("about-me");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      const scrollPosition = window.scrollY;

      if (
        aboutMeSection &&
        scrollPosition >= aboutMeSection.offsetTop &&
        scrollPosition < (experienceSection?.offsetTop || 0)
      ) {
        setActive(1);
      } else if (
        experienceSection &&
        scrollPosition >= experienceSection.offsetTop &&
        scrollPosition < (projectsSection?.offsetTop || 0)
      ) {
        setActive(2);
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop
      ) {
        setActive(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="space-y-8 font-bold text-indigo-600 hidden lg:block scroll-smooth">
      <Link href="#about-me" className="flex items-center group space-x-4">
        <span
          className={`group-hover:w-20 group-hover:h-1 transition-all bg-indigo-600 group-hover:opacity-100 ${
            active === 1 ? "w-20 h-1 opacity-100" : "w-8 h-0.5 opacity-70"
          }`}
        />
        <span
          className={`transition-transform group-hover:opacity-100 ${
            active === 1 ? "opacity-100" : "opacity-70"
          }`}
        >
          About me
        </span>
      </Link>
      <Link href="#experience" className="flex items-center space-x-2 group">
        <span
          className={`group-hover:w-20 group-hover:h-1 transition-all bg-indigo-600 group-hover:opacity-100 ${
            active === 2 ? "w-20 h-1 opacity-100" : "w-8 h-0.5 opacity-70"
          }`}
        />
        <span
          className={`transition-transform group-hover:opacity-100 ${
            active === 2 ? "opacity-100" : "opacity-70"
          }`}
        >
          Experience
        </span>
      </Link>
      <Link href="#projects" className="flex items-center space-x-2 group">
        <span
          className={`group-hover:w-20 group-hover:h-1 transition-all bg-indigo-600 group-hover:opacity-100 ${
            active === 3 ? "w-20 h-1 opacity-100" : "w-8 h-0.5 opacity-70"
          }`}
        />
        <span
          className={`transition-transform group-hover:opacity-100 ${
            active === 3 ? "opacity-100" : "opacity-70"
          }`}
        >
          Projects
        </span>
      </Link>
    </nav>
  );
};

export default NavLinks;