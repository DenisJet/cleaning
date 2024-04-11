'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const useOutsideClick = (initialValue: boolean) => {
  const [isOpened, setIsOpened] = useState(initialValue);
  const ref = useRef<HTMLElement>(null);

  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpened(!isOpened);
      clearAllBodyScrollLocks();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { ref, isOpened, setIsOpened };
};

export default function Header(): JSX.Element {
  const [activeLink, setActiveLink] = useState('/');
  const { ref, isOpened, setIsOpened } = useOutsideClick(false);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);

    if (!isOpened) {
      disableBodyScroll(ref);
    }
    if (isOpened) {
      enableBodyScroll(ref);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} href='/' onClick={() => setIsOpened(false)}>
          <img src='logo.png' alt='логотип' />
          <span>CleaningProfi</span>
        </Link>
        <nav className={styles.nav}>
          <Link
            className={cn(styles.navLink, {
              [styles.activeLink]: activeLink === '/',
            })}
            href='/'
            onClick={() => setActiveLink('/')}
          >
            Клининг
          </Link>
          <Link
            className={cn(styles.navLink, {
              [styles.activeLink]: activeLink === '/dry-cleaning',
            })}
            href='/dry-cleaning'
            onClick={() => setActiveLink('/dry-cleaning')}
          >
            Химчистка
          </Link>
          <Link
            className={cn(styles.navLink, {
              [styles.activeLink]: activeLink === '/about',
            })}
            href='/about'
            onClick={() => setActiveLink('/about')}
          >
            О компании
          </Link>
          <Link
            className={cn(styles.navLink, {
              [styles.activeLink]: activeLink === '/education',
            })}
            href='/education'
            onClick={() => setActiveLink('/education')}
          >
            Обучение
          </Link>
          <Link className={styles.tel} href='tel:+79999999999'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.66871 3.40483C10.3221 3.53231 10.9226 3.85186 11.3933 4.32259C11.8641 4.79332 12.1836 5.39381 12.3111 6.04721M9.66871 0.729004C11.0262 0.879811 12.2921 1.48772 13.2585 2.45291C14.2249 3.4181 14.8344 4.68321 14.9869 6.04052M14.318 11.3788V13.3857C14.3187 13.572 14.2805 13.7564 14.2059 13.9271C14.1313 14.0978 14.0218 14.251 13.8845 14.377C13.7472 14.5029 13.5852 14.5988 13.4087 14.6585C13.2322 14.7182 13.0452 14.7403 12.8596 14.7236C10.8011 14.4999 8.82382 13.7965 7.08654 12.6699C5.47022 11.6428 4.09987 10.2725 3.0728 8.65614C1.94225 6.91097 1.23868 4.92403 1.0191 2.85629C1.00238 2.6713 1.02437 2.48485 1.08366 2.30883C1.14294 2.1328 1.23823 1.97105 1.36346 1.83387C1.48868 1.69668 1.6411 1.58708 1.81101 1.51203C1.98091 1.43698 2.16458 1.39814 2.35033 1.39796H4.35719C4.68184 1.39477 4.99658 1.50973 5.24273 1.72142C5.48889 1.93312 5.64967 2.2271 5.69511 2.54857C5.77981 3.19081 5.9369 3.82141 6.16338 4.42833C6.25338 4.66777 6.27286 4.92799 6.21951 5.17815C6.16615 5.42832 6.0422 5.65795 5.86235 5.83983L5.01277 6.68941C5.96507 8.36417 7.35175 9.75085 9.02651 10.7031L9.87608 9.85357C10.058 9.67371 10.2876 9.54976 10.5378 9.49641C10.7879 9.44306 11.0481 9.46254 11.2876 9.55254C11.8945 9.77901 12.5251 9.9361 13.1674 10.0208C13.4923 10.0667 13.7891 10.2303 14.0012 10.4807C14.2134 10.7311 14.3261 11.0507 14.318 11.3788Z'
                stroke='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            8 999 999 99 99
          </Link>
        </nav>
        {isOpened ? (
          <nav ref={ref} className={styles.navMobile}>
            <Link className={styles.navMobileLink} onClick={() => setIsOpened(false)} href='/'>
              Клининг
            </Link>
            <Link className={styles.navMobileLink} onClick={() => setIsOpened(false)} href='/dry-cleaning'>
              Химчистка
            </Link>
            <Link className={styles.navMobileLink} onClick={() => setIsOpened(false)} href='/about'>
              О компании
            </Link>
            <Link className={styles.navMobileLink} onClick={() => setIsOpened(false)} href='/education'>
              Обучение
            </Link>
            <Link className={styles.tel} href='tel:+79999999999' onClick={() => setIsOpened(false)}>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.66871 3.40483C10.3221 3.53231 10.9226 3.85186 11.3933 4.32259C11.8641 4.79332 12.1836 5.39381 12.3111 6.04721M9.66871 0.729004C11.0262 0.879811 12.2921 1.48772 13.2585 2.45291C14.2249 3.4181 14.8344 4.68321 14.9869 6.04052M14.318 11.3788V13.3857C14.3187 13.572 14.2805 13.7564 14.2059 13.9271C14.1313 14.0978 14.0218 14.251 13.8845 14.377C13.7472 14.5029 13.5852 14.5988 13.4087 14.6585C13.2322 14.7182 13.0452 14.7403 12.8596 14.7236C10.8011 14.4999 8.82382 13.7965 7.08654 12.6699C5.47022 11.6428 4.09987 10.2725 3.0728 8.65614C1.94225 6.91097 1.23868 4.92403 1.0191 2.85629C1.00238 2.6713 1.02437 2.48485 1.08366 2.30883C1.14294 2.1328 1.23823 1.97105 1.36346 1.83387C1.48868 1.69668 1.6411 1.58708 1.81101 1.51203C1.98091 1.43698 2.16458 1.39814 2.35033 1.39796H4.35719C4.68184 1.39477 4.99658 1.50973 5.24273 1.72142C5.48889 1.93312 5.64967 2.2271 5.69511 2.54857C5.77981 3.19081 5.9369 3.82141 6.16338 4.42833C6.25338 4.66777 6.27286 4.92799 6.21951 5.17815C6.16615 5.42832 6.0422 5.65795 5.86235 5.83983L5.01277 6.68941C5.96507 8.36417 7.35175 9.75085 9.02651 10.7031L9.87608 9.85357C10.058 9.67371 10.2876 9.54976 10.5378 9.49641C10.7879 9.44306 11.0481 9.46254 11.2876 9.55254C11.8945 9.77901 12.5251 9.9361 13.1674 10.0208C13.4923 10.0667 13.7891 10.2303 14.0012 10.4807C14.2134 10.7311 14.3261 11.0507 14.318 11.3788Z'
                  stroke='#292929'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              8 999 999 99 99
            </Link>
          </nav>
        ) : (
          ''
        )}
        {isOpened ? (
          <button className={styles.button} type='button' title='close menu' onClick={handleButtonClick}>
            <svg width='32' height='32' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
                fill='#555555'
              ></path>
            </svg>
          </button>
        ) : (
          <button className={styles.button} type='button' title='open menu' onClick={handleButtonClick}>
            <svg width='32' height='32' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.016 3.05h14v2h-14v-2zm0 4h14v2h-14v-2zm14 4h-14v2h14v-2z'
                fill='#555555'
              ></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
