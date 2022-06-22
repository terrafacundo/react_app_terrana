import React from "react";
import {Link} from "react-router-dom";
const Item =({id, nombre,imagen, precio,stock})=>{
    return(
        <div key={id}>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre}></img>
            <h3>{precio}</h3>
            <h6>Cupos restantes:{stock}</h6>
            <Link to={`/detail/${id}`}>Saber más</Link>
        </div>
)}

export default Item;