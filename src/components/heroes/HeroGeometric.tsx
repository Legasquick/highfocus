import styles from './HeroGeometric.module.css';

export default function HeroGeometric() {
  return (
    <section className={styles.hero}>
      <div className={styles.diagonalBlock} />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <span className={styles.tag}>High Focus × Эконива</span>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Методология</span>
            <span className={styles.titleLine}>Бюджети-</span>
            <span className={styles.titleLine}>рования</span>
          </h1>
          <p className={styles.subtitle}>
            Напиток для тех, кто работает головой.
            Инновационный молочный напиток для концентрации внимания и повышения энергии.
          </p>
          <div className={styles.brandRow}>
            <span className={styles.brandName}>High Focus</span>
            <span className={styles.brandDivider} />
            <span className={styles.ekoniva}>Эконива</span>
          </div>
        </div>

        <div className={styles.graphicBlock}>
          <div className={styles.bracketTL} />
          <div className={styles.bracketTR} />
          <div className={styles.bracketBR} />
          <div className={styles.bracketBL} />
          <div className={styles.innerLabel}>HF</div>
        </div>
      </div>
    </section>
  );
}
