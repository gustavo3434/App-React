import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/data.json"
import ItemDetail from "./ItemDetail";
import {doc, collection, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [items, setItems] = useState ([])
    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore()
        const itemsCollection = doc(db,"productos",id)
        getDoc(itemsCollection).then(element => {setItems({id:element.id,... element.data()})})
       
    },[id])

    return(
        <ItemDetail items={items}/>
    )
}

export default ItemDetailContainer;