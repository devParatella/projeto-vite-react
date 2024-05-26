import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importa os ícones do FontAwesome
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

export function Footer(props) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#">
              <FaLinkedin /> Linkedin Marcos
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin /> Linkedin Mayra
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub /> GitHub Marcos
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub /> GitHub Mayra
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} {props.nomePagina}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
