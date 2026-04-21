import React from 'react';
import Link from 'next/link';
import { AuthIllustrationLayout } from '../../components/AuthIllustrationLayout';
import { AuthFormCard } from '../../components/AuthFormCard';
import { AuthInput, AuthButton } from '../../components/AuthInput';
import { Star } from 'lucide-react';

export default function StudentLoginPage() {
  return (
    <AuthIllustrationLayout
      title={
        <>
          Student Login
        </>
      }
      subtitle="Access your account to upload materials and manage your assignments."
      illustrationType="student-login"
      badgeIcon={<Star size={24} />}
      badgeTitle="Join 10,000+ Students"
      badgeDesc="Managing their success daily."
    >
      <div className="w-full flex-1 flex items-center justify-center lg:justify-end">
        <AuthFormCard 
          title="" 
        >
          <form className="flex flex-col gap-6">
            <AuthInput label="Email Address" type="email" placeholder="Enter your email" />
            
            <AuthInput label="Password" type="password" placeholder="Enter your password" isPassword />

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
              <Link href="/auth/student/register" className="text-[#55B5DE] font-semibold hover:underline">
                Register as Student
              </Link>
            </p>
          </form>
        </AuthFormCard>
      </div>
    </AuthIllustrationLayout>
  );
}
