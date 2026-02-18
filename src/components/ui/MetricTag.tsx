import { useState, useEffect, useCallback } from 'react';

const descriptions: Record<string, string> = {
  // ATL
  'Impressions': 'Количество показов рекламного объявления целевой аудитории.',
  'CPM': 'Cost Per Mille — стоимость 1 000 показов рекламы.',
  'CPF (Cost Per Follower)': 'Стоимость привлечения одного подписчика в канал бренда.',
  'VTR (досмотры)': 'View Through Rate — процент пользователей, досмотревших видеоролик до конца.',
  'Reach': 'Количество уникальных пользователей, увидевших рекламу хотя бы один раз.',
  'Brand Lift': 'Исследование прироста знания о бренде: опрос видевших рекламу vs контрольная группа.',
  'OTS (контакты)': 'Opportunity To See — количество вероятных визуальных контактов с рекламой.',
  'Досматриваемость': 'Доля аудитории, зафиксировавшей визуальный контакт с экраном.',
  'Sales Lift': 'Прирост продаж в точках рядом с рекламными носителями.',
  'CTR': 'Click Through Rate — процент кликов по объявлению от числа показов.',
  'Frequency': 'Среднее количество показов рекламы одному уникальному пользователю.',
  'Traffic': 'Количество переходов на лендинг или карточку товара на маркетплейсе.',
  'Search Impression Share': 'Доля полученных показов от общего числа возможных показов в поиске.',
  // BTL
  'CPV': 'Cost Per View — стоимость одного просмотра интеграции у блогера.',
  'CPE (Engagement)': 'Cost Per Engagement — стоимость одного взаимодействия (лайк, комментарий, репост).',
  'Sentiment Analysis': 'Анализ тональности комментариев — соотношение позитивных, нейтральных и негативных реакций.',
  'Footfall': 'Количество посетителей, прошедших через брендированную зону на мероприятии.',
  'Brand Experience Time': 'Среднее время контакта посетителя с брендом в зоне активации.',
  'Share of Shelf': 'Доля полочного пространства бренда относительно конкурентов в торговой точке.',
  'OOS (Out of Stock)': 'Процент времени или точек, в которых товар отсутствует на полке.',
  'Sales Uplift': 'Прирост продаж в точках с POSM по сравнению с точками без них.',
  'CR (Conversion Rate)': 'Процент пользователей, совершивших покупку, от числа кликнувших.',
  'CPA': 'Cost Per Action — стоимость целевого действия (заказ, добавление в корзину).',
  'ROI': 'Return on Investment — отношение прибыли к затратам на рекламу.',
  'Contacts': 'Общее количество людей, получивших образец продукта.',
  'Samples Distributed': 'Количество физически розданных банок продукта.',
  'Cost Per Trial': 'Стоимость одной пробы (затраты на сэмплинг / количество розданных банок).',
};

export default function MetricTag({ label, accent }: { label: string; accent?: boolean }) {
  const [open, setOpen] = useState(false);
  const desc = descriptions[label];

  const close = useCallback((e: Event) => {
    if ((e as CustomEvent).detail !== label) setOpen(false);
  }, [label]);

  useEffect(() => {
    window.addEventListener('metric-open', close);
    return () => window.removeEventListener('metric-open', close);
  }, [close]);

  const toggle = () => {
    const next = !open;
    if (next) window.dispatchEvent(new CustomEvent('metric-open', { detail: label }));
    setOpen(next);
  };

  return (
    <span className="inline-flex flex-col items-start">
      <button
        onClick={toggle}
        className={`text-xs px-3 py-1 rounded-full font-medium cursor-pointer transition-all duration-200 ${
          open
            ? 'ring-2 ring-offset-1 ' + (accent ? 'ring-accent/40 bg-accent/20 text-accent-dim' : 'ring-neutral-300 bg-neutral-200 text-neutral-700')
            : accent ? 'bg-accent/10 text-accent-dim hover:bg-accent/20' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
        }`}
      >
        {label}
      </button>
      {open && desc && (
        <span className="mt-1.5 text-xs text-neutral-500 leading-relaxed bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 max-w-xs animate-fadeIn">
          {desc}
        </span>
      )}
    </span>
  );
}
