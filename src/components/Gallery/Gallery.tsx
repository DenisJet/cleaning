'use client';
import styles from './Gallery.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallery() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className={styles.gallery}>
      <h2>Галерея</h2>
      <p className={styles.title}>Наши последние работы</p>
      <div className='slider-container'>
        <Slider {...settings}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal1.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal2.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal3.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal4.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal5.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal6.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal7.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal8.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal9.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal10.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal11.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal12.png' alt='Фото работ' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/gallery/gal13.png' alt='Фото работ' />
          </div>
        </Slider>
      </div>
    </section>
  );
}
