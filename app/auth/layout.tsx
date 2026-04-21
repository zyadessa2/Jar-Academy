import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AuthNavbarLinks } from './components/AuthNavbarLinks';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white" dir="ltr" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
      {/* Auth Navbar */}
      <nav className="w-full h-20 px-8 flex items-center justify-between border-b border-gray-100">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/jar_logo_final.png"
              alt="JAR Academy Logo"
              width={140}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>
        
        {/* Navigation Links - Center */}
        <AuthNavbarLinks />
        
        {/* Empty placeholder for flex alignment */}
        <div className="w-[140px] hidden md:block"></div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 flex flex-col">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
        
        <main className="flex-1 flex flex-col">{children}</main>
      </div>
      
      {/* Auth Footer */}
      <footer className="w-full py-6 mt-auto border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="flex items-center">
            <Image src="/jar_logo_final.png" alt="JAR Academy Logo" width={80} height={25} className="mr-3 object-contain grayscale opacity-60" />
          </div>
          <div className="flex gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-gray-700 transition-colors">Cookie Policy</Link>
            <Link href="/help-center" className="hover:text-gray-700 transition-colors">Help Center</Link>
          </div>
          <div>© 2026 JAR ACADEMY. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
