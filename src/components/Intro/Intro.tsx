import Button from '../Button/Button';
import styles from './Intro.module.css';

export default function Intro(): JSX.Element {
  return (
    <section className={styles.intro}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Услуги клининга для частных и юридических лиц</h1>
          <p className={styles.title}>
            <span>Легко уберем</span>
            <br></br> дом или офис
          </p>
          <p className={styles.text}>
            Уборка помещений любой сложности! Профессиональная химчистка мягкой мебели, ковров, штор, портьер,
            автомобиля! Обучение!
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
