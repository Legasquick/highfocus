/**
 * Design 4: "Editorial Asymmetry"
 * Magazine-style layout with strong asymmetry.
 * Product can large on the right, structured text on the left.
 * Bold use of the focus bracket as an oversized background element.
 */
export default function Hero4() {
  return (
    <section className="w-full h-screen bg-white flex items-center relative overflow-hidden">
      {/* Giant focus bracket — background watermark */}
      <svg
        className="absolute right-[-5%] top-[10%] w-[50%] h-[80%] opacity-[0.03] animate-fadeIn delay-300"
        viewBox="0 0 400 600"
        fill="none"
      >
        <path d="M 0,80 L 0,0 L 80,0" stroke="#000" strokeWidth="3" />
        <path d="M 320,0 L 400,0 L 400,80" stroke="#000" strokeWidth="3" />
        <path d="M 400,520 L 400,600 L 320,600" stroke="#000" strokeWidth="3" />
        <path d="M 80,600 L 0,600 L 0,520" stroke="#000" strokeWidth="3" />
      </svg>

      {/* Left strip accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-ekoniva via-ekoniva-dark to-ekoniva animate-drawLine origin-top delay-200" style={{ animationName: 'drawLine', animationDuration: '1s' }} />

      <div className="flex w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 items-center h-full">
        {/* Left — Text */}
        <div className="flex-1 pr-8 lg:pr-16 relative z-10">
          {/* Logo */}
          <img
            src="/photos/logo.svg"
            alt="High Focus × Эконива"
            className="h-8 mb-10 animate-slideLeft"
          />

          {/* Thin rule */}
          <div className="w-16 h-px bg-neutral-900 animate-drawLine delay-200 origin-left mb-6" />

          {/* Eyebrow */}
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400 animate-slideLeft delay-300">
            Стратегия запуска бренда / 2025
          </span>

          {/* Main title */}
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.88] text-neutral-900 animate-slideLeft delay-400">
            Методология<br />Бюджети-<br />рования
          </h1>

          {/* Rule */}
          <div className="w-10 h-px bg-neutral-900 mt-6 mb-5 animate-drawLine delay-600 origin-left" />

          {/* Description */}
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-md animate-slideLeft delay-600">
            Напиток для тех, кто работает головой. Инновационный молочный напиток с L-теанином для концентрации внимания.
          </p>

          {/* Meta row */}
          <div className="flex gap-8 mt-8 animate-slideLeft delay-800">
            {[
              { label: 'Метод', value: 'Целей и задач' },
              { label: 'Аудитория', value: '18–30 лет' },
              { label: 'Рынок', value: 'Россия' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400 font-medium">{m.label}</span>
                <span className="text-xs font-bold text-neutral-800">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Features row */}
          <div className="flex items-center gap-3 mt-8 animate-slideLeft delay-1000">
            {['Концентрация', 'Энергия', 'Продуктивность'].map((f, i) => (
              <span
                key={f}
                className="text-[10px] font-medium uppercase tracking-widest text-accent-dim bg-accent/8 px-3 py-1.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Product can (hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          {/* Glow */}
          <div className="absolute w-60 h-60 rounded-full bg-brownie-light/60 blur-[80px] animate-pulse-soft" />

          <img
            src="/photos/брауни.webp"
            alt="High Focus Брауни"
            className="relative h-[70vh] max-h-[550px] drop-shadow-2xl animate-scaleIn delay-500 hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Small side cans */}
          <img
            src="/photos/грушапармезан.png"
            alt="Груша"
            className="absolute -left-4 bottom-[15%] h-32 opacity-30 animate-fadeUp delay-800"
          />
          <img
            src="/photos/солёнаякарамель.png"
            alt="Карамель"
            className="absolute -right-4 bottom-[20%] h-28 opacity-30 animate-fadeUp delay-1000"
          />
        </div>
      </div>
    </section>
  );
}
