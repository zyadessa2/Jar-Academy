"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-10">
        {/* Left Side: Call to Action */}
        <div className="flex-shrink-0">
          <Link
            href="/join"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-2.5 rounded-btn shadow-md shadow-brand-primary/20 transition-all hover:scale-105"
          >
            ابدأ الآن
          </Link>
        </div>

        {/* Center Side: Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/students" className="text-text-main hover:text-brand-primary font-medium transition-colors text-sm">
            للطلاب
          </Link>
          <Link href="/instructors" className="text-text-main hover:text-brand-primary font-medium transition-colors text-sm">
            للمدرسين
          </Link>
          <Link href="/how-it-works" className="text-text-main hover:text-brand-primary font-medium transition-colors text-sm">
            كيف يعمل
          </Link>
          <Link href="/contact" className="text-text-main hover:text-brand-primary font-medium transition-colors text-sm">
            اتصل بنا
          </Link>
        </div>

        {/* Right Side: Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img 
            src="/jar_logo_final.png" 
            alt="Jar Academy Logo" 
            style={{ width: '242px', height: '103px', objectFit: 'contain' }}
          />
        </Link>
      </div>
    </nav>
  );
}
