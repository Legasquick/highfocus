import styles from './HeroDark.module.css';

export default function HeroDark() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />

      <div className={styles.frameContainer}>
        <svg className={styles.frame} viewBox="0 0 560 400" preserveAspectRatio="none">
          <path className={styles.corner} d="M 0,55 L 0,0 L 55,0" />
          <path className={styles.corner} d="M 505,0 L 560,0 L 560,55" />
          <path className={styles.corner} d="M 560,345 L 560,400 L 505,400" />
          <path className={styles.corner} d="M 55,400 L 0,400 L 0,345" />
          {/* Crosshair */}
          <line className={styles.crosshair} x1="270" y1="190" x2="290" y2="190" />
          <line className={styles.crosshair} x1="280" y1="180" x2="280" y2="200" />
        </svg>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Методология</span>
            <span className={styles.titleLine}>Бюджетирования</span>
          </h1>
          <span className={styles.accentLine} />
          <p className={styles.subtitle}>
            <span className={styles.brand}>High Focus</span> × Эконива
          </p>
          <p className={styles.tagline}>
            Напиток для тех, кто работает головой
          </p>
        </div>
      </div>

      <div className={styles.bottomBar} />
    </section>
  );
}
