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
import kanban01 from "../assets/IMG/kanban01.jpg";
import kanban02 from "../assets/IMG/kanban02.jpg";
import kanban03 from "../assets/IMG/kanban03.jpg";

const carouselImages = [kanban01, kanban02, kanban03];

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
      <div className={styles.Container}>
        <SideSectionL
          text="Melhoria Contínua"
          sidePL="A adoção de uma cultura de melhoria contínua é um aspecto crucial para o sucesso das metodologias ágeis. Isso envolve a realização de retrospectivas regulares, onde a equipe avalia o que funcionou bem, o que pode ser melhorado e implementa ações concretas para aprimorar seus processos.
        A aprendizagem a partir dos erros e a celebração das conquistas são práticas que fortalecem essa cultura."
          className={styles.sideSection}
        />
        <div className={styles.carousel}>
          <Carousel images={carouselImages} />
        </div>
        <SideSectionR
          text="Tecnologias Ágeis"
          sidePR="Implementar tecnologias ágeis traz diversos benefícios para as organizações e os profissionais de TI:
Maior Flexibilidade: As equipes ágeis podem responder rapidamente às mudanças nos requisitos e nas prioridades do cliente.
Melhoria na Qualidade: O foco na entrega incremental e na revisão contínua ajuda a garantir a alta qualidade do produto final.
Aumento da Produtividade: A clareza nas tarefas e nos objetivos combinada com a motivação."
          className={styles.sideSection}
        />
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
