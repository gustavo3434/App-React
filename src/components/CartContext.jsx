import { children, createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.idItem)) {
            let pos = cart.findIndex( elem => (elem.idItem === item.idItem ))
            if (cart[pos].stock >= cantidad) {
                cart[pos].cantidad += cantidad
                setCart([...cart])
            }
            
            if ((cart[pos].stock - cantidad) >= 0) {
                cart[pos].stock -= cantidad
                setCart([...cart])
            }
            
            
        }else{
            setCart([...cart,{...item, cantidad:cantidad, stock: item.stock-cantidad}])
        }
    }
    console.log(cart)
    const delItem = (idItem) => {
        const carrito = cart.filter( item => (item.idItem !== idItem))
        setCart([...carrito])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (idItem) => {
        return cart.some(elem => elem.idItem === idItem)
    } 

    const totalCarrito = () => {    
        return cart.reduce((acum, item) => acum += item.precio,0)
    }

    const totalProductos = () => {    
        return cart.reduce((acum, item) => acum += item.cantidad *item.precio,0)
    }

    const producInCarrito = () => {
        return cart.reduce((acum, item) => acum += item.cantidad,0)
    }
    

    return (
        <CartContext.Provider value={{cart, addItem, delItem, clear, totalCarrito, totalProductos,producInCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;