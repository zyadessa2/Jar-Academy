import React from 'react';
import Link from 'next/link';
import { AuthIllustrationLayout } from '../../components/AuthIllustrationLayout';
import { AuthFormCard } from '../../components/AuthFormCard';
import { AuthInput, AuthButton } from '../../components/AuthInput';
import { ShieldCheck } from 'lucide-react';

export default function InstructorLoginPage() {
  return (
    <AuthIllustrationLayout
      title={
        <>
          Instructor Login
        </>
      }
      subtitle="Access your instructor account and start helping students."
      illustrationType="instructor-login"
      badgeIcon={<ShieldCheck size={24} />}
      badgeTitle="CERTIFIED EXPERT"
      badgeDesc="Empowering students through structured learning and mentorship."
    >
      <div className="w-full flex-1 flex items-center justify-center lg:justify-end">
        <AuthFormCard 
          title="" 
        >
          <form className="flex flex-col gap-6">
            <AuthInput label="Email Address" type="email" placeholder="instructor@jaracademy.com" />
            
            <AuthInput label="Password" type="password" placeholder="••••••••" isPassword />

            <div className="flex items-center justify-between mt-2 text-sm text-gray-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded text-brand-primary border-gray-400 focus:ring-brand-primary" />
                <span>Remember Me</span>
              </label>
              
              <Link href="#" className="text-[#55B5DE] hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            <AuthButton type="submit" className="mt-4">
              Login
            </AuthButton>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">OR</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <p className="text-center text-sm text-gray-300">
              Don't have an account?{' '}
              <Link href="/auth/instructor/register" className="text-[#55B5DE] font-semibold hover:underline">
                Register as Instructor
              </Link>
            </p>
          </form>
        </AuthFormCard>
      </div>
    </AuthIllustrationLayout>
  );
}
