import React from 'react';
import Link from 'next/link';
import { AuthIllustrationLayout } from '../../components/AuthIllustrationLayout';
import { AuthFormCard } from '../../components/AuthFormCard';
import { AuthInput, AuthSelect, AuthButton } from '../../components/AuthInput';
import { MonitorPlay, Briefcase, Clock } from 'lucide-react';

export default function InstructorRegisterPage() {
  return (
    <AuthIllustrationLayout
      title={
        <>
          Become an <span className="text-[#55B5DE]">Instructor</span>
        </>
      }
      subtitle="Share your knowledge and help students understand their materials while building your professional teaching career."
      illustrationType="instructor-register"
      badgeIcon={<Briefcase size={24} />}
      badgeTitle="Competitive Pay"
      badgeDesc="Earn more for high-quality content."
    >
      <AuthFormCard 
        title="" 
      >
        <form className="flex flex-col gap-5">
          <AuthInput label="Full Name" placeholder="Johnathan Doe" />
          
          <div className="flex flex-col md:flex-row gap-5 items-end">
            <AuthSelect 
              label="Code" 
              options={[
                { value: '+1', label: '+1 (USA)' },
                { value: '+966', label: '+966 (KSA)' },
                { value: '+20', label: '+20 (EGY)' },
              ]} 
              className="w-full md:w-1/3"
            />
            <AuthInput label="Phone Number" placeholder="555-0123" className="w-full md:w-2/3" />
          </div>

          <AuthInput label="Email Address" type="email" placeholder="email@example.com" />
          
          <div className="flex flex-col md:flex-row gap-5">
            <AuthInput label="Password" type="password" placeholder="••••••••" isPassword />
            <AuthInput label="Confirm Password" type="password" placeholder="••••••••" isPassword />
          </div>

          <AuthInput label="Field of Study" placeholder="e.g. Theoretical Physics" />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-white/90">
              Subjects You Can Teach
            </label>
            <textarea 
              className="w-full h-24 bg-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-medium text-[#0E1111] text-sm resize-none"
              placeholder="List subjects here..."
            ></textarea>
            <p className="text-xs text-gray-400">Hold Ctrl/Cmd to select multiple subjects.</p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-semibold text-white/90">
              Academic Status
            </label>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-white/90">
                <input type="radio" name="academic_status" value="student" className="w-4 h-4 text-[#55B5DE] focus:ring-[#55B5DE]" />
                <span>Student</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-white/90">
                <input type="radio" name="academic_status" value="graduate" className="w-4 h-4 text-[#55B5DE] focus:ring-[#55B5DE]" />
                <span>Graduate</span>
              </label>
            </div>
          </div>

          <AuthButton type="submit" className="mt-4">
            Create Instructor Account
          </AuthButton>

          <p className="text-center text-sm text-gray-300 mt-2">
            Already have an account?{' '}
            <Link href="/auth/instructor/login" className="text-[#55B5DE] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </AuthFormCard>
    </AuthIllustrationLayout>
  );
}
