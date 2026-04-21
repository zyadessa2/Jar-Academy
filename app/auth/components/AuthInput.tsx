'use client';

import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword?: boolean;
}

export function AuthInput({ label, isPassword, className = '', ...props }: AuthInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-semibold text-white/90">
        {label}
      </label>
      <div className="relative w-full text-[#0E1111] overflow-hidden text-sm">
        <input
          type={isPassword && !showPassword ? 'password' : 'text'}
          className="w-full h-[48px] bg-white rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-medium placeholder:text-gray-400 placeholder:font-normal"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export function AuthSelect({ label, options, className = '' }: { label: string; options: {value: string; label: string}[], className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-semibold text-white/90">
        {label}
      </label>
      <div className="relative w-full text-[#0E1111] text-sm">
        <select className="appearance-none w-full h-[48px] bg-white rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-medium cursor-pointer">
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {/* Simple down arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function AuthButton({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  return (
    <button
      className={`w-full h-[48px] rounded-xl font-bold text-sm transition-all shadow-md active:scale-[0.98] ${
        variant === 'primary' 
          ? 'bg-[#55B5DE] hover:bg-[#4eaade] text-white shadow-[#55B5DE]/30 hover:shadow-[#55B5DE]/50' // Light blue as in Figma
          : 'bg-[#3A4B61] hover:bg-[#324154] text-white shadow-none'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
