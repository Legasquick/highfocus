/**
 * Design 2: "Noir Split"
 * Dark left panel with text, product cans on the right with colored glow.
 * Dramatic, cinematic, premium.
 */
export default function Hero2() {
  return (
    <section className="w-full h-screen bg-[#0a0a0a] flex relative overflow-hidden">
      {/* Left panel — text content */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <img
          src="/photos/logo.svg"
          alt="High Focus × Эконива"
          className="h-8 md:h-10 mb-8 animate-fadeUp [filter:brightness(0)_invert(1)]"
        />

        <div className="w-12 h-[2px] bg-accent origin-left animate-drawLine delay-200 mb-8" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] text-white animate-slideLeft delay-300">
          Методо-<br />логия<br />
          <span className="text-accent">Бюджети-</span><br />
          рования
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/40 max-w-sm leading-relaxed font-light animate-slideLeft delay-500">
          Инновационный молочный напиток для концентрации внимания и повышения энергии.
        </p>

        <div className="flex items-center gap-4 mt-8 animate-slideLeft delay-700">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">High Focus</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-xs font-medium tracking-widest uppercase text-ekoniva">Эконива</span>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/40 to-transparent animate-drawLine delay-1000 origin-left" />
      </div>

      {/* Right panel — cans with glow */}
      <div className="hidden md:flex flex-1 items-center justify-center relative">
        {/* Color glows */}
        <div className="absolute w-64 h-64 rounded-full bg-pear/15 blur-[80px] -top-10 left-10 animate-pulse-soft" />
        <div className="absolute w-72 h-72 rounded-full bg-caramel/15 blur-[80px] bottom-10 right-10 animate-pulse-soft delay-1000" />
        <div className="absolute w-48 h-48 rounded-full bg-brownie/10 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft delay-500" />

        {/* Focus frame brackets */}
        <svg className="absolute w-[70%] h-[60%] opacity-[0.08]" viewBox="0 0 400 300" fill="none">
          <path d="M 0,50 L 0,0 L 50,0" stroke="#d5d51c" strokeWidth="2" />
          <path d="M 350,0 L 400,0 L 400,50" stroke="#d5d51c" strokeWidth="2" />
          <path d="M 400,250 L 400,300 L 350,300" stroke="#d5d51c" strokeWidth="2" />
          <path d="M 50,300 L 0,300 L 0,250" stroke="#d5d51c" strokeWidth="2" />
        </svg>

        {/* Cans */}
        <div className="relative flex items-end gap-3 lg:gap-6">
          <img
            src="/photos/грушапармезан.png"
            alt="Груша Пармезан"
            className="h-52 lg:h-72 drop-shadow-[0_0_30px_rgba(174,180,46,0.3)] animate-scaleIn delay-500 animate-floatSlow"
            style={{ animationDelay: '0s' }}
          />
          <img
            src="/photos/брауни.webp"
            alt="Брауни"
            className="h-60 lg:h-80 drop-shadow-[0_0_30px_rgba(187,98,98,0.3)] animate-scaleIn delay-300 animate-floatSlow"
            style={{ animationDelay: '1s' }}
          />
          <img
            src="/photos/солёнаякарамель.png"
            alt="Соленая Карамель"
            className="h-52 lg:h-72 drop-shadow-[0_0_30px_rgba(242,136,41,0.3)] animate-scaleIn delay-700 animate-floatSlow"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Mobile: single can visible */}
      <div className="md:hidden absolute right-4 bottom-24 animate-scaleIn delay-600">
        <img
          src="/photos/брауни.webp"
          alt="Брауни"
          className="h-44 drop-shadow-[0_0_20px_rgba(187,98,98,0.3)] animate-floatSlow opacity-40"
        />
      </div>
    </section>
  );
}
