"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-[#0E1726] rounded-[48px] overflow-hidden p-12 md:p-24 text-center shadow-2xl">
          {/* Decorative background effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/10 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-tight mb-8">
              جاهز لتغيير تجربتك <br className="hidden md:block" />
              <span className="text-brand-primary">التعليمية؟</span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              انضم إلى أكاديمية <span className="text-white font-bold tracking-wider">JAR</span> اليوم واحصل على مساعدة الخبراء في أي موضوع. 
              ابدأ رحلتك نحو التميز الأكاديمي الآن.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/join"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl px-12 py-5 rounded-btn shadow-xl shadow-brand-primary/20 transition-all hover:translate-y-[-4px] active:translate-y-[0px]"
              >
                ابدأ الآن
              </Link>
              
              <Link
                href="/advisor"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-bold text-xl px-12 py-5 rounded-btn transition-all backdrop-blur-sm"
              >
                تحدث مع مستشار
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
