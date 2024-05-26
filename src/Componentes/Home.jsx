// Componentes/Home.jsx
import PropTypes from "prop-types";
import { Carousel } from "./Carousel";
import { CardGrid } from "./CardGrid";
import styles from "./Home.module.css";
import { SideSectionL } from "./SideSectionL";
import { SideSectionR } from "./SideSectionR";
import Card01 from "../assets/IMG/Card-01.png";
import Card02 from "../assets/IMG/Card-02.png";
import Card03 from "../assets/IMG/Card-03.png";
import Card04 from "../assets/IMG/Card-04.png";
import Card05 from "../assets/IMG/Card-05.png";
import Card06 from "../assets/IMG/Card-06.png";
import Card07 from "../assets/IMG/Card-07.png";

const cards = [
  {
    imageSrc: Card01,
    text: "As Melhores",
  },
  {
    imageSrc: Card02,
    text: "Tecnologias",
  },
  {
    imageSrc: Card03,
    text: "No desenvolvimento",
  },
  {
    imageSrc: Card04,
    text: "da T.I",
  },
  {
    imageSrc: Card05,
    text: "Ampliando",
  },
  {
    imageSrc: Card06,
    text: "e Melhorando",
  },
  {
    imageSrc: Card07,
    text: "Nosso Futuro",
  },
];

export const Home = ({ nomePagina }) => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>{nomePagina}</h1>
      <div className={styles.carouselContainer}>
        <SideSectionL text="Lateral Esquerda" className={styles.sideSection} />
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <SideSectionR text="Lateral Direita" className={styles.sideSection} />
      </div>

      <div className={styles.cardsContainer}>
        <CardGrid cards={cards} />
      </div>
    </div>
  );
};

Home.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
