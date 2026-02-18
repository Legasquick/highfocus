export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-8 py-20 md:py-24">
      {/* Logo */}
      <div className="animate-fadeUp relative z-10 mb-8">
        <img src={import.meta.env.BASE_URL + "photos/logo.svg"} alt="High Focus × Эконива" className="h-10 md:h-14" />
      </div>

      {/* Three cans */}
      <div className="relative z-10 flex items-end justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 mb-14 md:mb-18">
        <div className="animate-fadeUp delay-400">
          <img
            src={import.meta.env.BASE_URL + "photos/грушапармезан.png"}
            alt="Груша Пармезан"
            className="h-36 sm:h-48 md:h-64 lg:h-72 drop-shadow-2xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <p className="text-center mt-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-pear">Груша</p>
        </div>
        <div className="animate-fadeUp delay-200">
          <img
            src={import.meta.env.BASE_URL + "photos/брауни.webp"}
            alt="Брауни"
            className="h-44 sm:h-56 md:h-72 lg:h-80 drop-shadow-2xl animate-float"
            style={{ animationDelay: '0.8s' }}
          />
          <p className="text-center mt-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-brownie">Брауни</p>
        </div>
        <div className="animate-fadeUp delay-600">
          <img
            src={import.meta.env.BASE_URL + "photos/солёнаякарамель.png"}
            alt="Соленая Карамель"
            className="h-36 sm:h-48 md:h-64 lg:h-72 drop-shadow-2xl animate-float"
            style={{ animationDelay: '1.6s' }}
          />
          <p className="text-center mt-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-caramel">Карамель</p>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.88] text-neutral-900 animate-fadeUp delay-500">
          high focus
        </h1>
        <p className="mt-5 text-base md:text-lg text-neutral-400 font-light tracking-wide animate-fadeUp delay-700 max-w-md mx-auto">
          Инновативный молочный напиток с экстрактами L-теанина и гуараны для концентрации внимания и продуктивности.
        </p>
      </div>
    </section>
  );
}
