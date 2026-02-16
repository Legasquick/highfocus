import styles from './HeroMinimal.module.css';

export default function HeroMinimal() {
  return (
    <section className={styles.hero}>
      <div className={styles.frameContainer}>
        <svg className={styles.frame} viewBox="0 0 560 380" preserveAspectRatio="none">
          {/* Top-left */}
          <path className={styles.corner} d="M 0,60 L 0,0 L 60,0" />
          {/* Top-right */}
          <path className={styles.corner} d="M 500,0 L 560,0 L 560,60" />
          {/* Bottom-right */}
          <path className={styles.corner} d="M 560,320 L 560,380 L 500,380" />
          {/* Bottom-left */}
          <path className={styles.corner} d="M 60,380 L 0,380 L 0,320" />
        </svg>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Методология</span>
            <span className={styles.titleLine}>Бюджетирования</span>
          </h1>
          <p className={styles.subtitle}>
            High Focus <span className={styles.ekoniva}>× Эконива</span>
          </p>
          <p className={styles.tagline}>
            Напиток для тех, кто работает головой
          </p>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
