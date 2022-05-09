import React from "react";
import './Contents.css'

export default (props) => {
    return (
        <div className="Content">
            <div className="text-content">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <a href="">Acessar</a>
            </div>
            <div className="img-content">
                <img width="300px" src={props.img} alt="" />
            </div>
        </div>
    )
}