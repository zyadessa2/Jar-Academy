"use client";

import Image from "next/image";

export default function PlatformExperience() {
  const features = [
    {
      title: "مطابقة المدرسين بالذكاء الاصطناعي",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "نقل ملفات مشفر وآمن",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "إشعارات التقدم اللحظية",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Visual Content (Dashboard Snippets) */}
          <div className="flex-1 relative w-full lg:max-w-2xl order-2 lg:order-1">
             <div className="relative z-10 p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 shadow-xl overflow-hidden">
                <div className="space-y-6">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-between animate-float">
                      <div className="flex items-center gap-4 text-right">
                         <div className="w-10 h-10 bg-success/10 text-success rounded-lg flex items-center justify-center font-bold">✓</div>
                         <div>
                            <div className="text-sm font-bold text-brand-secondary">تم تسليم الحل</div>
                            <div className="text-xs text-text-muted">تم الانتهاء من مراجعة الفيزياء</div>
                         </div>
                      </div>
                      <div className="h-2 w-16 bg-zinc-50 rounded" />
                   </div>
                   
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-4 animate-float-delayed">
                      <div className="flex items-center justify-between">
                         <div className="h-4 w-32 bg-zinc-50 rounded" />
                         <div className="w-8 h-8 bg-brand-primary/10 rounded-full" />
                      </div>
                      <div className="h-2 w-full bg-zinc-50 rounded" />
                      <div className="h-2 w-3/4 bg-zinc-50 rounded" />
                   </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-brand-primary opacity-5 rounded-full blur-3xl" />
             </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-8 leading-tight">
              تجربة منصة <span className="text-brand-primary">سلسة</span>
            </h2>
            <p className="text-lg text-text-muted mb-10 leading-relaxed font-medium">
              تم تصميم واجهتنا لتعطيك السرعة والوضوح. من اللحظة التي ترفع فيها ملفك وحتى تستلم شرحك، كل خطوة مدروسة لتكون بأعلى كفاءة.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center lg:justify-start justify-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="font-bold text-brand-secondary text-lg">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
