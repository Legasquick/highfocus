import { useInView } from '../../hooks/useInView';
import { useDebouncedHover } from '../../hooks/useDebouncedHover';

export default function BudgetSplitSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');
  const { hover, enter, leave } = useDebouncedHover<'atl' | 'btl'>();

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Распределение
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          Сплит <span className="text-accent">бюджета</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-12 ${anim('animate-fadeUp delay-200')}`}>
          ATL — 30% / BTL — 70%
        </p>

        {/* Donut Chart */}
        <div className={`flex justify-center mb-16 ${anim('animate-fadeUp delay-250')}`}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div
              className="w-full h-full rounded-full transition-all duration-500"
              style={{
                background: `conic-gradient(
                  from 0deg,
                  ${hover === 'atl' ? '#a3a3a3' : '#e5e5e5'} 0deg,
                  ${hover === 'atl' ? '#a3a3a3' : '#e5e5e5'} 108deg,
                  ${hover === 'btl' ? '#c4c418' : hover === 'atl' ? '#d5d51c44' : '#d5d51c'} 108deg,
                  ${hover === 'btl' ? '#c4c418' : hover === 'atl' ? '#d5d51c44' : '#d5d51c'} 360deg
                )`,
                transform: hover ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white flex flex-col items-center justify-center transition-all duration-300">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-400 mb-1">
                    {hover === 'atl' ? 'ATL' : hover === 'btl' ? 'BTL' : 'Бюджет'}
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-neutral-900">
                    {hover === 'atl' ? '30%' : hover === 'btl' ? '70%' : '100%'}
                  </p>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => enter('atl')} onMouseLeave={leave}>
                <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${hover === 'atl' ? 'bg-neutral-400' : 'bg-neutral-200'}`}></div>
                <span className={`text-sm transition-colors duration-300 ${hover === 'atl' ? 'text-neutral-900 font-semibold' : 'text-neutral-600'}`}>ATL 30%</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => enter('btl')} onMouseLeave={leave}>
                <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${hover === 'btl' ? 'bg-accent-dim' : 'bg-accent'}`}></div>
                <span className={`text-sm transition-colors duration-300 ${hover === 'btl' ? 'text-neutral-900 font-semibold' : 'text-neutral-600'}`}>BTL 70%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ATL + BTL cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 mt-20 ${anim('animate-fadeUp delay-300')}`}>
          <div
            className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${hover === 'atl' ? 'border-neutral-400 shadow-xl bg-neutral-50 scale-[1.02]' : hover === 'btl' ? 'border-neutral-100 bg-white opacity-50' : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg'}`}
            onMouseEnter={() => enter('atl')}
            onMouseLeave={leave}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">ATL (30%)</p>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">База для охвата 5 млн человек</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              За максимально короткий срок «поселить» визуальный образ бренда в сознании 5 миллионов уникальных пользователей.
            </p>
          </div>
          <div
            className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${hover === 'btl' ? 'border-accent shadow-xl bg-accent/10 scale-[1.02]' : hover === 'atl' ? 'border-accent/10 bg-accent/5 opacity-50' : 'border-accent/30 bg-accent/5 hover:shadow-lg'}`}
            onMouseEnter={() => enter('btl')}
            onMouseLeave={leave}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-3">BTL (70%)</p>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">Конверсия, обучение и проба</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Для продукта со сложным составом (L-теанин) и неопределённой категорией простого «показа» недостаточно. 70% бюджета направляется на качественные контакты.
            </p>
          </div>
        </div>

        {/* Justification */}
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-10 ${anim('animate-fadeUp delay-400')}`}>
          Обоснование безопасности и измеримости решения
        </p>

        <div className="flex flex-col gap-6 md:gap-8">
          {[
            { title: 'Снижение риска «пустого охвата»', text: 'Если потратить больше на ATL (например, 50–60%), вы получите 5 млн контактов, но большинство из них не поймут, зачем им «молоко с добавками». 70% в BTL гарантируют, что охваченная аудитория получит объяснение состава и возможность попробовать продукт.' },
            { title: 'Измеримость через Brand Lift', text: 'Охват в 5 млн через цифровой ATL (OLV и таргетированная реклама) позволяет провести замер Brand Lift (опрос увидевших рекламу vs контрольная группа). Это подтвердит рост узнаваемости цифрами, а не интуицией.' },
            { title: 'Контроль стоимости пробы (CPT)', text: 'BTL-активности позволяют чётко посчитать: «затраты на ивент / количество розданных банок». Это даёт прозрачный KPI стоимости одного реального контакта с продуктом.' },
            { title: 'Адаптивность', text: 'В отличие от классического ATL (ТВ или статичные билборды), бюджеты в Digital ATL и BTL (инфлюенсеры, ивенты) можно перераспределять в реальном времени, если один из каналов показывает низкий результат.' },
            { title: 'Соответствие бюджету «Целей и задач»', text: 'Каждая часть сплита привязана к задаче: 30% на «увидеть», 70% на «понять и попробовать». Это исключает нецелевое расходование средств на каналы, которые не ведут к покупке.' },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 ${anim(`animate-fadeUp delay-${(i + 5) * 100}`)}`}
            >
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">{item.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
