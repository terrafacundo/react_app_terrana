import React from "react";
import Item from "./Item";

const ItemList =({producto})=>{
    return(
        producto.map(p=>
            <Item
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
            stock={p.stock}/>)
    )
}

export default ItemList;