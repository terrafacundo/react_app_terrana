import { useEffect, useState } from "react"
import customFetch from "./CustomFetch";
import productos from "./productos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(500,productos)
        .then(r =>setItems(r));
    },[items]);

    return(
            <div id="contenedorCursos">
                <ItemList producto={items} id="curso"/>
            </div>
    )

}

export default ItemListContainer;