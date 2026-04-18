"use client";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "ارفع المحتوى",
      description: "ببساطة ارفع ملاحظاتك، واجباتك، أو أي مواضيع معقدة على منصتنا الآمنة. نحن ندعم جميع الصيغ الملفات الكبرى.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "مراجعة الخبراء",
      description: "تقوم شبكتنا من أفضل المدرسين بمراجعة طلباتك المحددة لإعداد شرح مخصص وعالي التأثير يناسب أسلوب تعلمك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "إتقان فوري",
      description: "احصل على شرحك من خلال فيديو مسجل عالي الجودة أو جلسة مباشرة فردية مع سبورات تفاعلية.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block underline underline-offset-8 decoration-2">العملية</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            ثلاث خطوات بسيطة للاحتراف
          </h2>
          <p className="text-lg text-text-muted leading-relaxed font-medium">
            عمليتنا المبسطة تربطك بالمعرفة المتخصصة فوراً من خلال منصتنا الرقمية المتقدمة.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-10 rounded-card border border-zinc-50 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all group overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-4 left-8 text-[120px] font-black text-zinc-100/50 leading-none group-hover:text-brand-primary/10 transition-colors">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
