'use client';
import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import Divider from '@/components/Divider/Divider';
import EducationAdvantages from '@/components/EducationAdvantages/EducationAdvantages';
import EducationResults from '@/components/EducationResults/EducationResults';

export default function Education() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.introTitle}>
                <span>Обучение клинингу и химчистке</span>
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

        <EducationResults />
      </main>
      <Modal />
    </>
  );
}
