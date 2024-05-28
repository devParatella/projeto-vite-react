import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from './Carousel.module.css';

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.leftArrow}>
        &#9664;
      </button>
      <div className={styles.imageContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
      <button onClick={nextSlide} className={styles.rightArrow}>
        &#9654;
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
