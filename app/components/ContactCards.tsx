"use client";

export default function ContactCards() {
  const cards = [
    {
      title: "اتصل بنا",
      value: "+966 5XXXXXXXX",
      label: "مكالمة هاتفية",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "التوفر",
      value: "دعم فني 24/7",
      label: "متاحون دائماً",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#0E1726] p-10 rounded-[32px] flex flex-col items-center gap-6 text-center transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
              
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl">
                {card.icon}
              </div>
              
              <div className="relative z-10">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">{card.label}</div>
                <h3 className="text-white text-3xl font-black mb-2">{card.value}</h3>
                <div className="text-brand-primary font-bold text-sm tracking-wide">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
