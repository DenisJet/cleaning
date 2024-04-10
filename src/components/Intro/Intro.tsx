import Button from '../Button/Button';
import styles from './Intro.module.css';

interface IntroProps {
  onClick?: () => void;
}

export default function Intro({ onClick }: IntroProps): JSX.Element {
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
          <Button onClick={onClick} />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.stars1}></div>
          <div className={styles.stars2}></div>
        </div>
      </div>
    </section>
  );
}
