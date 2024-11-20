import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      {' '}
      <h2>Отзывы</h2>
      <p className={styles.title}>Что говорят о нас клиенты</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <video
            className={styles.video}
            width='320'
            height='240'
            controls
            preload='none'
            poster='/reviews/posters/2.png'
          >
            <source src='/reviews/Отзыв _ Уборка.mp4' type='video/mp4' />
          </video>
        </li>
        <li className={styles.item}>
          <video
            className={styles.video}
            width='320'
            height='240'
            controls
            preload='none'
            poster='/reviews/posters/1.png'
          >
            <source src='/reviews/Отзыв _ Химчистка дивана и ковра.mp4' type='video/mp4' />
          </video>
        </li>
        <li className={styles.item}>
          <video
            className={styles.video}
            width='320'
            height='240'
            controls
            preload='none'
            poster='/reviews/posters/3.png'
          >
            <source src='/reviews/Отзыв клиента _ Химчистка дивана.mp4' type='video/mp4' />
          </video>
        </li>
      </ul>
    </section>
  );
}
