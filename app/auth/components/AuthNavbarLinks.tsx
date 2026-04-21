'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AuthNavbarLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/auth/student/register', label: 'Students Register' },
    { href: '/auth/student/login', label: 'Students Login' },
    { href: '/auth/instructor/register', label: 'Instructors Register' },
    { href: '/auth/instructor/login', label: 'Instructors Login' },
  ];

  return (
    <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-gray-400">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors py-2 relative ${
              isActive ? 'text-brand-primary font-semibold' : 'hover:text-gray-900'
            }`}
          >
            {link.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary rounded-t-sm" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
