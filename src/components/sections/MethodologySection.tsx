import { useInView } from '../../hooks/useInView';

const reasons = [
  {
    number: '01',
    title: 'Launch Zero — запуск в условиях шума',
    text: 'В 2024 году в рунете зафиксировано более 3.5 млрд рекламных креативов и 1.3 млн рекламодателей (ЕРИР). Метод «% от продаж» не применим — он не учитывает стоимость «прорыва» через информационный шум. Метод целей и задач рассчитывает бюджет для создания первичного знания о бренде с нуля.',
  },
  {
    number: '02',
    title: 'Защита от медиаинфляции и роста CPL',
    text: 'По данным eLama, в начале 2025 года CPL в ряде сегментов вырос до 730–850 ₽. Метод целей и задач базируется на актуальной рыночной стоимости действий (CPA), а не на фиксированной сумме — кампания не остановится из-за нехватки средств на дорогой трафик.',
  },
  {
    number: '03',
    title: 'Фокус на Telegram',
    text: 'К началу 2025 года Telegram стал лидером рунета — 90.6 млн человек, а во втором квартале превысил 100 млн (Mediascope). Метод позволяет обосновать инвестиции в нативные интеграции и посевы — основной источник контента для 79% молодёжи.',
  },
  {
    number: '04',
    title: 'Преодоление баннерной слепоты',
    text: 'Уровень внимания к традиционной рекламе на десктопе — всего 54% (Okkam, 2025). Для объяснения преимуществ L-теанина нужны сложные задачи: работа с лидерами мнений и вовлекающий контент. Бюджет на эти Tasks рассчитывается индивидуально.',
  },
  {
    number: '05',
    title: 'Контроль эффективности при замедлении рынка',
    text: 'Рост рекламного рынка в первом полугодии 2025 замедлился до 10% (АКАР). Экстенсивный рост охватов прекратился — рекламодатели переходят к расчёту по целям (ROMI). Каждый рубль связан с конкретной задачей, обеспечивая прозрачность и отдачу.',
  },
];

export default function MethodologySection() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Стратегия
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          Методология
          <br />
          <span className="text-accent">Бюджетирования</span>
        </h2>

        {/* Method card */}
        <div className={`text-center rounded-2xl border border-neutral-200 bg-neutral-50/60 backdrop-blur-sm p-8 sm:p-10 md:p-12 mb-16 md:mb-20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-400')}`}>
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Метод</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">Целей и Задач</h3>
          <p className="text-sm sm:text-base font-normal text-neutral-400 mb-5">Objective &amp; Task Method</p>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Бюджет не фиксируется как процент от несуществующих продаж, а рассчитывается как стоимость конкретных действий, необходимых для достижения цели.
          </p>
        </div>

        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-10 ${anim('animate-fadeUp delay-500')}`}>
          Почему этот метод
        </p>

        <div className="flex flex-col gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`group rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg ${anim(`animate-fadeUp delay-${(i + 6) * 100}`)}`}
            >
              <div className="flex items-start gap-5 md:gap-8">
                <span className="shrink-0 text-4xl sm:text-5xl font-black text-neutral-100 group-hover:text-accent/20 transition-colors duration-300">
                  {r.number}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 mb-2">{r.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
