import Header from "../components/Header";

import { Link } from "react-router-dom";

import style from "../styles/home.module.css";

import pro from "../images/casdastroPro.png";
import cat from "../images/cat.png";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className={style.heroContainer}>

        <div className={style.tittleHero}>
          <h2>Transforme seu estoque em um Sistema Organizado e Eficiente</h2>
          <p>Cadastre e edite produtos e categorias com facilidade. Criado para ajudar na organização e manter seu estoque sempre atualizado.</p>
        </div>

        <div className={style.btn}>

          <div className={style.btnProdutos}>
            <Link to="/produtos"><button>Ver produtos</button></Link>
          </div>

          <div className={style.btnCategorias}>
            <Link to="/categorias"><button>Ver categorias</button></Link>
          </div>
        </div>

      </div>

      <div className={style.conatinerWobblecard}>

        <div className={style.cardsinico}>

          <div className={style.card1}>

            <div className={style.inf}>
              <h2>Organize seus produtos com facilidade total</h2>
              <p>Cadastre, edite e gerencie todos os seus produtos em um só lugar, tornando a gestão do estoque rápida e eficiente.</p>
            </div>

            <img src={cat} alt="" />

          </div>

          <div className={style.card2}>
            <h2>Categorias simples e organizadas</h2>
            <p>Classifique seus produtos em categorias e mantenha seu estoque estruturado.</p>
          </div>

        </div>

        <div className={style.card3}>

          <div className={style.inf}>
            <h2>Cadastre e edite seus produtos com rapidez usando o sistema de estoque mais organizado e eficiente de todos</h2>
            <p>Visualize e atualize produtos e categorias rapidamente. Ideal para manter a organização e evitar perdas.</p>
          </div>

          <img src={pro} alt="" />



        </div>

      </div>

      <Footer />

    </>

  );
}
