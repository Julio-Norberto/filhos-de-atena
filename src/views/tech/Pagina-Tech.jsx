import React from "react";
import DivContentTech from "./Div-Content-Tech";
import './Pagina-Tech.css'
import backgtech from '../../images/backgtehc.jpg'
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <div className="tech">
            <div className="tech-topo">
                <h1>Tecnologia</h1>
                <p>Aprenda sobre redes de computadores, programação, hacking e muito mais...</p>
            </div>

            <div className="content-types">

                <div className="types">
                    <h1>Programação</h1>
                    <p>Aprenda sobre HTML, CSS, JavaScript e diversos conceitos da programação web</p>
                    <Link className="links" to={"/tech/programacao"}>Acessar...</Link>
                </div>

                <div className="types">
                    <h1>Hacking</h1>
                    <p>Aprenda sobre os pilares da segurança da informação e sobre ferramentas de pentest</p>
                    <Link className="links" to={"/tech/programacao"}>Acessar...</Link>
                </div>

                <div className="types">
                    <h1>Redes</h1>
                    <p>Aprenda sobre os conceitos de redes de computadores, equipamentos e serviços</p>
                    <Link className="links" to={"/tech/programacao"}>Acessar...</Link>
                </div>
            </div>

        </div>
    )
}