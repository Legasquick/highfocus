/**
 * Design 5: "Immersive Gradient"
 * Full-screen gradient background that blends all three flavor colors.
 * One hero can in the center, other two flanking.
 * Text overlaid with glassmorphism bar at bottom.
 * Maximally visual and immersive.
 */
export default function Hero5() {
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Multi-stop gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6e3] via-[#f8ece0] to-[#f0e8d0]" />

      {/* Colored blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-pear/20 blur-[130px] animate-pulse-soft" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-caramel/20 blur-[130px] animate-pulse-soft delay-700" />
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-brownie/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft delay-300" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Logo top */}
      <div className="relative z-10 mb-6 animate-fadeUp">
        <img src="/photos/logo.svg" alt="High Focus × Эконива" className="h-9 md:h-11" />
      </div>

      {/* Three product cans — hero composition */}
      <div className="relative z-10 flex items-end justify-center mb-6">
        {/* Left can — pear */}
        <div className="animate-slideLeft delay-400 -mr-3 md:-mr-4">
          <img
            src="/photos/грушапармезан.png"
            alt="Груша Пармезан"
            className="h-40 sm:h-48 md:h-60 lg:h-72 drop-shadow-[0_20px_40px_rgba(174,180,46,0.25)] hover:-translate-y-2 transition-transform duration-500 -rotate-6"
          />
        </div>

        {/* Center can — brownie (hero) */}
        <div className="animate-scaleIn delay-200 relative z-10">
          <img
            src="/photos/брауни.webp"
            alt="Брауни"
            className="h-52 sm:h-60 md:h-72 lg:h-[22rem] drop-shadow-[0_25px_50px_rgba(187,98,98,0.3)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>

        {/* Right can — caramel */}
        <div className="animate-slideRight delay-400 -ml-3 md:-ml-4">
          <img
            src="/photos/солёнаякарамель.png"
            alt="Соленая Карамель"
            className="h-40 sm:h-48 md:h-60 lg:h-72 drop-shadow-[0_20px_40px_rgba(242,136,41,0.25)] hover:-translate-y-2 transition-transform duration-500 rotate-6"
          />
        </div>
      </div>

      {/* Focus frame around the can group */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[80vw] max-w-[700px] h-[60vh] max-h-[500px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 700 500"
        fill="none"
      >
        <path d="M 0,60 L 0,0 L 60,0" stroke="#000" strokeWidth="2" />
        <path d="M 640,0 L 700,0 L 700,60" stroke="#000" strokeWidth="2" />
        <path d="M 700,440 L 700,500 L 640,500" stroke="#000" strokeWidth="2" />
        <path d="M 60,500 L 0,500 L 0,440" stroke="#000" strokeWidth="2" />
      </svg>

      {/* Bottom glassmorphism bar */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 animate-fadeUp delay-800">
        <div className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-lg px-8 py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[0.92]">
            Методология Бюджетирования
          </h1>
          <div className="w-10 h-[2px] bg-accent mx-auto my-3 origin-center animate-drawLine delay-1000" />
          <p className="text-sm text-neutral-500 font-light">
            Напиток для тех, кто работает головой — стратегия запуска бренда
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-[10px] font-medium uppercase tracking-widest text-pear bg-pear/10 px-3 py-1 rounded-full">Концентрация</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-caramel bg-caramel/10 px-3 py-1 rounded-full">Энергия</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-brownie bg-brownie/10 px-3 py-1 rounded-full">Продуктивность</span>
          </div>
        </div>
      </div>
    </section>
  );
}
