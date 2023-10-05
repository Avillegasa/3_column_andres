import React from "react";
import './styles/card.css'
function Card(props) {
    return (
        <div className="organizmo-contenedor">
            {props.children}
        </div>
    )

}
export default Card