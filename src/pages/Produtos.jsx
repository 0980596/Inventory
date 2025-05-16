import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import axios from 'axios';

import style from "../styles/produtos.module.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');

  const api = axios.create({
    baseURL: "http://localhost:3333"
  });

  useEffect(() => {
    api.get("/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.log("Erro ao buscar os produtos", err));
  }, [api]);

  const produtosFiltrados = busca.trim()
    ? produtos.filter(produto =>
      produto.name.toLowerCase().includes(busca.toLowerCase())
    )
    : produtos;

  return (
    <>
      <Header />

      <div className={style.inicio}>

        <div className={style.barraPesquisa}>
          <input
            type="text"
            placeholder='Buscar produto'
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className={style.cadastroProduto}>
          <Link to="/cadastrar-produto" className={style.btn}>
            Adicionar um produto
          </Link>
        </div>

      </div>

      <div className={style.containerProduto}>
        {produtosFiltrados.length === 0 ? (
          <p>Nenhum produto foi cadastrado.</p>
        ) : (
          produtosFiltrados.map(produto => (
            <div key={produto.id} className={style.produto} >
              <img
                src={`http://localhost:3333${produto.imageUrl}`}
                alt={produto.name}
                width={100}
              />

              <div className={style.containerDesc}>

                <div className={style.descNameCat}>
                  <h3> {produto.name}</h3>
                  <p> {produto.category?.name || 'Sem categoria'}</p>
                </div>

                <div className={style.descripition}>
                  <p> {produto.description}</p>
                </div>

                <div className={style.precoQnt}>
                  <h3>R$ {produto.price.toFixed(2)}</h3>
                  <p>Qtd: {produto.quantity}</p>
                </div>

                  <Link className={style.btnEditar} to={`/editar-produto/${produto.id}`}>
                    Editar
                  </Link>


              </div>

            </div> /* produto */

          ))
        )}
      </div>
    </>
  );
}
