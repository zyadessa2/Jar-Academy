"use client";

export default function SocialLinks() {
  const socials = [
    { name: "WhatsApp", handle: "@jaracademy", color: "hover:text-[#25D366]", icon: "📞" },
    { name: "Telegram", handle: "@jaracademy", color: "hover:text-[#0088cc]", icon: "✈️" },
    { name: "Instagram", handle: "@jaracademy", color: "hover:text-[#E4405F]", icon: "📸" },
    { name: "Facebook", handle: "@jaracademy", color: "hover:text-[#1877F2]", icon: "👥" },
    { name: "TikTok", handle: "@jaracademy", color: "hover:text-[#000000]", icon: "🎵" },
    { name: "Snapchat", handle: "@jaracademy", color: "hover:text-[#FFFC00]", icon: "👻" },
    { name: "LinkedIn", handle: "@jaracademy", color: "hover:text-[#0A66C2]", icon: "💼" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black font-heading text-brand-secondary mb-4 underline underline-offset-8 decoration-brand-primary decoration-4">تواصل معنا عبر منصاتنا</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border-subtle transition-all hover:bg-white hover:shadow-xl group ${social.color}`}
            >
              <div className="text-2xl grayscale group-hover:grayscale-0 transition-all">{social.icon}</div>
              <div className="text-right">
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">{social.name}</div>
                <div className="text-sm font-bold text-brand-secondary group-hover:text-inherit transition-colors">{social.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
