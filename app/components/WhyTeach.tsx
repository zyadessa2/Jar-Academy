"use client";

export default function WhyTeach() {
  const benefits = [
    {
      title: "مرونة كاملة في التدريس",
      description: "اشرح المواضيع في أي وقت تحبه عبر جلسات مباشرة أو مسجلة. صمم جدولك الخاص بما يتناسب مع روتينك اليومي.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "حوّل معرفتك إلى أرباح",
      description: "احصل على مقابل مادي مجزي مقابل مساعدة الطلاب في فهم موادهم. نقدم معدلات تنافسية وعمليات دفع سريعة ومنتظمة.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "وصول لطلاب عالميين",
      description: "ساعد طلاباً من مختلف الجامعات والتخصصات حول العالم وأنت في منزلك. وسّع أثرك التعليمي خارج حدود المكان.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h4.5M16 21.393A9 9 0 1121.393 16" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            لماذا تدرّس في <span className="text-brand-primary">أكاديمية جار</span>؟
          </h2>
          <p className="text-lg text-text-muted leading-relaxed font-medium">
            انضم إلى آلاف المعلمين الذين يصنعون الفرق ويطورون مسيرتهم المهنية كل يوم.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-card border border-border-subtle shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all group text-right"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
