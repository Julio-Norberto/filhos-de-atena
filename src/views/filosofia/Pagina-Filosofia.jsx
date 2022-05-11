import React from "react";
import DivContentTech from "../tech/Div-Content-Tech";
import backgtech from '../../images/backgtehc.jpg'
import './Pagina-Filosofia.css'

export default (props) => {
    return (
        <div className="filosofia">
            <div className="tech-topo">
                <h1>Filosofia</h1>
                <p>Aprenda sobre as reflexões de grandes pensadores da antiguidade e da era atual...</p>
            </div>

            <div className="component-content">
                <DivContentTech title="Porque choras socrates" image={backgtech} />
                <DivContentTech title="Porque choras socrates" image={backgtech} />
                <DivContentTech title="Porque choras socrates" image={backgtech} />
                <DivContentTech title="Porque choras socrates" image={backgtech} />
            </div>

            
        </div>
    )
}