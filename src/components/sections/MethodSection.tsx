import { useInView } from '../../hooks/useInView';

const reasons = [
  {
    num: '01',
    title: 'Отсутствие исторической базы',
    text: 'Продукт новый, продажи равны нулю. Использование методов «% от оборота» невозможно.',
  },
  {
    num: '02',
    title: 'Необходимость обучения',
    text: 'Рынок перенасыщен рекламой — пользователь видит ~400 объявлений в день. Категория «напиток с L-теанином» неизвестна массовому потребителю.',
  },
  {
    num: '03',
    title: 'Специфика аудитории',
    text: 'Для сегмента 18–30 лет (Gen Z) нужны нестандартные каналы: Telegram, стримеры — ценообразование зависит от креатива.',
  },
];

export default function MethodSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-[#f8f8f6]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Section label */}
          <div
            className={`col-span-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400">
              Метод
            </span>
          </div>

          {/* Title */}
          <div
            className={`col-span-12 md:col-span-7 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] text-neutral-900">
              Целей и Задач
            </h2>
            <p className="mt-2 text-lg md:text-xl text-accent-dim font-semibold tracking-wide">
              Objective and Task Method
            </p>
          </div>

          {/* Description */}
          <div
            className={`col-span-12 md:col-span-5 flex items-end transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="text-neutral-500 text-base leading-relaxed">
              Бюджет не фиксируется как процент от несуществующих продаж, а рассчитывается
              как стоимость конкретных действий, необходимых для достижения цели.
            </p>
          </div>

          {/* Divider */}
          <div className="col-span-12">
            <div
              className={`h-px bg-neutral-200 origin-left transition-transform duration-1000 delay-300 ${isInView ? 'scale-x-100' : 'scale-x-0'}`}
            />
          </div>

          {/* Reason cards - 3 column grid */}
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={`col-span-12 md:col-span-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="h-full border border-neutral-200 rounded-2xl p-8 bg-white hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
                <span className="text-5xl font-black text-neutral-100 block mb-4 select-none">
                  {r.num}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
