import styles from './HeroEditorial.module.css';

export default function HeroEditorial() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.accentStrip} />
        <div className={styles.rule} />
        <span className={styles.eyebrow}>Стратегия запуска бренда</span>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Методология</span>
          <span className={styles.titleLine}>Бюджетирования</span>
        </h1>
        <div className={styles.rule2} />
        <p className={styles.description}>
          <span className={styles.brand}>High Focus</span>{' '}
          <span className={styles.ekoniva}>× Эконива</span>
          <br />
          Напиток для тех, кто работает головой.
          Инновационный молочный напиток для концентрации внимания.
        </p>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Метод</span>
            <span className={styles.metaValue}>Целей и Задач</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Рынок</span>
            <span className={styles.metaValue}>Россия, 2025</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Сегмент</span>
            <span className={styles.metaValue}>18–30 лет</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.bigNumber}>01</span>
        <svg className={styles.frameOverlay} viewBox="0 0 320 320">
          <path className={styles.corner} d="M 0,50 L 0,0 L 50,0" />
          <path className={styles.corner} d="M 270,0 L 320,0 L 320,50" />
          <path className={styles.corner} d="M 320,270 L 320,320 L 270,320" />
          <path className={styles.corner} d="M 50,320 L 0,320 L 0,270" />
        </svg>
      </div>
    </section>
  );
}
