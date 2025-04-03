"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggleButton from "@components/theme-toggle-button";
import LanguageSwitcher from "@components/language-switcher";
import TextLookup from "@components/text-lookup";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle smooth scrolling for anchor links
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
        // @ts-ignore - Safari needs this property
        scrollBehavior: "smooth",
        duration: 300,
      });
    }
  };

  // Add scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm shadow-muted-foreground"
          : "bg-background/80 backdrop-blur-sm"
      } border-b`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className="hover:text-primary transition-colors relative group"
            onClick={(e) => handleScroll(e, "home")}
          >
            <TextLookup>home</TextLookup>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="hover:text-primary transition-colors relative group"
            onClick={(e) => handleScroll(e, "about")}
          >
            <TextLookup>about</TextLookup>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#skills"
            className="hover:text-primary transition-colors relative group"
            onClick={(e) => handleScroll(e, "skills")}
          >
            <TextLookup>skills</TextLookup>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors relative group"
            onClick={(e) => handleScroll(e, "projects")}
          >
            <TextLookup>projects</TextLookup>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors relative group"
            onClick={(e) => handleScroll(e, "contact")}
          >
            <TextLookup>contact</TextLookup>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggleButton />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggleButton />
          <button
            className="text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#home"
              className="hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={(e) => handleScroll(e, "home")}
            >
              <TextLookup>home</TextLookup>
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={(e) => handleScroll(e, "about")}
            >
              <TextLookup>about</TextLookup>
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={(e) => handleScroll(e, "skills")}
            >
              <TextLookup>skills</TextLookup>
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={(e) => handleScroll(e, "projects")}
            >
              <TextLookup>projects</TextLookup>
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors py-2"
              onClick={(e) => handleScroll(e, "contact")}
            >
              <p>
                <TextLookup>contact</TextLookup>
              </p>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
