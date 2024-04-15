import Button from '../Button/Button';
import styles from './Consultation.module.css';

export default function Consultation(): JSX.Element {
  return (
    <section className={styles.consultation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Нужна консультация по расчету клининга?</h2>
        <p className={styles.text}>
          Наш менеджер быстро сделает расчет стоимости услуг в квартирах, домах, офисах, на промышленных и
          производственных предприятиях, а также в коттеджных комплексах. Приводим в порядок зоны отдыха,
          конференц-залы, объекты общественного пользования.
        </p>
        <Button className={styles.button} />
      </div>
    </section>
  );
}
