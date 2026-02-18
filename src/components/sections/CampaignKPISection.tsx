import { useInView } from '../../hooks/useInView';

export default function CampaignKPISection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32 bg-neutral-50/40"
    >
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Рекламная кампания
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-16 ${anim('animate-fadeUp delay-100')}`}>
          Цели и <span className="text-accent">KPI</span>
        </h2>

        {/* 1. Reach */}
        <div className={`mb-12 ${anim('animate-fadeUp delay-200')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 transition-all duration-300 card-glow hover:-translate-y-1">
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-accent/20">01</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Охватные показатели (Узнаваемость)</h3>
                <p className="text-neutral-500 text-sm mb-4">Создать широкое первичное знание о продукте в городах-миллионниках России.</p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Охват ЦА (18–30 лет): <strong className="text-neutral-900">5 000 000+</strong> уникальных контактов</li>
                  <li>• Прирост брендовых запросов (Яндекс Wordstat): <strong className="text-neutral-900">15 000+</strong> запросов/месяц</li>
                  <li>• Share of Voice: <strong className="text-neutral-900">15%</strong> упоминаний в целевых нишах (образование, IT, гейминг) в Telegram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Engagement */}
        <div className={`mb-12 ${anim('animate-fadeUp delay-300')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 transition-all duration-300 card-glow hover:-translate-y-1">
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-accent/20">02</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Имиджевые показатели (Вовлечённость)</h3>
                <p className="text-neutral-500 text-sm mb-4">Преодолеть «баннерную слепоту» и закрепить ассоциацию продукта с интеллектуальной продуктивностью.</p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• ERR (Engagement Rate by Reach) в Telegram канале бренда: <strong className="text-neutral-900">3%</strong></li>
                  <li>• Виральный коэффициент (K-factor): <strong className="text-neutral-900">10%</strong> охвата за счёт органических репостов и пересылок мемов/стикерпаков</li>
                  <li>• Уровень знания состава (L-теанин): <strong className="text-neutral-900">5%</strong> опрошенных ЦА правильно идентифицируют компонент при Brand Lift</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Conversion */}
        <div className={`mb-12 ${anim('animate-fadeUp delay-400')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 transition-all duration-300 card-glow hover:-translate-y-1">
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-accent/20">03</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Конверсионные показатели (Проба и продажи)</h3>
                <p className="text-neutral-500 text-sm mb-4">Стимулировать первую покупку при розничной цене 199–300 рублей.</p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Trial Rate (Уровень первой покупки): <strong className="text-neutral-900">2%</strong> от охваченной аудитории (~100 000 первых покупок)</li>
                  <li>• Количество розданных образцов (Sampling): <strong className="text-neutral-900">50 000+</strong> банок на профильных мероприятиях (хакатоны, воркшопы)</li>
                  <li>• CPT (Cost Per Trial): в рамках рынка <strong className="text-neutral-900">700–850 ₽</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Loyalty */}
        <div className={`${anim('animate-fadeUp delay-500')}`}>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-accent/40">04</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">Дистрибуция и лояльность</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Retention Rate (Повторные покупки): <strong className="text-neutral-900">15%</strong> покупателей совершают повторную покупку в течение 3 месяцев</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
