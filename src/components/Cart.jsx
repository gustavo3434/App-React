import { useContext } from "react"
import { CartContext } from "./CartContext"
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cart,totalCarrito, delItem, totalProductos} = useContext(CartContext)
    
    return(
        <div>
            {cart.length > 0 ? 
            <div>
                <div class="alert text-center text-dark" role="alert" style={{marginTop: 140, marginLeft:"25%" ,width: "50%", backgroundColor: "white"}}> <h4>Carrito de Compras</h4> </div>
            </div>  : <div class="alert text-center " role="alert" style={{marginTop: 140, marginLeft:"25%" ,width: "50%", backgroundColor: "white",color: "black"}}>EL CARRITO DE COMPRA ESTA VACIO</div>}
            <div className="container text-center mt-5">
                { cart.map( item => (
                    <div className="row mt-4" key={item.idItem}>
                        <div className="col">
                            <img src={item.img} alt={item.nombre} width={80}/>
                        </div>
                        <div className="col">
                            <p className="card-text text-light ">{item.nombre}</p>
                        </div>
                        <div className="col">
                            <p className="card-text text-light "> {item.cantidad} x ${item.precio}</p>
                        </div>
                        <div className="col">
                            <p className="card-text text-light">${item.cantidad*item.precio}</p>
                        </div>
                        <div className="col">
                            <Link onClick={() => {delItem(item.idItem)}}><button className="btn btn-danger" >Eliminar</button></Link> 
                        </div>
                    </div>              ))
                    
                    }
                    <div className="row mt-3">
                        {cart.length > 0  ? 
                        <div className="me-0 mt-4">
                            <p className="text-end text-light fw-bold"> TOTAL: ${totalProductos()}</p>
                        </div>  : ""}
                    </div>
                    {cart.length > 0  ? 
                        <Link to={`/formularioCompra`}><button className="btn" style={{backgroundColor: "green"}}>Finalizar Compra</button></Link> : ""}
            </div>
        </div>
    )
}

export default Cart