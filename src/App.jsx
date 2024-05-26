import { Routes, Route } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Contato } from "./Componentes/Contato";
import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import { Historia } from "./Componentes/Historia";
import { Missao } from "./Componentes/Missao";
import { Produto } from "./Componentes/Produto";
import "./Styles.global.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home nomePagina="Nossa Home" />} />
        <Route path="/missao" element={<Missao nomePagina="Nossa Missão" />} />
        <Route
          path="/produto"
          element={<Produto nomePagina="Nossos Produtos" />}
        />
        <Route
          path="/historia"
          element={<Historia nomePagina="Nossa História" />}
        />
        <Route
          path="/contato"
          element={<Contato nomePagina="Nosso Contato" />}
        />
      </Routes>
      {<Footer nomePagina="Atividade Prática React FullStack RPV" />}
    </div>
  );
}
export default App;
