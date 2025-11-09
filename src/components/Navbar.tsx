"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SECTION_MAP: { id: string; label: string }[] = [
  { id: "inicio-section", label: "Início" },
  { id: "sobre-section", label: "Sobre" },
  { id: "cardapio", label: "Cardápio" },
  { id: "novidades-section", label: "Novidades" },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState("Início");

  const handleNavClick = (section: string) => {
    setIsActive(section);
  };

  useEffect(() => {
    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (!visibleEntries.length) {
        return;
      }

      const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev
      );

      const matchedSection = SECTION_MAP.find(
        (section) => section.id === mostVisibleEntry.target.id
      );

      if (matchedSection) {
        setIsActive((current) =>
          current === matchedSection.label ? current : matchedSection.label
        );
      }
    };

    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: [0.25, 0.5, 0.75],
    });

    SECTION_MAP.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTION_MAP.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full opacity-85 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/Rectangle.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-12 w-auto"
          />
          <div className="text-white text-2xl font-bold">MARMININO</div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#inicio-section"
            onClick={() => handleNavClick("Início")}
            className={`relative text-white cursor-pointer text-lg font-medium
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full
              ${
                isActive === "Início"
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
          >
            Início
          </a>

          <a
            href="#sobre-section"
            onClick={() => handleNavClick("Sobre")}
            className={`relative text-white cursor-pointer text-lg font-medium
              after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300
              ${
                isActive === "Sobre"
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
            `}
          >
            Sobre
          </a>

          <a
            href="#cardapio"
            onClick={() => handleNavClick("Cardápio")}
            className={`relative text-white cursor-pointer text-lg font-medium
              after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300
              ${
                isActive === "Cardápio"
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
              `}
          >
            Cardápio
          </a>

          <a
            href="#novidades-section"
            onClick={() => handleNavClick("Novidades")}
            className={`relative text-white cursor-pointer text-lg font-medium 
               after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 
               after:bg-amber-600 after:transition-all after:duration-400
               ${
                 isActive === "Novidades"
                   ? "after:w-full"
                   : "after:w-0 hover:after:w-full"
               }`}
          >
            Novidades
          </a>
        </div>
      </div>
    </nav>
  );
}
