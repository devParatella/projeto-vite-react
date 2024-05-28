import { FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

export function Footer(props) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>Marcos Paratella
            <a href="#">
              <FaLinkedin /> Linkedin
            </a>
            <a href="#">
              <FaGithub /> GitHub
            </a>
          </li>
          <li>Rio Pomba Valley</li>
          <li>Mayra Pacheco
            <a href="#">
              <FaLinkedin /> Linkedin
            </a>
            <a href="#">
              <FaGithub /> GitHub
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
