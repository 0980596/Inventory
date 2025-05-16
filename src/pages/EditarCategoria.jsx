import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import style from "../styles/editarCategoria.module.css";

import editarCat from "../images/editarcategoria.png";
import Header from "../components/Header";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default function EditarCategoria() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  async function editarCategoria(e) {
    e.preventDefault();
    try {
      await api.put(`/categorias/${id}`, {
        name: nome,
        description: descricao
      });
      navigate("/categorias");
    } catch (err) {
      setErro(err);
    }
  }

  async function deletarCategoria(e) {
    e.preventDefault();
    if (!window.confirm("Tem certeza que deseja excluir esta categoria?")) return;
    try {
      await api.delete(`/categorias/${id}`);
      navigate("/categorias");
    } catch (err) {
      setErro(err);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/categorias/${id}`);
        setNome(res.data.name);
        setDescricao(res.data.description);
      } catch (err) {
        setErro(err);
      }
    })();
  }, [id]);

  const isValid = nome.trim() !== "" && descricao.trim() !== "";

  if (erro?.response?.status === 404) {
    return (
      <h1>Categoria não encontrada</h1>
    );
  }

  return (
    <>
    <Header />
      <form onSubmit={editarCategoria} className={style.editarCategoria}>

        <div className={style.fromeditarCategoria}>

          <div className={style.tittleEditar}>
            <img src={editarCat} alt="icone categoria" />
            <h2>Editar Categoria</h2>
          </div>

          <p>Editar Categoria</p>

          <div className={style.editarNome}>
            <h3>Editar nome da categoria</h3>
            <input type="text" id="nome" placeholder="Editar nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className={style.editarDesc}>
            <h3>Editar descrição da categoria</h3>
            <textarea name="descricao" id="descricao" value={descricao} placeholder="Editar descrição" onChange={(e) => setDescricao(e.target.value)} required />
          </div>

        </div>

        <div className={style.botoes}>

          <div className={style.buttonCancelar}>
            <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
          </div>

          <div className={style.buttonSalvar}>
            <button type="submit" disabled={!isValid}>Confirmar</button>
          </div>

          <div className={style.buttonDeletar}>
            <button type="button" onClick={deletarCategoria}>Deletar</button>
          </div>

        </div>

      </form>
    </>
  );
}
