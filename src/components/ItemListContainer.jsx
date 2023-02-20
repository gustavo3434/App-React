import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import arrayProductos from "./json/data.json"
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve( id ? arrayProductos.filter(item => item.categoria === id): arrayProductos)
            }, 2000)
            
        });
        promesa.then((respuesta) => {
            setItems(respuesta)
        })
        
    },[id])
    let cate = id
    if(id) {
        for(let i=0; i<id.length; i++) {
            if(id[i] === "_") {
                cate = id.replace("_"," ")
            }
            
        }
    }else {
        cate = "Productos" 
    }
    
    
    return (
        <div style={{marginTop: 150}}>
            <h3 className='text-light fw-bold p-2 ' style={{marginLeft: 65}}>{cate}</h3>
            <a href={"/"} tabindex="-1" className='btn disabled placeholder col-1' style={{marginLeft:75, height:1, backgroundColor: 'green'}} ariaHidden="true"> </a>
            <div className="container text-center mt-2">
                <ItemList items={items}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;