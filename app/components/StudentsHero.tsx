"use client";

import Link from "next/link";

export default function StudentsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading text-brand-secondary leading-[1.1] mb-8">
              تعلم <span className="text-brand-primary">بذكاء..</span> <br />
              <span className="text-brand-primary italic">ادرس أسرع.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              ارفع سلايداتك، أسايمنتاتك، أو أي منهج جامعي واحصل على شرح وافٍ من خبراء متخصصين. تعلم مخصص مصمم خصيصاً لتفوقك.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/join"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-lg px-12 py-5 rounded-btn shadow-xl shadow-brand-primary/20 transition-all hover:translate-y-[-4px] flex items-center justify-center gap-2"
              >
                ابدأ الآن
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto bg-white hover:bg-surface text-brand-secondary border border-border-subtle font-bold text-lg px-12 py-5 rounded-btn transition-all"
              >
                شاهد العرض
              </Link>
            </div>
          </div>

          {/* Visual Content (Figma Replica) */}
          <div className="flex-1 relative w-full lg:max-w-2xl">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-[#A5B99F] p-12 group transition-transform duration-500 hover:rotate-1">
                <div className="aspect-[4/3] relative flex items-center justify-center bg-white border-8 border-white rounded-2xl shadow-xl overflow-hidden">
                   {/* Monitor UI Placeholder */}
                   <div className="w-full h-full bg-zinc-50 flex flex-col items-center justify-center p-6">
                      <div className="w-2/3 h-3/4 bg-white shadow-sm rounded-lg p-6 flex flex-col items-center gap-4">
                         <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" /></svg>
                         </div>
                         <div className="h-2 w-full bg-zinc-100 rounded" />
                         <div className="h-2 w-3/4 bg-zinc-100 rounded" />
                         <div className="h-2 w-1/2 bg-zinc-100 rounded" />
                      </div>
                   </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute top-10 right-10 z-20 bg-white p-3 rounded-lg shadow-2xl border border-zinc-100 flex items-center gap-3 animate-float">
                   <div className="w-6 h-6 bg-success/10 rounded-md flex items-center justify-center text-success">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <div className="text-[10px] font-bold text-brand-secondary">Explanation Ready</div>
                </div>

                <div className="absolute bottom-10 left-10 z-20 bg-white p-3 rounded-lg shadow-2xl border border-zinc-100 flex items-center gap-3 animate-float-delayed">
                   <div className="w-6 h-6 bg-brand-primary/10 rounded-md flex items-center justify-center text-brand-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                   </div>
                   <div className="text-[10px] font-bold text-brand-secondary">Slide_Deck.pdf</div>
                </div>
             </div>
             
             {/* Background Glow */}
             <div className="absolute -inset-10 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
