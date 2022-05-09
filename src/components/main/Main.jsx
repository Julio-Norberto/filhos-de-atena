import React from "react";
import Contents from "./Contents";
import './Main.css'
import tech from '../../images/chip2.png'
import atom from '../../images/atom2.png'
import brain from '../../images/cherry-108.png'

export default (props) => {
    return (
        <div className="Main">
            <Contents caminho="tech" title="Tecnologia" img={tech} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
            <Contents caminho="ciencias" title="Ciências" img={atom} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
            <Contents caminho="filosofia" title="Filosofia" img={brain} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
        </div>
    )
}