'use client';
import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import Services from '@/components/Services/Services';
import Advantages from '@/components/Advantages/Advantages';
import Benefits from '@/components/Benefits/Benefits';
import Consultation from '@/components/Consultation/Consultation';
import Gallery from '@/components/Gallery/Gallery';
import Divider from '@/components/Divider/Divider';
import { cleaningServices } from '@/components/Services/cleaning.services';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
        <Divider />
        <Services services={cleaningServices} />
        <Advantages />
        <Benefits />
        <Gallery />
        <Consultation />
      </main>
      <Modal />
    </>
  );
}
