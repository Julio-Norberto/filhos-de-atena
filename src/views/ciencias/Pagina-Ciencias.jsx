import React from "react";
import DivContentTech from "../tech/Div-Content-Tech";
import backgtech from '../../images/backgtehc.jpg'
import './Pagina-Ciencias.css'

export default (props) => {
    return (
        <div className="ciencias">
            <div className="tech-topo">
                <h1>Ciências</h1>
                <p>Aprenda conceitos técnicos sobre áreas diversas da ciência moderna e antiga...</p>
            </div>

            <div className="component-content">
                <DivContentTech title="Maldita maçã" image={backgtech} />
                <DivContentTech title="Maldita maçã" image={backgtech} />
                <DivContentTech title="Maldita maçã" image={backgtech} />
                <DivContentTech title="Maldita maçã" image={backgtech} />
            </div>

            
        </div>
    )
}