import Navbar from "../components/Navbar";
import InstructorsHero from "../components/InstructorsHero";
import WhyTeach from "../components/WhyTeach";
import InstructorProcess from "../components/InstructorProcess";
import DashboardPreview from "../components/DashboardPreview";
import Link from "next/link";

export default function InstructorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <InstructorsHero />

        {/* Benefits Section */}
        <WhyTeach />

        {/* Process Section */}
        <InstructorProcess />

        {/* Dashboard Preview Section */}
        <DashboardPreview />

        {/* Final CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="relative bg-[#6DC4E8] rounded-[32px] overflow-hidden p-12 md:p-24 text-center">
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black font-heading text-brand-secondary leading-tight mb-8">
                  ابدأ <span className="text-brand-secondary">التدريس</span> اليوم
                </h2>
                
                <p className="text-lg md:text-xl text-brand-secondary/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  انضم إلى مجتمع من المدرسين الخبراء وابدأ في ترك أثر حقيقي في رحلة الطلاب الأكاديمية مع تنمية ملفك المهني.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/become-instructor"
                    className="w-full sm:w-auto bg-brand-secondary hover:bg-zinc-800 text-white font-bold text-xl px-12 py-5 rounded-btn shadow-xl transition-all hover:translate-y-[-4px]"
                  >
                    انضم كخبير معنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
