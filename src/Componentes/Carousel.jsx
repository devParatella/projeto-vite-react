import { useState, useEffect, useCallback } from "react";
import styles from './Carousel.module.css';
import kanban01 from '../assets/IMG/kanban01.jpg';
import kanban02 from '../assets/IMG/kanban02.jpg';
import kanban03 from '../assets/IMG/kanban03.jpg';

const images = [kanban01, kanban02, kanban03];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

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
