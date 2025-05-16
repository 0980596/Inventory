import { Link } from "react-router-dom";
import style from "./style.module.css";

import { Box, Search } from "lucide-react";

export default function Header() {
  return (
    <header>

      <div className={style.tittle}>
        <Link to="/">
          <Box className={style.logo} />
          <h2>Inventory</h2>
        </Link>

      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
      </nav>

      <div className={style.barraPesquisa}>
        <Search className={style.icon} />
        <input type="text" placeholder="Procurar" />
      </div>

    </header>
  )
}