import React from 'react';

interface AuthIllustrationLayoutProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  badgeIcon?: React.ReactNode;
  badgeTitle: string;
  badgeDesc: string;
  illustrationType: 'student-register' | 'student-login' | 'instructor-register' | 'instructor-login';
  children: React.ReactNode;
}

export function AuthIllustrationLayout({
  title,
  subtitle,
  badgeIcon,
  badgeTitle,
  badgeDesc,
  illustrationType,
  children
}: AuthIllustrationLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-full items-center lg:items-start pt-4">
      {/* Left side: Illustration */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          {title}
        </h1>
        <p className="text-gray-500 text-lg mb-12">
          {subtitle}
        </p>

        <div className="relative w-full aspect-square max-w-[480px] mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Placeholder for actual Figma Illustration */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            [Illustration Placeholder: {illustrationType}]
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-start gap-4 max-w-[80%] border border-white/50">
            {badgeIcon && (
              <div className="w-10 h-10 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center flex-shrink-0">
                {badgeIcon}
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{badgeTitle}</h4>
              <p className="text-gray-500 text-xs font-medium mt-1 leading-snug">{badgeDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Form Details */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        {children}
      </div>
    </div>
  );
}
