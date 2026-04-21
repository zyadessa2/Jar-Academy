import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { GraduationCap, UserSquare2 } from 'lucide-react'; // Approximations for Figma icons

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans" dir="ltr">
      {/* We use the global navbar, but override dir to ltr to match Figma */}
      <div className="bg-white">
        <Navbar />
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-[44px] font-bold text-[#0E1111] mb-3 text-center tracking-tight">
          Join JAR Academy
        </h1>
        <p className="text-gray-500 text-lg mb-16 text-center font-medium">
          Choose how you want to use the platform.
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Student Choice Card */}
          <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center border border-gray-50 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="w-20 h-20 bg-[#F0F9FF] rounded-full flex items-center justify-center mb-6 text-[#55B5DE]">
              <GraduationCap size={36} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-xl font-bold text-[#0E1111] mb-4">Student</h2>
            <p className="text-gray-500 text-center text-sm leading-relaxed mb-10 max-w-[240px]">
              Upload your lectures, assignments, or study material and get help from expert instructors.
            </p>

            <div className="w-full space-y-3 mt-auto">
              <Link 
                href="/auth/student/login" 
                className="flex w-full items-center justify-center h-12 bg-[#55B5DE] hover:bg-[#4eaade] text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Login as Student
              </Link>
              <Link 
                href="/auth/student/register" 
                className="flex w-full items-center justify-center h-12 bg-[#F8FAFC] hover:bg-gray-100/80 text-[#0E1111] font-bold rounded-xl transition-all active:scale-[0.98] border border-gray-100"
              >
                Register as Student
              </Link>
            </div>
          </div>

          {/* Instructor Choice Card */}
          <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center border border-gray-50 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="w-20 h-20 bg-[#F0F9FF] rounded-full flex items-center justify-center mb-6 text-[#55B5DE]">
              <UserSquare2 size={32} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-xl font-bold text-[#0E1111] mb-4">Instructor</h2>
            <p className="text-gray-500 text-center text-sm leading-relaxed mb-10 max-w-[260px]">
              Help students understand their materials and earn by explaining lectures and assignments.
            </p>

            <div className="w-full space-y-3 mt-auto">
              <Link 
                href="/auth/instructor/login" 
                className="flex w-full items-center justify-center h-12 bg-[#55B5DE] hover:bg-[#4eaade] text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Login as Instructor
              </Link>
              <Link 
                href="/auth/instructor/register" 
                className="flex w-full items-center justify-center h-12 bg-[#F8FAFC] hover:bg-gray-100/80 text-[#0E1111] font-bold rounded-xl transition-all active:scale-[0.98] border border-gray-100"
              >
                Register as Instructor
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer matching Figma */}
      <footer className="w-full bg-white py-8 border-t border-gray-100 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400 gap-4 font-medium">
          <div className="flex items-center">
            <img src="/jar_logo_final.png" alt="JAR Academy Logo" className="h-6 object-contain grayscale opacity-60 mr-4" />
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms of Service</Link>
            <Link href="/cookie" className="hover:text-gray-800 transition-colors">Cookie Policy</Link>
            <Link href="/help" className="hover:text-gray-800 transition-colors">Help Center</Link>
          </div>
          <div>© 2026 JAR ACADEMY. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
