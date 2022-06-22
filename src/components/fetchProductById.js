import productos from "./productos";

const getProductById= (identifier) =>{

    return new Promise((res)=>{
        setTimeout(()=>{
            res(productos.find(p => p.id === identifier));
        },500);

    })

};

export default getProductById;