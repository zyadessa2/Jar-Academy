"use client";

export default function PathToClarity() {
  const steps = [
    {
      title: "ارفع أي ملف",
      description: "ارفع سلايداتك، الأسايمنتات الصعبة، أو حتى موضوعاً محدداً تواجه فيه صعوبة في فهمه.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: "اختر المحاضر",
      description: "يراجع خبراؤنا المعتمدون طلبك ويقومون بمطابقته مع احتياجاتك التعليمية المساعدة لك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "احصل على الشرح",
      description: "استلم جلسة مباشرة تفاعلية أو شرحاً مسجلاً عالي الجودة مصمماً خصيصاً ليناسب مستواك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">مسارنا</span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            طريق <span className="text-brand-primary">الوضوح</span>
          </h2>
        </div>

        {/* Path Grid */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
              {/* Number Circle */}
              <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center text-3xl font-black shadow-xl shrink-0 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-white p-10 rounded-[32px] border border-border-subtle shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-right group-hover:border-brand-primary transition-all">
                <div className="w-16 h-16 bg-brand-primary/5 text-brand-primary rounded-2xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-brand-secondary mb-3">{step.title}</h3>
                   <p className="text-text-muted leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
