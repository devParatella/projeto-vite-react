import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
        <li>
          <Link className={styles.linkmenu} to="./">
            HOME
          </Link>
        </li>
        <li>
          <Link className={styles.linkmenu} to="./Produtos">
            PRODUTOS
          </Link>
        </li>
        <li>
          <Link className={styles.linkmenu} to="./Contato">
            CONTATO
          </Link>
        </li>
        <li>
          <Link className={styles.linkmenu} to="./Sobre">
            SOBRE
          </Link>
        </li>
      </ul>
    </header>
  );
}
