'use client';
import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <Intro onClick={() => setModalActive(true)} />
        <div className={styles.divider}></div>
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
