'use client';
import Consultation from '@/components/Consultation/Consultation';
import styles from './page.module.css';
import Divider from '@/components/Divider/Divider';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Services from '@/components/Services/Services';
import { dryCleaningServices } from '@/components/Services/cleaning.services';

export default function DryCleaning() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
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
              <Button onClick={() => setModalActive(true)} />
            </div>
            <div className={styles.imageContainer}></div>
          </div>
        </section>
        <Divider />
        <Services services={dryCleaningServices} onClick={() => setModalActive(true)} />
        <Consultation />
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
