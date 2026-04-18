"use client";

import Link from "next/link";

export default function HowItWorksHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content Area */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-8">
               <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">تعلم أذكى</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading text-brand-secondary leading-[1.1] mb-8">
              كيف تعمل <br />
              <span className="text-brand-primary">أكاديمية جار</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              طريقة بسيطة لفهم محاضراتك وإكمال واجباتك وسد الفجوة بين التدريس التقليدي والنجاح الأكاديمي الفردي.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/join"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-lg px-12 py-5 rounded-btn shadow-xl shadow-brand-primary/20 transition-all hover:translate-y-[-4px]"
              >
                ابدأ الآن
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto bg-white hover:bg-surface text-brand-secondary border border-border-subtle font-bold text-lg px-12 py-5 rounded-btn transition-all"
              >
                شاهد العرض
              </Link>
            </div>
          </div>

          {/* Visual Content (Laptop/Dashboard) */}
          <div className="flex-1 relative w-full lg:max-w-2xl">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-zinc-50 group">
                <div className="aspect-[16/10] flex items-center justify-center p-8">
                   <div className="w-full h-full bg-white rounded-2xl shadow-inner border border-zinc-100 p-6 overflow-hidden relative">
                      {/* Fake UI Snippet */}
                      <div className="flex items-center justify-between mb-8">
                         <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400" />
                           <div className="w-3 h-3 rounded-full bg-yellow-400" />
                           <div className="w-3 h-3 rounded-full bg-green-400" />
                         </div>
                         <div className="h-4 w-32 bg-zinc-100 rounded-full" />
                      </div>
                      <div className="space-y-4">
                         <div className="h-8 w-3/4 bg-zinc-50 rounded-lg" />
                         <div className="grid grid-cols-3 gap-4">
                            <div className="h-32 bg-brand-primary/5 rounded-xl border border-brand-primary/10" />
                            <div className="h-32 bg-zinc-50 rounded-xl" />
                            <div className="h-32 bg-zinc-50 rounded-xl" />
                         </div>
                         <div className="h-20 w-full bg-zinc-50 rounded-xl" />
                      </div>
                      
                      {/* Floating Indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <div className="w-20 h-20 bg-brand-primary/80 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                            <svg className="w-8 h-8 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 11-5-11-5z" /></svg>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Decorative labels */}
             <div className="absolute -bottom-6 -right-6 bg-brand-secondary text-white p-6 rounded-card shadow-2xl border border-white/10 hidden sm:block animate-float">
                <div className="text-xs font-bold mb-1 opacity-60">الحالة حالياً</div>
                <div className="text-lg font-bold">منصة تعليمية ذكية</div>
             </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
