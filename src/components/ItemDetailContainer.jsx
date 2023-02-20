import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState ([])
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            },2000)
        })
        promesa.then((respuesta) => {
            setItems(respuesta)
        })
    },[id])

    return(
        <ItemDetail items={items}/>
    )
}

export default ItemDetailContainer;