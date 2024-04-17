'use client';
import Consultation from '@/components/Consultation/Consultation';
import styles from './page.module.css';
import Divider from '@/components/Divider/Divider';
import Button from '@/components/Button/Button';
import Services from '@/components/Services/Services';
import { dryCleaningServices } from '@/components/Services/cleaning.services';
import Gallery from '@/components/Gallery/Gallery';
import Advantages from '@/components/Advantages/Advantages';
import Link from 'next/link';
import Reviews from '@/components/Reviews/Reviews';

export default function DryCleaning() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                <span>Профессиональная химчистка</span>
                <br></br>любой сложности
              </h1>
              <p className={styles.text}>
                <span>
                  Профессиональная химчистка мягкой мебели, ковров, штор, портьер, матрасов, автомобиля! Выведение пятен
                  и запахов. Работаем с деликатными тканями и мебелью премиум класса.
                </span>
              </p>
              <p className={styles.text}>
                <Link className={styles.link} href='/education'>
                  <span className={styles.red}>Обучение химчистке и клинингу!</span>
                </Link>
              </p>
              <Button />
            </div>
            <div className={styles.imageContainer}></div>
          </div>
        </section>
        <Divider />
        <Services services={dryCleaningServices} />
        <Advantages />
        <Gallery />
        <Reviews />
        <Consultation />
      </main>
    </>
  );
}
