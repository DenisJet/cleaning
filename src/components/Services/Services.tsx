import Button from '../Button/Button';
import { Service } from './cleaning.services';
import styles from './Services.module.css';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps): JSX.Element {
  return (
    <section className={styles.services}>
      <h2>Наши услуги</h2>
      <p className={styles.title}>Что мы предлагаем</p>
      <ul className={styles.servicesList}>
        {services &&
          services.length &&
          services.map((service) => (
            <li key={service.id} className={styles.servicesItem}>
              <img
                className={styles.servicesImage}
                src={service.imageUrl}
                alt='фото услуги'
                width='300px'
                height='300px'
              />
              <div className={styles.textItemContainer}>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemText}>{service.text}</p>
                <Button />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
