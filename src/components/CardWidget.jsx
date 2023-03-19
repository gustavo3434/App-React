import { useContext } from 'react';
import cart from './images/cart.svg'
import { CartContext } from './CartContext';
import {Link, NavLink} from 'react-router-dom'

const CardWidget = () => {
    const {producInCarrito} = useContext(CartContext)
    
    return (
        <Link to={"/carrito"} className='btn btn-light position-absolute top-50 end-0  translate-middle'>
            <img className='' src={cart} alt="LOGO CARRITO" width={24}/>
            <span className='position-absolute top-0 start-100  translate-middle badge rounded-pill mt-1' style={{backgroundColor: 'green'}}>{producInCarrito()}</span>
        </Link>
    )
}

export default CardWidget;