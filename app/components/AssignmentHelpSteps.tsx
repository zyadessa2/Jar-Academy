"use client";

export default function AssignmentHelpSteps() {
  const steps = [
    {
      title: "ارفع الملفات",
      description: "ارفع ملفات الأسايمنت بأمان تام عبر بوابتنا الرقمية المشفرة لضمان خصوصيتك.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      title: "صف الاحتياجات",
      description: "أضف التفاصيل الدقيقة وحدد متطلباتك بوضوح لضمان أفضل نتيجة ممكنة.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "مراجعة الخبراء",
      description: "يقوم الدكاترة والمعيدون المعتمدون بمراجعة طلبك وقبوله بناءً على تخصصهم.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "استلام الحل",
      description: "احصل على الحلول والملفات المشروحة مباشرة في حسابك بجودة عالية.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#0E1111] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">الأسايمنتات</span>
          <h2 className="text-3xl md:text-5xl font-black font-heading mb-6">
            احصل على مساعدة في <span className="text-brand-primary">واجباتك</span>
          </h2>
          <p className="text-zinc-400 font-medium">حلول سريعة وموثوقة مراجعة من قبل الخبراء لضمان نجاحك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center lg:items-end text-center lg:text-right group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl">
                {step.icon}
              </div>
              <div className="text-zinc-700 text-6xl font-black mb-4 select-none opacity-20">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
