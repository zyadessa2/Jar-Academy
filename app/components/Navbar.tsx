"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Bell, UploadCloud, BookOpen, ClipboardList, ShoppingCart, User } from "lucide-react";

// --- 1. إعدادات الـ Roles (Configuration Array) ---
export type Role = "guest" | "student" | "instructor"; 

type NavLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type NavConfigType = {
  [key in Role]: {
    links: NavLink[];
    customActions: () => React.ReactNode;
  };
};

const NAV_CONFIG: NavConfigType = {
  guest: {
    links: [
      { label: "للطلاب", href: "/students" },
      { label: "للمدرسين", href: "/instructors" },
      { label: "كيف يعمل", href: "/how-it-works" },
      { label: "اتصل بنا", href: "/contact" },
    ],
    // تصميم زرار الضيف
    customActions: () => (
      <Link
        href="/get-started"
        className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-2.5 rounded-btn shadow-md transition-all hover:scale-105 inline-block"
      >
        ابدأ الآن
      </Link>
    ),
  },
  student: {
    links: [
      { label: "Upload Files", href: "/upload", icon: <UploadCloud size={18} className="text-brand-primary" /> },
      { label: "My Courses", href: "/courses", icon: <BookOpen size={18} className="text-text-main" /> },
      { label: "My Assignments", href: "/assignments", icon: <ClipboardList size={18} className="text-text-main" /> },
      { label: "My Orders", href: "/orders", icon: <ShoppingCart size={18} className="text-text-main" /> },
      { label: "contact us", href: "/contact" },
    ],
    // تصميم أزرار الطالب (إشعارات + بروفايل)
    customActions: () => <LoggedInActions />,
  },
  instructor: {
    links: [
      { label: "Available Tasks", href: "/tasks" },
      { label: "My projects", href: "/projects" },
      { label: "Offers", href: "/offers" },
      { label: "contact us", href: "/contact" },
    ],
    // تصميم أزرار الفريلانسر/المدرس (إشعارات + بروفايل)
    customActions: () => <LoggedInActions />,
  },
};

// --- 2. كومبوننت الـ Actions للمسجلين (جرس الإشعارات + البروفايل) ---
const LoggedInActions = () => (
  <div className="flex items-center gap-4 " dir="ltr">
    {/* زرار الإشعارات */}
    <button className="bg-brand-secondary text-white p-2.5 rounded-full hover:bg-brand-secondary/90 transition-colors shadow-sm">
      <Bell size={20} />
    </button>
    {/* زرار البروفايل */}
    <Link 
      href="/profile" 
      className="flex items-center gap-2 bg-brand-secondary text-white px-4 py-2 rounded-full hover:bg-brand-secondary/90 transition-colors shadow-sm font-medium"
    >
      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
        {/* صورة افتراضية كـ Placeholder */}
        <User size={16} className="text-orange-500" />
      </div>
      <span className="text-sm">My Profile</span>
    </Link>
  </div>
);

export default function Navbar({ role = "student" }: { role?: Role }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // استدعاء إعدادات المستخدم الحالي بناءً على الـ Role
  const currentNav = NAV_CONFIG[role];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-white py-4"
      }`}
      dir="ltr"
    >
      {/* Container - flex with appropriate gap */}
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="/jar_logo_final.png" 
            alt="Jar Academy Logo" 
            width={120}
            height={45}
            className="w-auto h-11.25 object-contain"
            priority
          />
        </Link>

        {/* جزء المنتصف: الروابط (نفس التنسيق لكل الأدوار) */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {currentNav.links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="flex items-center gap-2 text-text-main hover:text-brand-primary font-medium transition-colors text-[15px]"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </Link>
          ))}
        </div>

        {/* جزء اليسار: الأزرار والتفاعلات (متغيرة دايناميك) */}
        <div className="shrink-0">
          {currentNav.customActions()}
        </div>

      </div>
    </nav>
  );
}
