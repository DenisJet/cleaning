import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
}

export default function Button({ onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} type='button' onClick={onClick}>
      Оставить заявку
    </button>
  );
}
