'use client'

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState("Início") 
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
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
  href="#"
  onClick={() => setIsActive("Início")}
  className={`relative text-white cursor-pointer text-lg font-medium
    after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full
    ${isActive === "Início"
      ? "after:w-full"
      : "after:w-0 hover:after:w-full"
    }`
  }
>
  Início
</a>


  <a
  href="#"
  onClick={() => setIsActive("Sobre")}
  className={`relative text-white cursor-pointer text-lg font-medium
    after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300
    ${isActive === "Sobre" ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `}
>
  Sobre
</a>


  <a
    href="#"
    onClick={() => setIsActive("Cardápio")}
    className={`relative text-white cursor-pointer text-lg font_medium
      after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-600 after:transition-all after:duration-300
      ${isActive === "Cardápio" ? "after:w-full" : "after:w-0 hover:after:w-full"}
      `}
  >
    Cardápio
  </a>

  <a
    href="#"
    onClick={() => setIsActive("Novidades")}
    className={`relative text-white cursor-pointer text-lg font-medium 
               after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 
               after:bg-amber-600 after:transition-all after:duration-400
               ${isActive === "Novidades"
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
