import { useEffect, useState } from "react"


const ItemCount = ({inicio,stock,onAdd}) =>{
    const [contador,setContador]=useState(inicio);
    const sumarCurso = () =>{
        setContador(contador<stock?contador+1:contador);
    }

    const restarCurso = () =>{
        setContador(contador<=0?contador:contador-1)
    }
    const reinicioCurso = () =>{
        setContador(0);}
    return(
    <>
    <div id="contenedorCompra">
        <h3 id="tituloCompra">Cursos en el carrito</h3>
        <div id ="contador" >{contador}</div>
        <div id="botones">
            <button id="operacion" onClick={restarCurso}><img src="../trash.svg"></img></button>
            <button id="operacion" onClick={sumarCurso}><img src="../add.svg"></img></button>
            <button id="reinicio" onClick={reinicioCurso}><img src="../delete.svg"></img></button>
        </div>
    </div>
    </>
)};


export default ItemCount