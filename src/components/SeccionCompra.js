import { useEffect, useState } from "react"

const SeccionCompra = () =>{
    const [contador,funcionCantidad]=useState(0)

    const sumarCurso = () =>{
        funcionCantidad(contador+1)
    }

    const restarCurso = () =>{
        funcionCantidad(contador<=0?contador:contador-1)
    }
    const reinicioCurso = () =>{
        funcionCantidad(0);}
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

export default SeccionCompra