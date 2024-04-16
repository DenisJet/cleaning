import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2>Преимущества</h2>
      <p className={styles.title}>Почему выбирают нас</p>
      <div className={styles.container}>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>Фиксируемая цена</h3>
            <p className={styles.itemText}>Стоимость не меняется в ходе работ, оплата любым удобным способом</p>
          </li>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>100% Сохранность</h3>
            <p className={styles.itemText}>Гарантируем полную сохранность вашего имущества</p>
          </li>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>Безопасные средства</h3>
            <p className={styles.itemText}>Сертифицированная химия, безопасная для людей и домашних животных</p>
          </li>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>Опытный персонал</h3>
            <p className={styles.itemText}>Все наши сотрудники проходят обучение и имеют опыт работы</p>
          </li>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>100% Гарантия качества</h3>
            <p className={styles.itemText}>Гарантируем высокое качество услуг. Работаем на результат!</p>
          </li>
          <li className={styles.benefitsItem}>
            <h3 className={styles.itemTitle}>Современное оборудование</h3>
            <p className={styles.itemText}>Качественное оборудование для создания идеальной чистоты</p>
          </li>
        </ul>
        <div className={styles.imageList}>
          <div className={styles.imageItem}></div>
          <div className={styles.imageItem}></div>
          <div className={styles.imageItem}></div>
          <div className={styles.imageItem}></div>
        </div>
      </div>
    </section>
  );
}
