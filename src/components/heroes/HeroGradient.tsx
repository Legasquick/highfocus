import styles from './HeroGradient.module.css';

export default function HeroGradient() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />
      <div className={styles.bgShape3} />

      <svg className={styles.frameWatermark} viewBox="0 0 700 520" preserveAspectRatio="none">
        <path className={styles.watermarkCorner} d="M 0,70 L 0,0 L 70,0" />
        <path className={styles.watermarkCorner} d="M 630,0 L 700,0 L 700,70" />
        <path className={styles.watermarkCorner} d="M 700,450 L 700,520 L 630,520" />
        <path className={styles.watermarkCorner} d="M 70,520 L 0,520 L 0,450" />
      </svg>

      <div className={styles.card}>
        <span className={styles.eyebrow}>Стратегия запуска</span>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Методология</span>
          <span className={styles.titleLine}>Бюджетирования</span>
        </h1>
        <div className={styles.divider} />
        <p className={styles.subtitle}>
          <span className={styles.brand}>High Focus</span>{' '}
          <span className={styles.ekoniva}>× Эконива</span>
        </p>
        <p className={styles.tagline}>
          Напиток для тех, кто работает головой
        </p>
        <div className={styles.flavors}>
          <span className={styles.dot} style={{ background: '#f1edb9' }} title="Груша-пармезан" />
          <span className={styles.dot} style={{ background: '#efe1d4' }} title="Брауни" />
          <span className={styles.dot} style={{ background: '#ebc690' }} title="Соленая карамель" />
        </div>
      </div>
    </section>
  );
}
