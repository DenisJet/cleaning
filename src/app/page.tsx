'use client';
import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Services from '@/components/Services/Services';
import Advantages from '@/components/Advantages/Advantages';
import Benefits from '@/components/Benefits/Benefits';
import Consultation from '@/components/Consultation/Consultation';
import Gallery from '@/components/Gallery/Gallery';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <Intro onClick={() => setModalActive(true)} />
        <div className={styles.divider}></div>
        <Services onClick={() => setModalActive(true)} />
        <Advantages />
        <Benefits />
        <Gallery />
        <Consultation onClick={() => setModalActive(true)} />
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
