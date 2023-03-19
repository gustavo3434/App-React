import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"

const ItemDetail = ({items}) => {
    const [cantidad , setCantidad] = useState(1)
    const [stock, setStock] = useState(items.stock)
    const [cantPedido, setCantPedido] = useState(0)
    const {cart,addItem} = useContext(CartContext)
    const [band, setBand] = useState(false)

    const onAdd = () => {
            if ((stock - cantidad) >= 0) {
                setStock(stock - cantidad)
            }
                
            addItem(items, cantidad)
            let pos = cart.findIndex( elem => (elem.idItem === items.idItem ))
            setCantPedido(cart[pos].cantidad)
            setBand(true)
        }

       
    console.log(cantPedido)
    console.log(cart)
    console.log(stock) 

    const sumarProductos = () => {
        if (cantidad < stock ) {
            setCantidad(cantidad +1)
        }
    }
    const restarProductos = () => {
        if (cantidad > 1) {
            setCantidad(cantidad -1)
        }
    }
    
    useEffect(() => {
        setStock(items.stock);
        
    }, [items.stock]);

    return(
        <div className="container">
            <div className="card mb-3 bg-dark border-0" style={{width:"100%", marginTop:120}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={items.img} className="img-fluid rounded-start" alt={items.nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light">
                            <h5 className="card-title text-light">{items.nombre}</h5>
                            <p className="card-text text-center"><small className="text-center " style={{color: "green"}}>Precio especial</small></p>
                            <h4 className="text-center " style={{marginTop:-15, color: "green"}}>${items.precio}</h4>
                            <p className="card-text text-light mt-3">{items.descripcion}</p>
                        </div>
                        <div class="btn-group" style={{marginLeft: 120}} role="group" aria-label="Basic example">
                            <button type="button" onClick={restarProductos} style={{backgroundColor: "black", color: "white"}} className="btn">-</button>
                            <button type="button" style={{backgroundColor: "black", color: "white"}} className="btn "><span className="">{cantidad}</span></button>
                            <button type="button" onClick={sumarProductos} style={{backgroundColor: "black", color: "white"}} className="btn">+</button>
                            <button onClick={onAdd} type="button" className="btn btn-light ms-2" >Agregar</button>
                        </div>
                        <div>
                            { 
                            (cantidad > (stock) || cantPedido === items.stock) && band? <div className="alert alert-warning mt-3" role="alert">STOCK INSUFICIENTE</div> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail