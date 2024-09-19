import Link from 'next/link';
import styles from './page.module.css';

export default async function NotFound() {
  return (
    <div className={styles.main}>
      <p className={styles.notFound}>Страница не найдена</p>
    </div>
  );
}
