"use client";

export default function FAQSection() {
  const faqs = [
    {
      question: "كيف يمكنني أن أصبح محاضراً؟",
      answer: "يمكنك التقديم من خلال صفحة المحاضرين، قم برفع سيرتك الذاتية وخلفيتك الأكاديمية وسنقوم بمراجعة طلبك والرد عليك في أقرب وقت."
    },
    {
      question: "كيف يمكنني رفع واجبي الدراسي؟",
      answer: "انتقل إلى لوحة التحكم الخاصة بك، اختر المادة الدراسية ثم اضغط على زر 'ارفع الواجب' تحت القسم المخصص لذلك."
    },
    {
      question: "كيف تعمل جلسات الشرح التفاعلية؟",
      answer: "تتم جلسات الشرح عبر الفيديو المباشر في فصول دراسية افتراضية متطورة تتيح لك التفاعل مع المدرس واستخدام السبورات الذكية."
    }
  ];

  return (
    <section className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-brand-secondary mb-6 leading-tight">
            الأسئلة <span className="text-brand-primary">الشائعة</span>
          </h2>
          <p className="text-lg text-text-muted font-medium">إجابات سريعة على الأسئلة الأكثر تداولاً بين طلابنا ومحاضرينا.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-10 rounded-card border border-border-subtle shadow-sm hover:shadow-xl transition-all text-right group">
               <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold text-brand-secondary mb-4">{faq.question}</h3>
               <p className="text-text-muted text-sm leading-relaxed font-medium">
                  {faq.answer}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
