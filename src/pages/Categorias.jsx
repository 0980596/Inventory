import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios';
import { Link } from "react-router-dom";
import style from "../styles/categoria.module.css";
import { Plus, Tag } from "lucide-react";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const api = axios.create({
    baseURL: 'http://localhost:3333'
  });

  useEffect(() => {
    api.get("/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.log("Erro ao buscar as Categorias", err));
  }, [api]);

  return (
    <>
      <Header />

      <div className={style.inicio}>

        <div className={style.tittleContainerCat}>
          <Tag className={style.iconeCat} />
          <div className={style.tittleCat}>
            <h2>Categorias</h2>
            <p>Gerencia as categorias dos seus produtos</p>
          </div>
        </div>

        <div className={style.addButon}>
          <Plus className={style.addicone} />
          <Link id={style.addCategoria} to="/cadastrar-categoria">
            Adicionar categoria
          </Link>
        </div>

      </div>

      {categorias.length === 0 ? (
        <p>Nenhuma categoria foi cadastrada.</p>
      ) : (
        <div className={style.containerCat}>
          {categorias.map(categoria => (

            <div className={style.categoriaDetalhes} key={categoria.id}>

              <div className={style.descContainerCat}>

                <div className={style.nomeCat}>
                  <Tag className={style.catIcone} />
                  <h2>{categoria.name}</h2>
                </div>

                <div className={style.descCat}>
                  <p>{categoria.description}</p>
                </div>

              </div>

              <div className={style.btn}>
                <Link id={style.editarCategoria} to={`/editar-categoria/${categoria.id}`}>
                  Editar
                </Link>
              </div>

            </div>

          ))}
        </div>
      )}
    </>
  );
}