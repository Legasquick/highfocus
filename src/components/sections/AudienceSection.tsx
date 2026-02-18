import { useInView } from '../../hooks/useInView';

export default function AudienceSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Аудитория
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          Целевая аудитория
          <br />
          <span className="text-accent">и сценарий потребления</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-16 ${anim('animate-fadeUp delay-200')}`}>
          Мужчины и женщины 18–45 лет. Активные городские жители: студенты, офисные сотрудники, фрилансеры и представители креативных профессий.
        </p>

        {/* Key insights */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 ${anim('animate-fadeUp delay-300')}`}>
          <div className="text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Решение</p>
            <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">Спонтанная покупка</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">Потребитель сам принимает решение. Характер покупки — спонтанный или полуосознанный.</p>
          </div>
          <div className="text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Момент</p>
            <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">Короткие паузы</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">Перерыв между задачами, во время учёбы или параллельно с ритуалом покупки кофе.</p>
          </div>
          <div className="text-center rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 card-glow hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Ценность</p>
            <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">Состояние потока</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">Быстрое «включение» в рабочий процесс и достижение полной концентрации и вовлечённости.</p>
          </div>
        </div>

        {/* Expectation highlight */}
        <div className={`rounded-2xl border border-accent/30 bg-accent/5 p-8 sm:p-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-400')}`}>
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">Ключевое ожидание</p>
          <p className="text-neutral-900 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Безопасность и приятный вкус — базовое ожидание. Главная ценность — быстрый эффект концентрации и вовлечённости в задачу.
          </p>
        </div>
      </div>
    </section>
  );
}
