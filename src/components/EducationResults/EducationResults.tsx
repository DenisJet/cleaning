import styles from './EducationResults.module.css';

export default function EducationResults() {
  return (
    <section className={styles.benefits}>
      <h2>Результат</h2>
      <p className={styles.title}>Что вы получите в результате</p>
      <div className={styles.container}>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>Компанию по выездному клинингу и химчистке вложив всего 80 тыс. руб.</p>
          </li>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>Научитесь правильной калькуляции и управлением экономикой</p>
          </li>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>Узнаете как получить свои первые заявки и настроите трафик</p>
          </li>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>Изучите инвентарь, разбор всей химии и оборудования</p>
          </li>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>Разберем технологию химчистки - практика и теория</p>
          </li>
          <li className={styles.benefitsItem}>
            <p className={styles.itemText}>У Вас будет сайт и настроенная реклама в Яндекс</p>
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
