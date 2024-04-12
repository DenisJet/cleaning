'use client';
import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Services from '@/components/Services/Services';
import Advantages from '@/components/Advantages/Advantages';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <Intro onClick={() => setModalActive(true)} />
        <div className={styles.divider}></div>
        <Services onClick={() => setModalActive(true)} />
        <Advantages />
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
