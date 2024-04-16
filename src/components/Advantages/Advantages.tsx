import styles from './Advantages.module.css';
import cn from 'classnames';

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <ul className={styles.advList}>
        <li className={cn(styles.advItem, styles.customers)}>
          <p className={styles.itemNumber}>1000+</p>
          <p className={styles.itemText}>Довольных клиентов</p>
        </li>
        <li className={cn(styles.advItem, styles.members)}>
          <p className={styles.itemNumber}>60+</p>
          <p className={styles.itemText}>Обученных специалистов</p>
        </li>
        <li className={cn(styles.advItem, styles.award)}>
          <p className={styles.itemNumber}>11</p>
          <p className={styles.itemText}>Лет опыта</p>
        </li>
        <li className={cn(styles.advItem, styles.project)}>
          <p className={styles.itemNumber}>40+</p>
          <p className={styles.itemText}>Филиалов по России</p>
        </li>
      </ul>
    </section>
  );
}
