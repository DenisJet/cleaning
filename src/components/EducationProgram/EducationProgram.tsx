import styles from './EducationProgram.module.css';

export default function EducationProgram() {
  return (
    <section className={styles.educationProgram}>
      <h2>Программа</h2>
      <p className={styles.title}>Программа учебного курса</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №1</p>
          <h3 className={styles.itemTitle}>Введение. Основы Клининга</h3>
          <p className={styles.text}>Урок 1. Основные направления в клининге и химчистке</p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №2</p>
          <h3 className={styles.itemTitle}>Химия, оборудование, инвентарь</h3>
          <p className={styles.text}>Урок 7. Основные правила подбора химии</p>
          <p className={styles.text}>Урок 8. Химия для Химчистки мягкой мебели и ковров</p>
          <p className={styles.text}>Урок 9. Оборудование и инвентарь для Химчистки</p>
          <p className={styles.text}>
            Урок 11. Материаловедение (Химчистка). Разбор всех видов обивки и тканей, техника безопасности
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №5</p>
          <h3 className={styles.itemTitle}>Технологические процессы</h3>
          <p className={styles.text}>Урок 13. Химчистка мягкой мебели (матрас, диван)</p>
          <p className={styles.text}>
            Урок 14. Удаление сложных загрязнений и запахов на мягкой мебели и ковровых покрытиях
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №7</p>
          <h3 className={styles.itemTitle}>Открытие клининговой компании с нуля</h3>
          <p className={styles.text}>Урок 3. Какую форму регистрации выбрать</p>
          <p className={styles.text}>Урок 15. Структура персонала (от новичка до профи)</p>
          <p className={styles.text}>Урок 17. Собеседования</p>
          <p className={styles.text}>Урок 19. Прием заказа, как закрыть звонок в заявку</p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №9</p>
          <h3 className={styles.itemTitle}>Начинаем бизнес</h3>
          <p className={styles.text}>Урок 22. Ценообразование и калькуляция</p>
          <p className={styles.text}>Урок 23. Оценка объектов чистки и вопросы перед химчисткой</p>
          <p className={styles.text}>Урок 24. Сбор на заказ Химчистка мебели (оборудование, инвентарь и химия)</p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №10</p>
          <h3 className={styles.itemTitle}>Маркетинг</h3>
          <p className={styles.text}>Урок 25. Где искать клиента (Где заявить о себе, чтобы клиент нашел нас сам)</p>
        </li>
        <li className={styles.item}>
          <p className={styles.module}>Модуль №12</p>
          <h3 className={styles.itemTitle}>Вопрос / Ответ</h3>
          <p className={styles.text}>Урок 27. Разбор форс-мажорных ситуаций</p>
        </li>
      </ul>
    </section>
  );
}
