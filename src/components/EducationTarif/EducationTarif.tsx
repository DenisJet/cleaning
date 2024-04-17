import Button from '../Button/Button';
import styles from './EducationTarif.module.css';
import { Tarif } from './tarif';

interface EducationTarifProps {
  educationTarif: Tarif[];
}

export default function EducationTarif({ educationTarif }: EducationTarifProps): JSX.Element {
  return (
    <section className={styles.services}>
      <h2>Тариф</h2>
      <p className={styles.title}>Выберите тарифный план</p>
      <ul className={styles.servicesList}>
        {educationTarif &&
          educationTarif.length &&
          educationTarif.map((tarif) => (
            <li key={tarif.id} className={styles.servicesItem}>
              <div className={styles.textItemContainer}>
                <h3 className={styles.itemTitle}>{tarif.title}</h3>
                <p className={styles.oldPrice}>
                  <del>{tarif.oldPrice} ₽</del>
                </p>
                <p className={styles.newPrice}>{tarif.newPrice} ₽</p>
                <ul className={styles.pointsList}>
                  {tarif.points.map((item, index) => (
                    <li className={styles.pointsItem} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
