import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <h1 className={styles.title}>
          <span>О компании</span> «КлинингПрофи»
        </h1>
        <h2>Тут будет видео</h2>
      </section>
    </main>
  );
}
