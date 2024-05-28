import PropTypes from "prop-types";
import styles from "./Contato.module.css";

export const Contato = ({ nomePagina }) => {
  return (
    <div className={styles.contatoContainer}>
      <h1 className={styles.contatoTitle}>{nomePagina}</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

Contato.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
