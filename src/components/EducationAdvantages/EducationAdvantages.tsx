import styles from './EducationAdvantages.module.css';

export default function EducationAdvantages() {
  return (
    <section className={styles.educationAdvantages}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Индивидуальное и групповое обучение</h3>
          <p className={styles.text}>Возможность обучаться он-лайн, а так же при личных встречах</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Готовый сайт</h3>
          <p className={styles.text}>Готовый сайт Клининговой компании + рекламная компания в Яндекс.Директе</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Помощь</h3>
          <p className={styles.text}>В выборе и покупке оборудования, химии, инвентаря</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сопровождение</h3>
          <p className={styles.text}>В течение месяца, с разбором любых вопросов</p>
        </li>
      </ul>
    </section>
  );
}
