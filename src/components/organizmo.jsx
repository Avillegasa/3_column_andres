import React from "react";
import './styles/Organizmo.css'
function organizmo(props) 
{
    return(
        <div className="organizmo-contenedor">
            {props.children}
        </div>
    )
    
}
export default organizmo