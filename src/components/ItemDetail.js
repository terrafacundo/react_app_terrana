import detalle from "./Detalle";

const ItemDetail = ({detalle})=>{
    return(
        detalle.map(d=>
        <div key={d.id} id="detalle">
            <h2>{d.titulo}</h2>
            <img src={d.imagen} alt={d.titulo}></img>
            <h4>{d.descripcion}</h4>
            <h5>Cupos Disponibles: {d.stock}</h5>
            <button>Inscribirse Ahora</button>
        </div>
    ))
}

export default ItemDetail;