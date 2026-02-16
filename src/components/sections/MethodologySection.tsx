import { useInView } from '../../hooks/useInView';

const reasons = [
  {
    number: '01',
    title: 'Отсутствие исторической базы',
    text: 'Продукт новый, продажи равны нулю. Использование методов «% от оборота» невозможно.',
  },
  {
    number: '02',
    title: 'Необходимость обучения',
    text: 'Рынок перенасыщен рекламой (~400 объявлений/день), а категория «напиток с L-теанином» неизвестна массовому потребителю. Требуется инвестиция в разъяснение свойств продукта.',
  },
  {
    number: '03',
    title: 'Специфика аудитории',
    text: 'Для сегмента 18–30 лет (Gen Z) нужны нестандартные каналы (Telegram, стримеры), где ценообразование зависит от креатива, а не фиксированных ставок.',
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
        {/* Section label */}
        <p
          className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}
        >
          Стратегия
        </p>

        {/* Title */}
        <h2
          className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}
        >
          Методология
          <br />
          <span className="text-accent">Бюджетирования</span>
        </h2>


        {/* Method card */}
        <div
          className={`text-center rounded-2xl border border-neutral-200 bg-neutral-50/60 backdrop-blur-sm p-8 sm:p-10 md:p-12 mb-16 md:mb-20 ${anim('animate-fadeUp delay-400')}`}
        >
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">
            Метод
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">
            Целей и Задач
          </h3>
          <p className="text-sm sm:text-base font-normal text-neutral-400 mb-5">
            Objective &amp; Task Method
          </p>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Бюджет не фиксируется как процент от несуществующих продаж, а
            рассчитывается как стоимость конкретных действий, необходимых для
            достижения цели.
          </p>
        </div>

        {/* Reasons heading */}
        <p
          className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-10 ${anim('animate-fadeUp delay-500')}`}
        >
          Почему этот метод — для рынка РФ в 2025
        </p>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`group text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg ${anim(`animate-fadeUp delay-${(i + 6) * 100}`)}`}
            >
              <span className="block text-4xl sm:text-5xl font-black text-neutral-100 group-hover:text-accent/20 transition-colors duration-300 mb-5">
                {r.number}
              </span>
              <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 mb-3">
                {r.title}
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
