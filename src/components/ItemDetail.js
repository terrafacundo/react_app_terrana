
function ItemDetail({ id, nombre, precio, imagen, descripcion, stock }) {
    return (
        <div key={id} id="detalle">
            <h2>{nombre}</h2>
            <h4>{precio}</h4>
            <img src={imagen} alt={nombre}></img>
            <h4>{descripcion}</h4>
            <h5>Cupos Disponibles: {stock}</h5>
            <button>Inscribirse Ahora</button>
        </div>
    );
}

export default ItemDetail;