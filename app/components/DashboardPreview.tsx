"use client";

export default function DashboardPreview() {
  const requests = [
    { name: "Physics Assignment 3.pdf", type: "Physics", time: "العاشرة صباحاً" },
    { name: "Organic Chemistry Quiz Prep", type: "Chemistry", time: "التاسعة صباحاً" },
    { name: "Economics Essay Review", type: "Economics", time: "الثامنة صباحاً" },
  ];

  return (
    <section className="py-24 bg-[#0E1726]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl md:text-5xl font-black font-heading text-white mb-8 leading-tight">
              أدر جلساتك <br />
              <span className="text-brand-primary">بكل سهولة</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-medium">
              توفر لك لوحة التحكم المتقدمة كل الأدوات التي تحتاجها لتتبع طلبات الطلاب، وإدارة الملفات المرفقة، وتنظيم جدولك التدريسي بكفاءة عالية.
            </p>
            
            <ul className="space-y-6">
              {[
                "إشعارات فورية للطلبات الجديدة.",
                "مستعرض ملفات PDF مدمج للمراجعة.",
                "تقارير مفصلة للأرباح والمستحقات."
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-start gap-4 text-white font-medium">
                  <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Visual Replica */}
          <div className="flex-1 w-full max-w-2xl">
             <div className="bg-[#1A2332] rounded-[32px] border border-white/5 shadow-2xl overflow-hidden p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <span className="text-white font-bold">الطلبات الأخيرة</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">3 طلبات جديدة</span>
                </div>
                
                <div className="space-y-4">
                  {requests.map((req, i) => (
                    <div key={i} className="bg-[#252D3D] p-5 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-[#2D3649] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white mb-1">{req.name}</div>
                          <div className="text-[10px] text-zinc-500 uppercase font-bold">{req.type} • {req.time}</div>
                        </div>
                      </div>
                      <button className="bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all">
                        عرض
                      </button>
                    </div>
                  ))}
                </div>

                {/* Decorative Stats footer */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-around">
                   <div className="text-center">
                     <div className="text-zinc-500 text-[10px] font-bold uppercase mb-1">جلسات منتهية</div>
                     <div className="text-white font-bold">124</div>
                   </div>
                   <div className="w-px h-8 bg-white/5" />
                   <div className="text-center">
                     <div className="text-zinc-500 text-[10px] font-bold uppercase mb-1">التقييم</div>
                     <div className="text-brand-primary font-bold">4.9/5</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
