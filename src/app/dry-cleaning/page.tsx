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
import Benefits from '@/components/Benefits/Benefits';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Компания КлинингПрофи. Услуги по химчистке мягкой мебели',
  description:
    'КлинингПрофи. Профессиональные клининговые услуги по химчистке мягкой мебели, ковров, штор, портьер. Заказать химчистку мебели, ковров, штор, портьер. Химчистка мебели цена. Обучение химчистке мягкой мебели',
  openGraph: {
    url: '',
    title: 'Компания КлинингПрофи. Услуги по химчистке мягкой мебели',
    description:
      'КлинингПрофи. Профессиональные клининговые услуги по химчистке мягкой мебели, ковров, штор, портьер. Заказать химчистку мебели, ковров, штор, портьер. Химчистка мебели цена. Обучение химчистке мягкой мебели',
    type: 'website',
    images: '',
  },
  alternates: {
    canonical: '',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        <Benefits />
        <Gallery />
        <Reviews />
        <Consultation />
      </main>
    </>
  );
}
