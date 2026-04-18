"use client";

export default function MaterialSteps() {
  const steps = [
    {
      title: "تصفح المنصة",
      description: "انتقل إلى لوحة التحكم الخاصة بنا لاستكشاف كافة الخيارات المتاحة لك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
    },
    {
      title: "اختر خطتك",
      description: "اختر من بين خططنا المرنة (ساعية، شهرية، أو فصلية) التي تناسب احتياجاتك وميزانيتك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "ارفع المحتوى",
      description: "ارفع سلايدات المادة، أسايمنتات الـ PDF، أو أي تجميعات تحتاج شرحها.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: "تواصل مع الخبير",
      description: "تواصل فوراً مع دكتور أو معيد خبير وابدأ جلسة التعلم المخصصة لك.",
      active: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            احصل على شرح <span className="text-brand-primary">لموادك التعليمية</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-10 rounded-card border transition-all text-right group flex flex-col items-end ${
                step.active 
                ? "bg-brand-primary text-white border-brand-primary shadow-2xl shadow-brand-primary/20 scale-105 z-10" 
                : "bg-white text-brand-secondary border-border-subtle hover:border-brand-primary"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                step.active ? "bg-white/20 text-white" : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
              } transition-all`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className={`text-sm leading-relaxed font-medium ${step.active ? "text-white/80" : "text-text-muted"}`}>
                {step.description}
              </p>
              
              {/* Step indicator */}
              <div className={`mt-8 text-xs font-bold uppercase tracking-widest ${step.active ? "text-white/60" : "text-zinc-300"}`}>
                الخطوة {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
