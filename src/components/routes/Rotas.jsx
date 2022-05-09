import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaCiencias from "../../views/ciencias/Pagina-Ciencias";
import PaginaFilosofia from "../../views/filosofia/Pagina-Filosofia";
import Tech from "../../views/tech/Pagina-Tech";
import Home from "../home/Home";

export default (props) => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Home />} exact />
                <Route path="/tech" element={<Tech/>} />
                <Route path="/ciencias" element={<PaginaCiencias />} />
                <Route path="/filosofia" element={<PaginaFilosofia />} />

            </Routes>
        </div>
    )
}