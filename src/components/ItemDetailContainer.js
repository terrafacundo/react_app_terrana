import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getProductById from "./fetchProductById";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [details,setDetails] = useState();
    const {id} = useParams();

    useEffect(() =>{
        getProductById(parseInt(id))
        
        .then(r=>setDetails(r))},[]);
    return(
        <div>
            <ItemDetail {...details}/>
        </div>
    )
}

export default ItemDetailContainer