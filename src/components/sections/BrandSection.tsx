import { useInView } from '../../hooks/useInView';

export default function BrandSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          О бренде
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          High Focus
          <br />
          <span className="text-accent">История</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-16 ${anim('animate-fadeUp delay-200')}`}>
          Молодой бренд с амбициозной миссией: изменить восприятие энергии и фокуса через натуральные и безопасные продукты. Первый в России лактозофри-молочный напиток с L-теанином и кофеином из гуараны.
        </p>

        {/* Brand info cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 ${anim('animate-fadeUp delay-300')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">Портфель</p>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Бренд в портфеле ЭкоНива</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Запуск в 2025 году. Производство с ко-пакером в России, пилотные продажи через розничные сети и онлайн.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">Формат</p>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Алюминиевая банка 250 мл</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Минималистичный дизайн. Бренд в стадии становления, категория продукта пока не определена рынком.</p>
          </div>
        </div>

        {/* Flavors */}
        <h3 className={`text-center text-2xl sm:text-3xl md:text-4xl font-black tracking-[-0.03em] text-neutral-900 mb-8 ${anim('animate-fadeUp delay-400')}`}>
          Три вкуса на старте
        </h3>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${anim('animate-fadeUp delay-500')}`}>
          {[
            { label: 'Брауни', color: 'text-brownie' },
            { label: 'Груша-Пармезан', color: 'text-pear' },
            { label: 'Солёная Карамель', color: 'text-caramel' },
          ].map((f) => (
            <div key={f.label} className="text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
              <p className={`text-2xl sm:text-3xl font-black ${f.color}`}>{f.label}</p>
            </div>
          ))}
        </div>

        <p className={`text-center text-neutral-400 text-xs sm:text-sm mt-8 ${anim('animate-fadeUp delay-500')}`}>
          В перспективе: батончики, сливки, мороженое
        </p>
      </div>
    </section>
  );
}
