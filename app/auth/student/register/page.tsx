import React from 'react';
import Link from 'next/link';
import { AuthIllustrationLayout } from '../../components/AuthIllustrationLayout';
import { AuthFormCard } from '../../components/AuthFormCard';
import { AuthInput, AuthSelect, AuthButton } from '../../components/AuthInput';
import { CheckCircle2, UploadCloud, ArrowUp } from 'lucide-react';

export default function StudentRegisterPage() {
  return (
    <AuthIllustrationLayout
      title={
        <>
          Elevate Your <br />
          <span className="text-[#55B5DE]">Academic</span> Journey.
        </>
      }
      subtitle="Join JAR Academy and start getting help with your lectures and assignments. Connect with top resources and streamline your learning experience."
      illustrationType="student-register"
      badgeIcon={<CheckCircle2 size={24} />}
      badgeTitle="ASSIGNMENT HELP"
      badgeDesc="24/7 Expert Support"
    >
      <AuthFormCard 
        title="Create Your Student Account" 
        subtitle="Please fill in the details below to get started."
      >
        <form className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            <AuthInput label="Full Name" placeholder="John Doe" />
            <AuthInput label="University" placeholder="Enter University Name" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-5">
            <AuthInput label="Faculty / College" placeholder="e.g. Engineering" />
            <AuthInput label="Major / Specialization" placeholder="e.g. Computer Science" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-5">
            <AuthSelect 
              label="Academic Year" 
              options={[
                { value: '1', label: 'Year 1' },
                { value: '2', label: 'Year 2' },
                { value: '3', label: 'Year 3' },
                { value: '4', label: 'Year 4' },
                { value: '5', label: 'Year 5+' },
              ]} 
              className="flex-1"
            />
            <AuthSelect 
              label="Country" 
              options={[
                { value: 'saudi_arabia', label: 'Saudi Arabia 🇸🇦' },
                { value: 'egypt', label: 'Egypt 🇪🇬' },
                { value: 'uae', label: 'UAE 🇦🇪' },
              ]} 
              className="flex-1"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-end">
            <AuthSelect 
              label="Phone Number" 
              options={[
                { value: '+966', label: '+966' },
                { value: '+20', label: '+20' },
                { value: '+971', label: '+971' },
              ]} 
              className="w-full md:w-1/3"
            />
            <AuthInput label="" placeholder="50 123 4567" className="w-full md:w-2/3" />
          </div>

          <AuthInput label="Email Address" type="email" placeholder="student@university.edu" />
          
          <div className="flex flex-col md:flex-row gap-5">
            <AuthInput label="Password" type="password" placeholder="••••••••" isPassword />
            <AuthInput label="Confirm Password" type="password" placeholder="••••••••" isPassword />
          </div>

          {/* Drag and drop zone */}
          <div className="mt-2 text-center rounded-xl border border-dashed border-[#475569] bg-[#2e3b4e]/50 py-8 px-4 flex flex-col items-center justify-center relative group overflow-hidden">
            <div className="w-12 h-12 bg-[#3b4759] rounded-full flex items-center justify-center text-[#55B5DE] mb-4">
              <ArrowUp size={24} />
            </div>
            <h4 className="text-white font-semibold text-sm mb-1">Drag & Drop your university ID here</h4>
            <p className="text-gray-400 text-xs mb-4">SUPPORTED: PDF, DOC, PPT, IMAGES, ZIP</p>
            <button type="button" className="bg-[#55B5DE] hover:bg-[#4eaade] text-white text-xs font-bold py-2 px-6 rounded-lg transition-colors">
              Select File
            </button>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4 bg-white border-gray-300 rounded focus:ring-brand-primary" />
            </div>
            <p className="text-xs text-gray-300">
              By creating an account, you agree to the JAR Academy{' '}
              <a href="#" className="text-[#55B5DE] hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-[#55B5DE] hover:underline">Privacy Policy</a>
              .
            </p>
          </div>

          <AuthButton type="submit" className="mt-2">
            Create Account
          </AuthButton>

          <p className="text-center text-sm text-gray-300 mt-2">
            Already have an account?{' '}
            <Link href="/auth/student/login" className="text-[#55B5DE] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </AuthFormCard>
    </AuthIllustrationLayout>
  );
}
