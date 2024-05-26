import PropTypes from "prop-types";
import { Card } from './Card';
import styles from './CardGrid.module.css';

export const CardGrid = ({ cards }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} text={card.text} />
      ))}
    </div>
  );
};

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
