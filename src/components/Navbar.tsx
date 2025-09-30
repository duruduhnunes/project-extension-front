import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
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
        
        {/* Links de navegação */}
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Menu
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            New
          </a>
        </div>
      </div>
    </nav>
  );
}
