'use client';

import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = ["Home", "Resume", "Projects"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-primary text-xl font-bold">
          Netanel Nagar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={`text-gray-600 hover:text-primary transition-colors navlink ${pathname === `/${item.toLowerCase()}` ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="h-6 w-6 text-gray-600" />
          ) : (
            <MdOutlineMenu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="text-gray-600 hover:text-primary transition-colors navLink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;