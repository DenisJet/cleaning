import styles from './EducationAdvantages.module.css';

export default function EducationAdvantages() {
  return (
    <section className={styles.educationAdvantages}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Видео уроки и созвоны</h3>
          <p className={styles.text}>Постоянные видео созвоны, а так же 25 видео уроков, более 7 часов информации</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Документация</h3>
          <p className={styles.text}>Весь необходимый пакет документов для оказания услуг и найма сотрудников</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Готовый сайт</h3>
          <p className={styles.text}>Готовый сайт Клининговой компании + рекламная компания в Яндекс.Директе</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сопровождение</h3>
          <p className={styles.text}>Сопровождение в течение месяца, с разбором всех вопросов (в тарифе VIP)</p>
        </li>
      </ul>
    </section>
  );
}
