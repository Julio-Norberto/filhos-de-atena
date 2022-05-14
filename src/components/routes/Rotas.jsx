import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaCiencias from "../../views/ciencias/Pagina-Ciencias";
import PaginaFilosofia from "../../views/filosofia/Pagina-Filosofia";
import HackingPage from "../../views/tech/hacking/hacking-page";
import Tech from "../../views/tech/Pagina-Tech";
import ProgramPage from "../../views/tech/programacao/program-page";
import RedesPage from "../../views/tech/redes/redes-page";
import Home from "../home/Home";

export default (props) => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Home />} exact />
                <Route path="/tech" element={<Tech/>} />
                <Route path="/ciencias" element={<PaginaCiencias />} />
                <Route path="/filosofia" element={<PaginaFilosofia />} />
                <Route path="/tech/programacao" element={<ProgramPage />} />
                <Route path="/tech/hacking" element={<HackingPage />} />
                <Route path="/tech/redes" element={<RedesPage />} />

            </Routes>
        </div>
    )
}