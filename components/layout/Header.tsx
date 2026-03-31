"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
        ? "border-primary/20 bg-bg-dark/95 backdrop-blur-md"
        : "border-primary/20 bg-bg-dark/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image
            src="/images/squadra-media.png"
            alt="Squadra Tech Logo"
            width={160}
            height={48}
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname === `${link.href}/`;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md transition-colors ${isActive
                  ? "font-semibold text-primary"
                  : "font-medium hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-bg-dark border-t border-primary/20 shadow-2xl flex flex-col">
          <div className="flex flex-col p-6 gap-4 overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname === `${link.href}/`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium py-3 border-b border-white/5 ${isActive ? "text-primary" : "text-slate-300"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-6 bg-primary text-center text-white text-lg font-bold py-4 px-6 rounded-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}