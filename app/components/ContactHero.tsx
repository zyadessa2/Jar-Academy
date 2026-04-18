"use client";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-8">
               <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">مركز الدعم</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading text-brand-secondary leading-[1.1] mb-8">
              تواصل <span className="text-brand-primary italic">معنا.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              لديك سؤال عن أكاديمية JAR؟ فريقنا من الخبراء والمعلمين هنا لمساعدتك في النجاح والتميز والوصول إلى أهدافك الأكاديمية.
            </p>
            
            {/* Social Proof Avatars */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
               <div className="flex -space-x-3 space-x-reverse">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                       <div className="w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400" />
                    </div>
                  ))}
               </div>
               <div className="text-right">
                  <div className="text-sm font-bold text-brand-secondary">فريق الدعم النشط</div>
                  <div className="text-xs text-success font-medium">متاحون الآن لمساعدتك</div>
               </div>
            </div>
          </div>

           {/* Visual Content (Replica of Figma) */}
          <div className="flex-1 relative w-full lg:max-w-2xl">
             {/* Image Container - overflow-hidden stays here for rounded corners */}
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                <div className="aspect-[4/3] bg-zinc-100 flex items-center justify-center overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern Office" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-brand-secondary/5" />
                </div>
             </div>

             {/* Floating Chat Bubble - OUTSIDE overflow-hidden container */}
             <div className="absolute bottom-4 -left-4 z-20 bg-brand-primary text-white p-5 rounded-3xl rounded-br-none shadow-2xl animate-float">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                   <span className="text-xs font-bold uppercase whitespace-nowrap">دردشة مباشرة</span>
                </div>
                <p className="text-sm font-medium leading-snug whitespace-nowrap">متوسط وقت الرد: 5 دقائق</p>
             </div>
             
             {/* Supporting decoration */}
             <div className="absolute -bottom-10 right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
