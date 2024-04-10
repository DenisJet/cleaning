import styles from './Button.module.css';

export default function Button() {
  return (
    <button className={styles.button} type='button'>
      Оставить заявку
    </button>
  );
}
