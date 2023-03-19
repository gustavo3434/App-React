import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "./CartContext"


const Formulario = () => {
    const [nomApe,setNomApe] = useState("")
    const [email,setEmail] = useState("")
    const [telefono,setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, totalProductos, clear} = useContext(CartContext)

    const redireccionar = () =>{window.location="/"}
    const generarOrden = () => {
        const buyer = {name: nomApe , email: email, phone: telefono }
        const fecha = new Date()
        const date = `${fecha.getFullYear()}/${fecha.getMonth() +1}/${fecha.getDay()}-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const orden = {buyer: buyer, items:{cart}, total: totalProductos() ,fecha:date }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, orden).then((data) => {
            setOrderId(data.id)
            clear()
            
        })
        setTimeout (redireccionar, 3300)
    }
    
    const checkCamposComplet = (nomApe, email, telefono) => {
        if (nomApe.length > 0 && email.length > 0 && telefono.length) {
            return true
        }
    }

    return(
        <div>
            <h3 className="text-light text-center text-bold" style={{marginTop: 140}}> Formulario de Compra</h3>
            <form action="" className="mt-5">
                <div style={{marginLeft: "-5%"}}>
                    <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                    <input type="text" className="form-cantrol" id="nombre" placeholder="Juan Perez(ejemplo)" onInput={(e) => {setNomApe(e.target.value)}} style={{width:"25%"}}/>
                </div>
                <div className="mt-3" style={{marginLeft: "-5%"}}>
                    <label htmlFor="email" className="form-label">Nombre y apellido</label>
                    <input type="text" className="form-cantrol" id="email" placeholder="alguien@gmail.com(ejemplo)" onInput={(e) => {setEmail(e.target.value)}} style={{width:"25%"}}/>
                </div>
                <div className="mt-3" style={{marginLeft: "-5%"}}>
                    <label htmlFor="telefono" className="form-label">Nombre y apellido</label>
                    <input type="text" className="form-cantrol" id="telefono" placeholder="1123456789(ejemplo)" onInput={(e) => {setTelefono(e.target.value)}} style={{width:"25%"}}/>
                </div>
            </form>
            <button className="btn mt-5 position-absolute bottom-0 start-50 translate-middle-x" style={{backgroundColor: "green"}} onClick={checkCamposComplet(nomApe,email,telefono) ? generarOrden : ""}>Generar Orden</button>
            {orderId? <div className="alert alert-success" role="alert" style={{marginLeft:"25%" ,width: "50%"}}> {nomApe.toUpperCase()} Se genero una Orden de compra, ¡ MUCHAS GRACIAS POR ELEGIRNOS ¡ </div>: ""}
            <div style={{marginTop:90}}>a</div>
        </div>
        
    )
}

export default Formulario