import Consultation from '@/components/Consultation/Consultation';
import styles from './page.module.css';
import Divider from '@/components/Divider/Divider';
import Button from '@/components/Button/Button';

export default function DryCleaning() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span>Профессиональная химчистка</span>
              <br></br>любых предметов интерьера
            </h1>
            <p className={styles.text}>
              Профессиональная химчистка мягкой мебели, ковров, штор, портьер, автомобиля! Уборка помещений любой
              сложности! Обучение!
            </p>
            <Button />
          </div>
          <div className={styles.imageContainer}></div>
        </div>
      </section>
      <Divider />
      <Consultation />
    </main>
  );
}
