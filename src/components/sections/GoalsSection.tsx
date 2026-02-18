import { useInView } from '../../hooks/useInView';

export default function GoalsSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32 bg-neutral-50/40"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Бриф
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-16 ${anim('animate-fadeUp delay-100')}`}>
          Цели и <span className="text-accent">задачи</span>
        </h2>

        {/* Prerequisites + Goal */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 ${anim('animate-fadeUp delay-200')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">Предпосылки проекта</p>
            <p className="text-neutral-900 text-sm sm:text-base leading-relaxed">Запуск нового продукта, первые месяцы присутствия компании на рынке.</p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Цель проекта</p>
            <p className="text-neutral-900 text-sm sm:text-base leading-relaxed">Рост узнаваемости бренда среди студентов и молодых специалистов.</p>
          </div>
        </div>

        {/* KPIs */}
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-8 ${anim('animate-fadeUp delay-300')}`}>
          Ключевые показатели эффективности
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ${anim('animate-fadeUp delay-400')}`}>
          {[
            'Рост узнаваемости бренда',
            'Формирование положительного имиджа',
            'Увеличение продаж',
            'Максимальный органический охват ЦА',
          ].map((kpi) => (
            <div key={kpi} className="text-center rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
              <p className="text-neutral-900 text-sm sm:text-base font-medium leading-relaxed">{kpi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
