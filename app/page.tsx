import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProcessSteps from "./components/ProcessSteps";
import CTASection from "./components/CTASection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Final CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Right: Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img src="/jar_logo_final.png" alt="Jar Academy" style={{ width: '242px', height: '103px', objectFit: 'contain' }} />
            </Link>

            {/* Center: Legal Links */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <Link href="/privacy" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">سياسة الخصوصية</Link>
              <Link href="/terms" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">شروط الخدمة</Link>
              <Link href="/cookies" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">سياسة ملفات الارتباط</Link>
              <Link href="/help" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">مركز المساعدة</Link>
            </div>

            {/* Left: Copyright */}
            <div className="text-sm font-medium text-text-muted">
              © 2026 أكاديمية جار. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
