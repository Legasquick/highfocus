import { useInView } from '../../hooks/useInView';

export default function PositioningSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32 bg-neutral-50/40"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Позиционирование
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          <span className="text-accent">«Умная энергия»</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-16 ${anim('animate-fadeUp delay-200')}`}>
          Напиток для тех, кто работает головой. Натурально, вкусно, эффективно и без вреда.
        </p>

        {/* Challenges */}
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-8 ${anim('animate-fadeUp delay-300')}`}>
          Трудности позиционирования
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16 ${anim('animate-fadeUp delay-400')}`}>
          {[
            { title: 'Неопределённая категория', text: 'Не энергетик, не молочный коктейль и не функциональный лимонад.' },
            { title: 'Неизвестность L-теанина', text: 'Широкая аудитория не знакома с ключевым ингредиентом продукта.' },
          ].map((c) => (
            <div key={c.title} className="text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
              <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 mb-3">{c.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Price, Channels, Geography */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 ${anim('animate-fadeUp delay-500')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 text-center transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">Ценовой сегмент</p>
            <p className="text-2xl sm:text-3xl font-black text-neutral-900">199–300 ₽</p>
            <p className="text-neutral-400 text-sm mt-1">Доступный премиум</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 text-center transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">Каналы</p>
            <p className="text-neutral-900 text-sm sm:text-base font-medium leading-relaxed">Кофейни, автоматы, магазины, маркетплейсы, собственная розница, сети</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 text-center transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">География</p>
            <p className="text-neutral-900 text-sm sm:text-base font-medium">Россия — крупные города</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 text-center transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-2">Сезонность</p>
            <p className="text-neutral-900 text-sm sm:text-base font-medium">Круглогодичный продукт с пиком в тёплый сезон</p>
          </div>
        </div>

        {/* Current vs Desired positioning */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${anim('animate-fadeUp delay-600')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">Текущее позиционирование</p>
            <p className="text-neutral-900 text-sm sm:text-base leading-relaxed">Инновационный молочный напиток для концентрации энергии.</p> <br /> <b>Вызывает интерес, но не всегда понятный в категории.</b>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Желаемое позиционирование</p>
            <p className="text-neutral-900 text-sm sm:text-base leading-relaxed">«Умная энергия» — напиток для тех, кто работает головой.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
