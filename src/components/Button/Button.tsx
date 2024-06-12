'use client';
import { ReactNode, useContext } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { ModalContext } from '@/context/modal.context';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export default function Button({ children = 'Оставить заявку', className, type = 'button' }: ButtonProps): JSX.Element {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <button className={cn(styles.button, className)} type={type} onClick={() => setIsOpen(true)}>
      {children}
    </button>
  );
}
