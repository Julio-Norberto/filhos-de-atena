import React from "react"
import './Div-content-Tech.css'

export default (props) => {
    return (
        <div className="component-tech">
            <img width="300px" src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ad adipisci odio atque dolorum magnam natus magni vel, nulla a id quibusdam eligendi laborum iste! Quas incidunt autem ex voluptatum?
            </p>
            <a href="">Ler matéria...</a>  
        </div>
        
    )
}