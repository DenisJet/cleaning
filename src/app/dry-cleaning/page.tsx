import Consultation from '@/components/Consultation/Consultation';
import styles from './page.module.css';
import Divider from '@/components/Divider/Divider';

export default function DryCleaning() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.container}>
          <h1>
            <span>Профессиональная химчистка</span>
            <br></br>любых предметов интерьера
          </h1>
          <p>
            Профессиональная химчистка мягкой мебели, ковров, штор, портьер, автомобиля! Уборка помещений любой
            сложности! Обучение!
          </p>
        </div>
        <Divider />
        <Consultation />
      </section>
    </main>
  );
}
