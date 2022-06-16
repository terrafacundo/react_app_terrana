import { useEffect, useState } from "react";
import customFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";
import detalle from "./Detalle";

const ItemDetailContainer = () => {
    const [details,setDetails] = useState([]);

    useEffect(() =>{
        customFetch(2000,detalle)
        .then(r=>setDetails(r))},[details]);

    console.log(details);
    return(
        <div>
            <ItemDetail detalle={details}/>
        </div>
    )
}

export default ItemDetailContainer