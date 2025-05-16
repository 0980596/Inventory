import { Box } from "lucide-react";
import style from "./style.module.css";

export default function Footer() {
    return (
        <>
            <footer>

                <div className={style.footertittle}>
                    <Box className={style.logo} />
                    <h2>Inventory</h2>
                </div>

                <p>© 2025 Invertory. Todos os direitos reservados.</p>

                <div className={style.desenvlvedor}>
                    <h2>Pedro Amâncio</h2>
                </div>

            </footer>
        </>
    );
}