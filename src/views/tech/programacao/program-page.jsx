import React from "react";
import DivContentTech from "../Div-Content-Tech";
import './programacao-page.css'
import backgtech from '../../../images/backgtehc.jpg'

export default (props) => {
    return (
        <div className="tech">
            <div className="tech-topo">
                <h1>Tecnologia</h1>
                <p>Aprenda sobre redes de computadores, programação, hacking e muito mais...</p>
            </div>

            <div className="component-content">
                <DivContentTech title="Mamacos pelados" image={backgtech} />
                <DivContentTech title="Mamacos pelados" image={backgtech} />
                <DivContentTech title="Mamacos pelados" image={backgtech} />
                <DivContentTech title="Mamacos pelados" image={backgtech} />
            </div>

            
        </div>
    )
}