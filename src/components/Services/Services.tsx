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
          <p className={styles.itemText}>
            Уборка производится специалистом по чек-листу. Можем выполнить любую услугу на Ваш выбор
          </p>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Клининг кафе и ресторанов</h3>
          <p className={styles.itemText}>
            Чистота - один из ключевых аспектов успешного развития бизнеса в кафе и ресторанах
          </p>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Уборка офисов и производственных помещений</h3>
          <p className={styles.itemText}>Производим профессиональный клининг коммерческой недвижимости.</p>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Химчистка мягкой мебели, ковров, штор</h3>
          <p className={styles.itemText}>Знаем всё о том, как поддерживать чистоту мягкой мебели, ковров и штор</p>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Мойка окон и балконов</h3>
          <p className={styles.itemText}>Полный спектр услуг по мойке окон и балконов в офисах и квартирах</p>
          <Button onClick={onClick} />
        </li>
        <li className={styles.servicesItem}>
          <h3 className={styles.itemTitle}>Мойка фасадов и витрин</h3>
          <p className={styles.itemText}>Мойка внешних стеклянных поверхностей: витрин, фасадов, стеллажей</p>
          <Button onClick={onClick} />
        </li>
      </ul>
    </section>
  );
}
