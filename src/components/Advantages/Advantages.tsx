import styles from './Advantages.module.css';
import cn from 'classnames';

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <ul className={styles.advList}>
        <li className={cn(styles.advItem, styles.customers)}>
          <p className={styles.itemNumber}>567+</p>
          <p className={styles.itemText}>Довольных клиентов</p>
        </li>
        <li className={cn(styles.advItem, styles.members)}>
          <p className={styles.itemNumber}>48</p>
          <p className={styles.itemText}>Обученных специалистов</p>
        </li>
        <li className={cn(styles.advItem, styles.award)}>
          <p className={styles.itemNumber}>26</p>
          <p className={styles.itemText}>Наград получено</p>
        </li>
        <li className={cn(styles.advItem, styles.project)}>
          <p className={styles.itemNumber}>759+</p>
          <p className={styles.itemText}>Проектов завершено</p>
        </li>
      </ul>
    </section>
  );
}
