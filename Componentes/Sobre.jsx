import PropTypes from "prop-types";
import { Carousel } from "./Carousel";
import { CardGrid } from "./CardGrid";
import styles from "./Sobre.module.css";
import { SideSectionL } from "./SideSectionL";
import { SideSectionR } from "./SideSectionR";
import sobreImg1 from "../assets/IMG/sobre1.jpg";
import sobreImg2 from "../assets/IMG/sobre2.jpg";
import sobreImg3 from "../assets/IMG/sobre3.jpg";
import Card01 from "../assets/IMG/Card-01.png";
import Card02 from "../assets/IMG/Card-02.png";

const carouselImages = [sobreImg1, sobreImg2, sobreImg3];

const cards = [
  {
    imageSrc: Card01,
    text: "Nossa História",
  },
  {
    imageSrc: Card02,
    text: "Nossa Missão",
  },
];

export const Sobre = ({ nomePagina }) => {
  return (
    <div className={styles.sobreContainer}>
      <h1 className={styles.sobreTitle}>{nomePagina}</h1>
      <div className={styles.Container}>
        <SideSectionL
          text="Nossa História"
          sidePL="Fundada em 2021, nossa empresa vem se destacando no mercado por sua inovação e compromisso com a qualidade. Crescemos rapidamente graças à confiança dos nossos clientes e ao empenho da nossa equipe."
          className={styles.sideSection}
        />
        <div className={styles.carousel}>
          <Carousel images={carouselImages} />
        </div>
        <SideSectionR
          text="Nossa Missão"
          sidePR="Nossa missão é proporcionar soluções tecnológicas que melhorem a vida das pessoas e contribuam para o progresso da sociedade. Estamos sempre em busca de novas ideias e tecnologias para alcançar esse objetivo."
          className={styles.sideSection}
        />
      </div>
      <div className={styles.cardsContainer}>
        <CardGrid cards={cards} />
      </div>
    </div>
  );
};

Sobre.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
