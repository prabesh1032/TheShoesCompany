import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} className="w-16 sm:w-20 md:w-24 h-auto" alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-white font-medium text-sm lg:text-base">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6 text-white text-sm sm:text-base">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block hover:text-red-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}