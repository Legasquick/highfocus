/**
 * Design 1: "Showcase"
 * Clean white hero with three product cans floating in a row.
 * Logo centered above, typography below. Elegant product-first.
 */
export default function Hero1() {
  return (
    <section className="w-full h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Logo */}
      <div className="animate-fadeUp relative z-10 mb-6">
        <img src="/photos/logo.svg" alt="High Focus × Эконива" className="h-10 md:h-12" />
      </div>

      {/* Accent line */}
      <div className="w-16 h-[2px] bg-accent origin-left animate-drawLine delay-300 mb-10" />

      {/* Three cans */}
      <div className="relative z-10 flex items-end justify-center gap-4 sm:gap-8 md:gap-14 mb-10">
        <div className="animate-fadeUp delay-400">
          <img
            src="/photos/грушапармезан.png"
            alt="Груша Пармезан"
            className="h-48 sm:h-56 md:h-72 lg:h-80 drop-shadow-2xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <p className="text-center mt-3 text-xs font-medium tracking-widest uppercase text-pear opacity-80">Груша</p>
        </div>
        <div className="animate-fadeUp delay-200">
          <img
            src="/photos/брауни.webp"
            alt="Брауни"
            className="h-56 sm:h-64 md:h-80 lg:h-[22rem] drop-shadow-2xl animate-float"
            style={{ animationDelay: '0.8s' }}
          />
          <p className="text-center mt-3 text-xs font-medium tracking-widest uppercase text-brownie opacity-80">Брауни</p>
        </div>
        <div className="animate-fadeUp delay-600">
          <img
            src="/photos/солёнаякарамель.png"
            alt="Соленая Карамель"
            className="h-48 sm:h-56 md:h-72 lg:h-80 drop-shadow-2xl animate-float"
            style={{ animationDelay: '1.6s' }}
          />
          <p className="text-center mt-3 text-xs font-medium tracking-widest uppercase text-caramel opacity-80">Карамель</p>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.9] text-neutral-900 animate-fadeUp delay-500">
          Методология<br />Бюджетирования
        </h1>
        <p className="mt-4 text-sm md:text-base text-neutral-400 font-light tracking-wide animate-fadeUp delay-700">
          Напиток для тех, кто работает головой
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-fadeIn delay-1500">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">Scroll</span>
        <div className="w-px h-8 bg-neutral-300 origin-top animate-scrollPulse" />
      </div>
    </section>
  );
}
