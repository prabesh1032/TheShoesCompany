import { Instagram, Twitter, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-white/10">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-[400px] h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              The Shoes Company
            </h3>

            <p className="mt-4 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              Crafted for movement. Designed for confidence.
              Elevate every step with premium comfort and bold identity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              Connect With Us
            </h4>

            <div className="flex gap-4 sm:gap-6 text-gray-400 mb-4 sm:mb-0">
              <a href="#" className="hover:text-red-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Github size={20} />
              </a>
            </div>

            <p className="mt-4 sm:mt-8 text-gray-500 text-xs sm:text-sm">
              Kathmandu, Nepal
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-16 md:mt-20 border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} The Shoes Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}