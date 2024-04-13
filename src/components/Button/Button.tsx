import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function Button({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button className={cn(styles.button, className)} type='button' onClick={onClick}>
      Оставить заявку
    </button>
  );
}
