"use client";

import Link from "next/link";

export default function InstructorsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-8">
               <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">انضم إلى شبكتنا المتميزة</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading text-brand-secondary leading-[1.1] mb-8">
              حوّل خبرتك <br />
              <span className="text-brand-primary italic">إلى أثر ملموس.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              انضم إلى أكاديمية JAR كخبير أو معيد وقدم المساعدة للطلاب في موادهم الجامعية وأسايمنتاتهم والمواضيع الصعبة مع توفير دعم مباشر ولحظي.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/become-instructor"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-lg px-12 py-5 rounded-btn shadow-xl shadow-brand-primary/20 transition-all hover:translate-y-[-4px]"
              >
                انضم كخبير معنا
              </Link>
            </div>
          </div>

          {/* Visual Content (Replica of Figma) */}
          <div className="flex-1 relative w-full lg:max-w-2xl">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                <div className="aspect-video bg-zinc-100 flex items-center justify-center overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Instructors working" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-brand-secondary/10" />
                </div>
                
                {/* Floating Card: Live Session Started */}
                <div className="absolute bottom-10 left-10 z-20 bg-white p-4 rounded-xl shadow-2xl border border-zinc-100 animate-float">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                         <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                         </svg>
                      </div>
                      <div>
                         <div className="text-xs font-bold text-brand-secondary">بدأت جلسة مباشرة</div>
                         <div className="text-[10px] text-text-muted">مباشر الآن: شرح الكيمياء الحيوية</div>
                      </div>
                   </div>
                </div>

                {/* Floating Card: Assignment Uploaded */}
                <div className="absolute top-10 right-10 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-zinc-50 animate-float-delayed">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-success rounded-full animate-ping" />
                      <div className="text-[10px] font-bold text-brand-secondary tracking-tight">تم رفع واجب جديد</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
