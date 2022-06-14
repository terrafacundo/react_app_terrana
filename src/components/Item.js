import React from "react";
const Item =({id, nombre,imagen, precio,stock})=>{
    return(
        <div key={id}>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre}></img>
            <h3>{precio}</h3>
            <h6>Cupos restantes:{stock}</h6>
            <button>Inscribirse</button>
        </div>
)}

export default Item;