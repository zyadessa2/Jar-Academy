import Navbar from "../components/Navbar";
import HowItWorksHero from "../components/HowItWorksHero";
import MaterialSteps from "../components/MaterialSteps";
import AssignmentHelpSteps from "../components/AssignmentHelpSteps";
import PlatformExperience from "../components/PlatformExperience";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HowItWorksHero />

        {/* Material Steps Section */}
        <MaterialSteps />

        {/* Assignment Help Section (Dark) */}
        <AssignmentHelpSteps />

        {/* Platform Experience Section */}
        <PlatformExperience />

        {/* Final CTA Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <div className="relative bg-[#0E1726] rounded-[48px] overflow-hidden p-12 md:p-24 text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-tight mb-8">
                  ابدأ التعلم <span className="text-brand-primary">أذكى</span> اليوم
                </h2>
                
                <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  انضم إلى آلاف الطلاب الذين حسنوا درجاتهم وفهمهم الأكاديمي بمساعدة خبراء أكاديمية JAR.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/join"
                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl px-12 py-5 rounded-btn shadow-xl shadow-brand-primary/20 transition-all hover:translate-y-[-4px]"
                  >
                    ابدأ الآن مجاناً
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-bold text-xl px-12 py-5 rounded-btn transition-all backdrop-blur-sm"
                  >
                    تواصل مع المبيعات
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
