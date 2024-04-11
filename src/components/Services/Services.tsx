import Button from '../Button/Button';
import styles from './Services.module.css';

interface ServicesProps {
  onClick?: () => void;
}

export default function Services({ onClick }: ServicesProps): JSX.Element {
  return (
    <section className={styles.services}>
      <h2>Наши услуги</h2>
      <p className={styles.title}>Что мы предлогаем</p>
      <ul className={styles.servicesList}>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Уборка домов и квартир</h3>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Клининг кафе и ресторанов</h3>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Уборка офисов и производственных помещений</h3>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Химчистка мягкой мебели, ковров, штор...</h3>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Мойка окон и балконов</h3>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Мойка фасадов и витрин</h3>
          <Button onClick={onClick} />
        </li>
      </ul>
    </section>
  );
}
