"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "../DarkMode/ModeButton";
import { StarBorder } from "../button/star-borde";
import { useTheme } from "next-themes";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Choose logo based on theme
  const logoSrc =
    theme === "dark"
      ? "/logo/CodeQuint-Logo-dark.svg"
      : "/logo/CodeQuint-Logo.svg";

  return (
    <header className="h-20 sticky top-0 bg-background text-foreground flex items-center z-50">
      <div className="container mx-auto flex items-center justify-between relative h-full">
        {/* Logo */}
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt="Code Quint logo"
              width={150}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Navigation for md+ */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
          <Link href="#services" className="hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link href="#about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="#contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>

        {/* Right side: Button and ModeToggle */}
        <div className="hidden lg:flex items-center gap-4 sm:gap-6">
          <StarBorder
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("contact");
            }}
          >
            Free Website Audit
          </StarBorder>

          <ModeToggle />
        </div>

        {/* Hamburger button for small screens */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center h-8 w-8 space-y-1.5 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu - toggle show/hide */}
      {menuOpen && (
        <nav className="lg:hidden bg-primary-foreground w-full px-4 py-6 shadow-lg absolute top-20 left-0 z-10">
          <ul className="flex flex-col gap-4 text-center text-foreground">
            <li>
              <Link
                href="#services"
                className="block hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <StarBorder
                onClick={() => {
                  setMenuOpen(false);
                  document.getElementById("contact");
                }}
              >
                Free Website Audit
              </StarBorder>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
