import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import categoria from "../images/iconeCategoria.png";

import style from "../styles/cadastroCategoria.module.css";
import Header from "../components/Header";



const api = axios.create({
  baseURL: "http://localhost:3333"
})

export default function CadastroCategoria() {
  //Cadastro de categoria
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [erro, setErro] = useState("")

  const navigate = useNavigate()

  const isValid = nome.trim() !== "" && descricao.trim() !== "";
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("categorias", {
        name: nome,
        description: descricao
      })
      navigate("/categorias")
    } catch (err) {
      setErro(err.message)
      console.log(erro);
    }
  }

  return (
    <>
      <Header />
      <form action="" onSubmit={handleSubmit} className={style.cadastroCategoria}>

        <div className={style.fromCadastroCategoria}>

          <div className={style.tittleCadastro}>
            <img src={categoria} alt="icone categoria" />
            <h2>Cadastrar Categoria</h2>
          </div>

          <p>Cadastar categoria</p>

          <div className={style.nomeCategoria}>
            <h3>Nome da Categoria</h3>
            <input type="text" id="nome" placeholder="Nome da categoria" required value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className={style.descricao}>
            <h3>Descrição da Categoria</h3>
            <textarea name="descricao" id="descricao" value={descricao} placeholder="Descrição da categoria" onChange={(e) => setDescricao(e.target.value)} required />
          </div>

        </div>

        <div className={style.botoes}>

          <div className={style.cancelar}>
            <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
          </div>

          <div className={style.cadastrar}>
            <button type="submit" disabled={!isValid}>Cadastrar</button>
          </div>

        </div>

      </form>
    </>
  );
}
