import PropTypes from 'prop-types';
import styles from './SideSectionLR.module.css';

export const SideSectionR = ({ text, sidePR }) => {
  return (
    <div className={styles.sideSection}>
      <p>{text}</p>
      <section>
        <p className={styles.sideSectionP}>
        {sidePR}
        </p>
      </section>
    </div>
  );
};

SideSectionR.propTypes = {
  text: PropTypes.string.isRequired,
  sidePR: PropTypes.string.isRequired,
};
