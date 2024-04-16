import Button from '../Button/Button';
import styles from './Consultation.module.css';

export default function Consultation(): JSX.Element {
  return (
    <section className={styles.consultation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Нужна консультация по расчету услуг?</h2>
        <Button className={styles.button} />
      </div>
    </section>
  );
}
