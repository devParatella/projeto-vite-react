import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export const Card = ({ imageSrc, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleMouseEnter = () => {
    setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    setIsCollapsed(true);
  };
  return (
    <div
      className={`${styles.card} ${isCollapsed ? "" : styles.collapsed}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={styles.cardText}>{text}</p>
      <img
        src={imageSrc}
        alt={text}
        className={styles.cardImage}
        width="150"
        height="150"
      />

      
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
