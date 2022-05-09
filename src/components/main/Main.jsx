import React from "react";
import Contents from "./Contents";
import './Main.css'
import tech from '../../images/chip.png'
import atom from '../../images/atom.png'

export default (props) => {
    return (
        <div className="Main">
            <Contents title="Tecnologia" img={tech} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
            <Contents title="Ciências" img={atom} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
            <Contents title="Filosofia" img={atom} desc="Aprenda conceitos de diversas áreas da tecnologia como desenvolvimento front-end, back-end, hacking, redes e muito mais." />
        </div>
    )
}