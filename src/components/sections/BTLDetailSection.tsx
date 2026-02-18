import { useInView } from '../../hooks/useInView';
import { useDebouncedHover } from '../../hooks/useDebouncedHover';
import MetricTag from '../ui/MetricTag';

type Channel = 'influencer' | 'event' | 'trade' | 'retarget' | 'sampling' | null;

const channels = [
  { id: 'influencer' as const, label: 'Influencer Marketing', pct: 40, deg: [0, 144], color: '#d5d51c', colorHover: '#c4c418', role: 'Trust & Education', task: 'Глубокий обзор, тест-драйв эффекта, снятие страха перед «молочкой».' },
  { id: 'event' as const, label: 'Event Marketing', pct: 20, deg: [144, 216], color: '#a8a816', colorHover: '#8f9012', role: 'Context', task: 'Интеграция в места, где нужна концентрация.' },
  { id: 'trade' as const, label: 'Trade / POSM', pct: 15, deg: [216, 270], color: '#737310', colorHover: '#5c5c0d', role: 'Conversion', task: 'Выделение на полке и стимуляция покупки в ритейле.' },
  { id: 'retarget' as const, label: 'Retargeting', pct: 15, deg: [270, 324], color: '#a3a3a3', colorHover: '#858585', role: 'Conversion', task: 'Возврат тех, кто коснулся бренда (QR, клик, видео).' },
  { id: 'sampling' as const, label: 'Sampling', pct: 10, deg: [324, 360], color: '#d4d4d4', colorHover: '#b0b0b0', role: 'Trial (Проба)', task: 'Физическая раздача продукта в офисах и вузах.' },
];

export default function BTLDetailSection() {
  const { ref, inView } = useInView(0.1);
  const anim = (cls: string) => (inView ? cls : 'opacity-0');
  const { hover, enter, leave } = useDebouncedHover<Channel>();

  const gradient = channels
    .map((c) => {
      const col = hover === c.id ? c.colorHover : hover && hover !== c.id ? c.color + '44' : c.color;
      return `${col} ${c.deg[0]}deg, ${col} ${c.deg[1]}deg`;
    })
    .join(', ');

  const active = channels.find((c) => c.id === hover);

  return (
    <section ref={ref} className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32">
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 ${anim('animate-fadeUp')}`}>
          Детализация
        </p>

        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6 ${anim('animate-fadeUp delay-100')}`}>
          BTL — <span className="text-accent">Основной драйвер</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6 ${anim('animate-fadeUp delay-200')}`}>
          Для бренда High Focus BTL — это не просто поддержка, это основной драйвер продаж.
        </p>

        {/* Barrier cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${anim('animate-fadeUp delay-300')}`}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-2">Барьер по закону</p>
            <p className="text-neutral-500 text-sm leading-relaxed">«Молочный энергетик» звучит подозрительно и нельзя по закону.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-2">Барьер состава</p>
            <p className="text-neutral-500 text-sm leading-relaxed">L-теанин — это «сложно». Инфлюенсеры должны объяснить, что это «не химия, а вытяжка из чая», которая убирает «мандраж» от кофеина.</p>
          </div>
        </div>

        {/* Donut Chart */}
        <div className={`flex justify-center mb-20 ${anim('animate-fadeUp delay-400')}`}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div
              className="w-full h-full rounded-full transition-all duration-500"
              style={{
                background: `conic-gradient(from 0deg, ${gradient})`,
                transform: hover ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white flex flex-col items-center justify-center transition-all duration-300">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-400 mb-1">
                    {active ? active.label : 'BTL Бюджет'}
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-neutral-900">
                    {active ? `${active.pct}%` : '70%'}
                  </p>
                  {active && <p className="text-[10px] text-neutral-400 mt-1">{active.role}</p>}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="absolute -bottom-12 left-0 right-0 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {channels.map((c) => (
                <div key={c.id} className="flex items-center gap-1.5 cursor-pointer" onMouseEnter={() => enter(c.id)} onMouseLeave={leave}>
                  <div className="w-3 h-3 rounded-full transition-all duration-300" style={{ background: hover === c.id ? c.colorHover : c.color }} />
                  <span className={`text-xs transition-colors duration-300 ${hover === c.id ? 'text-neutral-900 font-semibold' : 'text-neutral-500'}`}>{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Channel summary cards */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 ${anim('animate-fadeUp delay-500')}`}>
          {channels.map((c) => (
            <div
              key={c.id}
              className={`rounded-2xl border p-5 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 ${hover === c.id ? 'border-neutral-400 shadow-xl bg-neutral-50 scale-[1.02]'
                  : hover && hover !== c.id ? 'border-neutral-100 bg-white opacity-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg'
                }`}
              onMouseEnter={() => enter(c.id)}
              onMouseLeave={leave}
            >
              <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ background: c.color }} />
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mb-1">{c.pct}%</p>
              <p className="text-sm font-bold text-neutral-900">{c.label}</p>
              <p className="text-xs text-neutral-400 mt-1">{c.role}</p>
            </div>
          ))}
        </div>

        {/* Detailed channel cards */}
        <p className={`text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-10 ${anim('animate-fadeUp delay-600')}`}>
          Детализация каналов с метриками и KPI
        </p>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* 1. Influencer */}
          <ChannelCard
            num="01" pct="40%" accent
            title="Influencer Marketing (Лидеры мнений)"
            anim={anim('animate-fadeUp delay-700')}
            onHover={() => enter('influencer')}
            onLeave={leave}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Самый крупный кусок пирога. Нам нужны не «охватные» блогеры, а те, кому доверяют мозги аудитории.
            </p>
            <Label>Площадки</Label>
            <p className="text-neutral-500 text-sm mb-4">Telegram (текстовые обзоры, кружочки), YouTube (интеграции в подкасты), Twitch (стримеры).</p>
            <Label>Сегменты блогеров</Label>
            <ul className="text-neutral-500 text-sm space-y-1 mb-4">
              <li>• Biohackers & Productivity — наука (L-теанин + Гуарана = синергия)</li>
              <li>• IT & Devs — «Как я кодил 4 часа без перерыва»</li>
              <li>• Students/StudyTube — «Как пережить сессию»</li>
              <li>• Gamers — «Фокус в катке без трясущихся рук»</li>
            </ul>
            <Label>Формат</Label>
            <p className="text-neutral-500 text-sm mb-4">Нативная интеграция с обязательным тестом вкуса в кадре.</p>
            <Metrics items={['CPV', 'CPE (Engagement)', 'Sentiment Analysis']} accent />
          </ChannelCard>

          {/* 2. Event */}
          <ChannelCard
            num="02" pct="20%"
            title="Event Marketing (Событийный маркетинг)"
            anim={anim('animate-fadeUp delay-800')}
            onHover={() => enter('event')}
            onLeave={leave}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              High Focus должен стать синонимом «интеллектуального спорта». Мы идём туда, где люди напрягают мозги.
            </p>
            <Label>Мероприятия</Label>
            <ul className="text-neutral-500 text-sm space-y-1 mb-4">
              <li>• Хакатоны и IT-конференции (HighLoad, TeamLead Conf)</li>
              <li>• Киберспортивные турниры (локальные LAN-турниры, компьютерные клубы)</li>
              <li>• Университетские мероприятия (Дни карьеры)</li>
            </ul>
            <Label>Формат</Label>
            <p className="text-neutral-500 text-sm mb-4">Брендированный «Recharge Zone» — удобные пуфы, зарядки для ноутов и холодильник с High Focus.</p>
            <Metrics items={['Footfall', 'Brand Experience Time']} />
          </ChannelCard>

          {/* 3. Trade */}
          <ChannelCard
            num="03" pct="15%"
            title="Trade Marketing & POSM (Трейд-маркетинг)"
            anim={anim('animate-fadeUp delay-1000')}
            onHover={() => enter('trade')}
            onLeave={leave}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Битва на полке. Упаковка минималистичная, она может «потеряться» среди пёстрых энергетиков или йогуртов.
            </p>
            <Label>Инструменты</Label>
            <ul className="text-neutral-500 text-sm space-y-1 mb-4">
              <li>• Воблеры и шелфтокеры</li>
              <li>• Холодильники у касс (импульсная покупка)</li>
              <li>• Стрип-ленты в кофейных зонах</li>
            </ul>
            <Metrics items={['Share of Shelf', 'OOS (Out of Stock)', 'Sales Uplift']} />
          </ChannelCard>

          {/* 4. Retargeting */}
          <ChannelCard
            num="04" pct="15%"
            title="Retargeting (Ретаргетинг)"
            anim={anim('animate-fadeUp delay-1200')}
            onHover={() => enter('retarget')}
            onLeave={leave}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              «Догоняющая» реклама только для «тёплой» аудитории, собранной с предыдущих этапов.
            </p>
            <Label>Источники данных</Label>
            <ul className="text-neutral-500 text-sm space-y-1 mb-4">
              <li>• QR-код на банках сэмплинга → лендинг → пиксель VK/Яндекс</li>
              <li>• Clickers от инфлюенсеров — кликнули, но не купили</li>
              <li>• Зрители видео (VTR 100%) из ATL</li>
              <li>• MAC-адреса с ивентов (Wi-Fi Radar на стенде)</li>
            </ul>
            <Label>Каналы</Label>
            <p className="text-neutral-500 text-sm mb-4">VK Реклама, РСЯ (Яндекс), Telegram Ads (по базе телефонов).</p>
            <Metrics items={['CR (Conversion Rate)', 'CPA', 'ROI']} />
          </ChannelCard>

          {/* 5. Sampling */}
          <ChannelCard
            num="05" pct="10%"
            title="Sampling (Сэмплинг)"
            anim={anim('animate-fadeUp delay-1500')}
            onHover={() => enter('sampling')}
            onLeave={leave}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Критически важно: холодная логистика. Тёплый молочный напиток — это смерть для бренда. Сэмплинг с холодильным оборудованием или термосумками.
            </p>
            <Label>Локации (синхрон с DOOH)</Label>
            <ul className="text-neutral-500 text-sm space-y-1 mb-4">
              <li>• Бизнес-центры класса А и B+ (раздача на входе утром)</li>
              <li>• Коворкинги — дроп коробок на кухню</li>
              <li>• ВУЗы (в периоды сессий)</li>
            </ul>
            <Label>Механика</Label>
            <p className="text-neutral-500 text-sm mb-4">Gift for Action: «Подпишись на ТГ-канал — получи банку». Собирает базу для ретаргетинга.</p>
            <Metrics items={['Contacts', 'Samples Distributed', 'Cost Per Trial']} />
          </ChannelCard>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{children}</p>;
}

function Metrics({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <>
      <Label>Метрики</Label>
      <div className="flex flex-wrap gap-2">
        {items.map((m) => (
          <MetricTag key={m} label={m} accent={accent} />
        ))}
      </div>
    </>
  );
}

function ChannelCard({ num, pct, title, accent, anim, children, onHover, onLeave }: {
  num: string; pct: string; title: string; accent?: boolean; anim: string;
  children: React.ReactNode; onHover: () => void; onLeave: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border ${accent ? 'border-accent/30 bg-accent/5' : 'border-neutral-200 bg-white'} p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${anim}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-start gap-5 md:gap-8">
        <span className={`shrink-0 text-4xl sm:text-5xl font-black ${accent ? 'text-accent/30' : 'text-neutral-100'}`}>{num}</span>
        <div>
          <p className={`text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase ${accent ? 'text-accent-dim' : 'text-neutral-400'} mb-1`}>{pct} бюджета</p>
          <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">{title}</h4>
          {children}
        </div>
      </div>
    </div>
  );
}
