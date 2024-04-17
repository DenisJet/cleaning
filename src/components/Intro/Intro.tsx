import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Intro.module.css';

export default function Intro(): JSX.Element {
  return (
    <section className={styles.intro}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Услуги клининга и химчистки</span>
            <br></br>для физических и юридических лиц
          </h1>
          <p className={styles.text}>
            Уборка помещений любой сложности! Профессиональная химчистка мягкой мебели, ковров, штор, портьер,
            автомобиля! Обучение!
          </p>
          <p className={styles.text}>
            <Link className={styles.link} href='/education'>
              <span className={styles.red}>Обучение химчистке и клинингу!</span>
            </Link>
          </p>
          <Button />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.stars1}></div>
          <div className={styles.stars2}></div>
        </div>
      </div>
    </section>
  );
}
