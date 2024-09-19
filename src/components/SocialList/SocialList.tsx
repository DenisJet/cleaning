import Link from 'next/link';
import styles from './SocialList.module.css';
export default function SocialList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.link} href='https://vk.com/danpower174' target='_blank'>
          <img className={styles.image} src='icon-vk.svg' alt='иконка соцсети' />
        </Link>
      </li>
      <li>
        <Link className={styles.link} href='https://t.me/Dan_Power174' target='_blank'>
          <img className={styles.image} src='icon-tg.svg' alt='иконка соцсети' />
        </Link>
      </li>
      <li>
        <Link className={styles.link} href='https://wa.me/+79512708525' target='_blank'>
          <img className={styles.image} src='icon-wa.svg' alt='иконка соцсети' />
        </Link>
      </li>
    </ul>
  );
}
