import Button from '../Button/Button';
import { Service } from './cleaning.services';
import styles from './Services.module.css';

interface ServicesProps {
  onClick?: () => void;
  services: Service[];
}

export default function Services({ onClick, services }: ServicesProps): JSX.Element {
  return (
    <section className={styles.services}>
      <h2>Наши услуги</h2>
      <p className={styles.title}>Что мы предлогаем</p>
      <ul className={styles.servicesList}>
        {services &&
          services.length &&
          services.map((service) => (
            <li key={service.id} className={styles.servicesItem}>
              <h3 className={styles.itemTitle}>{service.title}</h3>
              <p className={styles.itemText}>{service.text}</p>
              <Button onClick={onClick} />
            </li>
          ))}
      </ul>
    </section>
  );
}
