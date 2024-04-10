import Intro from '@/components/Intro/Intro';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
}
