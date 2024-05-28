import PropTypes from "prop-types";
import { Carousel } from "./Carousel";
import { CardGrid } from "./CardGrid";
import styles from "./Produtos.module.css";
import { SideSectionL } from "./SideSectionL";
import { SideSectionR } from "./SideSectionR";
import Prod01 from "../assets/IMG/Prod-01.png";
import Prod02 from "../assets/IMG/Prod-02.png";
import Prod03 from "../assets/IMG/Prod-03.png";
import carouselImg1 from "../assets/IMG/carousel1.jpg";
import carouselImg2 from "../assets/IMG/carousel2.jpg";
import carouselImg3 from "../assets/IMG/carousel3.jpg";

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const cards = [
  {
    imageSrc: Prod01,
    text: "Produto 1",
  },
  {
    imageSrc: Prod02,
    text: "Produto 2",
  },
  {
    imageSrc: Prod03,
    text: "Produto 3",
  },

];

export const Produtos = ({ nomePagina }) => {
  return (
    <div className={styles.produtosContainer}>
      <h1 className={styles.produtosTitle}>{nomePagina}</h1>
      <div className={styles.Container}>
        <SideSectionL
          text="Qualidade Garantida"
          sidePL="Todos os nossos produtos passam por rigorosos testes de qualidade para garantir a satisfação total dos nossos clientes. Trabalhamos com as melhores matérias-primas e fornecedores de confiança."
          className={styles.sideSection}
        />
        <div className={styles.carousel}>
          <Carousel images={carouselImages} />
        </div>
        <SideSectionR
          text="Tecnologia de Ponta"
          sidePR="Utilizamos tecnologia de ponta no desenvolvimento dos nossos produtos, garantindo alta durabilidade e desempenho superior. Estamos sempre inovando para trazer o que há de melhor no mercado."
          className={styles.sideSection}
        />
      </div>
      <div className={styles.cardsContainer}>
        <CardGrid cards={cards} />
      </div>
    </div>
  );
};

Produtos.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
