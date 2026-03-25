"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "MEET FINN" },
  { id: "about", label: "ABOUT" },
  { id: "howtobuy", label: "HOW TO BUY" },
  { id: "tokenomics", label: "OCEANOMICS" },
  { id: "community", label: "COMMUNITY" },
];

export default function DotNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-10 items-center">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group relative flex items-center justify-center p-2"
          aria-label={section.label}
        >
          <div
            className={`h-5 w-5 rounded-full border-2 border-white/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,123,255,0.3)] ${
              activeSection === section.id
                ? "bg-[#00FFFF] scale-150 border-[#00FFFF] shadow-[0_0_20px_#00FFFF]"
                : "bg-transparent group-hover:scale-125 group-hover:border-white"
            }`}
          />
          <span className={`absolute right-12 whitespace-nowrap font-heading text-2xl text-white opacity-0 transition-all duration-300 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === section.id ? "opacity-100 translate-x-0 text-secondary" : ""}`}
            style={{ textShadow: "4px 4px 0px #000" }}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}
