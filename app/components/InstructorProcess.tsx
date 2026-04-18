"use client";

export default function InstructorProcess() {
  const steps = [
    {
      title: "صمم ملفك الشخصي",
      description: "قم بإنشاء حسابك واستعراض مهاراتك وخلفيتك الأكاديمية لجذب الطلاب.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "استقبل طلبات الطلاب",
      description: "ستصلك إشعارات بالأسايمنتات والأسئلة اللي يحتاج الطلاب مساعدة في فهمها وحلها.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "اقبل الطلب واشرح",
      description: "اختر الطلبات التي تناسب خبرتك وقدم شرحاً وافياً عبر النظام الأساسي.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "اربح عن كل جلسة",
      description: "استلم أرباحك مباشرة في حسابك بعد كل جلسة ناجحة تقدمها.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            كيف يعمل الأمر <span className="text-brand-primary">(للخبراء والمعيدين)</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed font-medium">
            خطوات بسيطة تبدأ بها رحلتك معنا لتصبح خبيراً معتمداً في المنصة.
          </p>
        </div>

        {/* Horizontal Steps with Lines */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-brand-primary text-white text-2xl font-black rounded-full flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform cursor-default">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
