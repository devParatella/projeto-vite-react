import PropTypes from 'prop-types';
import styles from './SideSectionLR.module.css';

export const SideSectionL = ({ text }) => {
  return (
    <div className={styles.sideSection}>
      <p>{text}</p>
      <section>
        <p className={styles.sideSectionP}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quod iusto rem esse 
        </p>
      </section>
    </div>
  );
};

SideSectionL.propTypes = {
  text: PropTypes.string.isRequired,
};
