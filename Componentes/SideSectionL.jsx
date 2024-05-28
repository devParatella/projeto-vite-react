import PropTypes from 'prop-types';
import styles from './SideSectionLR.module.css';

export const SideSectionL = ({ text, sidePL }) => {
  return (
    <div className={styles.sideSection}>
      <p>{text}</p>
      <section>
        <p className={styles.sideSectionP}>
        {sidePL}
        </p>
      </section>
    </div>
  );
};

SideSectionL.propTypes = {
  text: PropTypes.string.isRequired,
  sidePL: PropTypes.string.isRequired,
};
