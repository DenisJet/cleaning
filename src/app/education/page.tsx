import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Divider from '@/components/Divider/Divider';
import EducationAdvantages from '@/components/EducationAdvantages/EducationAdvantages';
import EducationTarif from '@/components/EducationTarif/EducationTarif';
import { educationTarif } from '@/components/EducationTarif/tarif';
import EducationProgram from '@/components/EducationProgram/EducationProgram';
import Consultation from '@/components/Consultation/Consultation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Компания КлинингПрофи. Обучение клинингу и химчистке мягкой мебели.',
  description: 'КлинингПрофи. Обучение клинингу и химчистке мягкой мебели. Откройте свой бизнес по клинингу.',
  openGraph: {
    url: '',
    title: 'Компания КлинингПрофи. Обучение клинингу и химчистке мягкой мебели.',
    description: 'КлинингПрофи. Обучение клинингу и химчистке мягкой мебели. Откройте свой бизнес по клинингу.',
    type: 'website',
    images: '',
  },
  alternates: {
    canonical: 'https://cleaning-proffi.ru/education/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Education() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.introTitle}>
                <span>Обучение по клинингу и химчистке</span>
                <br></br>от собственников клининговой компании
              </h1>
              <p className={styles.introText}>
                Имеем практические знания и опыт, для того что бы научить и помочь Вам открыть свой успешный бизнес по
                клинингу, в любом городе России.
              </p>
              <Button />
            </div>
            <div className={styles.imageContainer}></div>
          </div>
        </section>
        <Divider />
        <EducationAdvantages />
        <EducationProgram />
        <EducationTarif educationTarif={educationTarif} />
        <Consultation />
      </main>
    </>
  );
}
