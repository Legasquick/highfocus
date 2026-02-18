import { useInView } from '../../hooks/useInView';
import { useDebouncedHover } from '../../hooks/useDebouncedHover';
import MetricTag from '../ui/MetricTag';

type Channel = 'telegram' | 'olv' | 'dooh' | 'vk' | 'yandex' | null;

const channels = [
  { id: 'telegram' as const, label: 'Telegram Ads', pct: 40, deg: [0, 144], color: '#d5d51c', colorHover: '#c4c418', role: 'Awareness / Interest', task: 'Точечный охват IT, студентов и креаторов в среде их обитания.' },
  { id: 'olv' as const, label: 'OLV (Video)', pct: 25, deg: [144, 234], color: '#a8a816', colorHover: '#8f9012', role: 'Awareness (Visual)', task: 'Показать банку и «вайб» потока. Визуальное якорение.' },
  { id: 'dooh' as const, label: 'Programmatic DOOH', pct: 20, deg: [234, 306], color: '#737310', colorHover: '#5c5c0d', role: 'Awareness (Offline)', task: 'Закупка показов на цифровых экранах по гео и времени.' },
  { id: 'vk' as const, label: 'VK Ads', pct: 10, deg: [306, 342], color: '#a3a3a3', colorHover: '#858585', role: 'Reach / Traffic', task: 'Ретаргетинг и частота контакта. Напоминание о продукте.' },
  { id: 'yandex' as const, label: 'Яндекс.Директ', pct: 5, deg: [342, 360], color: '#d4d4d4', colorHover: '#b0b0b0', role: 'Demand Capture', task: 'Перехват трафика конкурентов (энергетики, кофе, БАДы).' },
];

export default function ATLDetailSection() {
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
          ATL — <span className="text-accent">Digital First</span>
        </h2>

        <p className={`text-center text-neutral-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-4 ${anim('animate-fadeUp delay-200')}`}>
          Классический ТВ-микс здесь не сработает. ATL в данном случае — это Digital ATL, направленный на создание визуальной узнаваемости банки и закрепление ассоциации «High Focus = Умная энергия».
        </p>

        <p className={`text-center text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto mb-16 ${anim('animate-fadeUp delay-300')}`}>
          Принцип: максимальная концентрация там, где есть внимание (Telegram) + дешёвый охват видеоформатом для запоминания упаковки.
        </p>

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
                    {active ? active.label : 'ATL Бюджет'}
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-neutral-900">
                    {active ? `${active.pct}%` : '30%'}
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
                  <span className={`text-xs transition-colors duration-300 ${hover === c.id ? 'text-neutral-900 font-semibold' : 'text-neutral-500'}`}>
                    {c.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Channel summary cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 ${anim('animate-fadeUp delay-500')}`}>
          {channels.map((c) => (
            <div
              key={c.id}
              className={`rounded-2xl border p-5 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                hover === c.id
                  ? 'border-neutral-400 shadow-xl bg-neutral-50 scale-[1.02]'
                  : hover && hover !== c.id
                    ? 'border-neutral-100 bg-white opacity-50'
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
          {/* 1. Telegram */}
          <div
            className={`rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-700')}`}
            onMouseEnter={() => enter('telegram')}
            onMouseLeave={leave}
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-accent/30">01</span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent-dim mb-1">40% бюджета</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">Telegram Ads (Официальная реклама)</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Ставка на Telegram как «новый интернет». Короткие текстовые сообщения прямо в каналах вузов, IT-пабликах без согласования с админами.
                </p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Формат</p>
                <p className="text-neutral-500 text-sm mb-4">Короткие посты (160 символов) с кнопкой перехода на канал бренда или бота.</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Таргетинг</p>
                <p className="text-neutral-500 text-sm mb-4">По интересам: Образование, Бизнес, Технологии, Дизайн, Гейминг. По каналам: паблики вузов (МГУ, ВШЭ), каналы про Python/Java, продуктивность.</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Метрики</p>
                <div className="flex flex-wrap gap-2">
                  {['Impressions', 'CPM', 'CPF (Cost Per Follower)'].map((m) => (
                    <MetricTag key={m} label={m} accent />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. OLV */}
          <div
            className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-800')}`}
            onMouseEnter={() => enter('olv')}
            onMouseLeave={leave}
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-neutral-100">02</span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">25% бюджета</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">OLV — Видеореклама (VK Видео, Rutube)</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Потребитель должен увидеть банку в динамике, чтобы узнать её на полке. Статика работает хуже для передачи эмоции «состояния потока».
                </p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Формат</p>
                <p className="text-neutral-500 text-sm mb-4">Ролики 6 и 15 секунд (бамперы). Сюжет: «Студент тупит → Щелчок банки → L-теанин работает → Режим потока».</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Метрики</p>
                <div className="flex flex-wrap gap-2">
                  {['VTR (досмотры)', 'Reach', 'Brand Lift'].map((m) => (
                    <MetricTag key={m} label={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. DOOH */}
          <div
            className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-1000')}`}
            onMouseEnter={() => enter('dooh')}
            onMouseLeave={leave}
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-neutral-100">03</span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">20% бюджета</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">Programmatic DOOH</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Не статичные щиты на месяц, а закупка показов на цифровых экранах в реальном времени через аукцион (DSP), строго по гео и времени.
                </p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Локации</p>
                <ul className="text-neutral-500 text-sm space-y-1 mb-4">
                  <li>• ВУЗы: экраны в радиусе 500м от МГУ, ВШЭ, Бауманки, ИТМО</li>
                  <li>• Бизнес-центры: Москва-Сити, IT-кластеры, коворкинги класса А</li>
                  <li>• Транспортные хабы: цифровые сити-форматы у метро</li>
                </ul>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Time targeting</p>
                <p className="text-neutral-500 text-sm mb-4">Утро (08–10) — «Включись перед парами». Обед (13–15) — «Побори послеобеденную сонливость».</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Метрики</p>
                <div className="flex flex-wrap gap-2">
                  {['OTS (контакты)', 'Досматриваемость', 'Sales Lift'].map((m) => (
                    <MetricTag key={m} label={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. VK Ads */}
          <div
            className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-1200')}`}
            onMouseEnter={() => enter('vk')}
            onMouseLeave={leave}
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-neutral-100">04</span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">10% бюджета</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">Таргетированная реклама (VK Ads)</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Инструмент для частоты контакта. В VK догоняем аудиторию визуалом по интересам «Энергетики», «Кофе», «Студенты».
                </p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Формат</p>
                <p className="text-neutral-500 text-sm mb-4">Универсальная запись (карусель вкусов: Брауни, Груша, Карамель) + сторис. Look-alike на покупателей энергетиков, гео на ВУЗы и БЦ класса А.</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Метрики</p>
                <div className="flex flex-wrap gap-2">
                  {['CTR', 'Frequency', 'Traffic'].map((m) => (
                    <MetricTag key={m} label={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Yandex */}
          <div
            className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 ${anim('animate-fadeUp delay-1500')}`}
            onMouseEnter={() => enter('yandex')}
            onMouseLeave={leave}
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span className="shrink-0 text-4xl sm:text-5xl font-black text-neutral-100">05</span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">5% бюджета</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">Контекстная реклама (Яндекс.Директ)</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Работа с уже сформированным спросом. Люди ищут средства для концентрации или альтернативу кофе.
                </p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Семантика</p>
                <p className="text-neutral-500 text-sm mb-4">Брендовая: «High Focus напиток». Ситуативная: «как не уснуть на парах», «натуральный энергетик», «L-теанин купить».</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Метрики</p>
                <div className="flex flex-wrap gap-2">
                  {['Search Impression Share', 'CPA'].map((m) => (
                    <MetricTag key={m} label={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
