import cart from './images/cart.svg'

const CardWidget = () => {
    return (
        <button className='btn btn-light position-absolute top-50 end-0  translate-middle'>
            <img className='' src={cart} alt="LOGO CARRITO" width={24}/>
            <span className='position-absolute top-0 start-100  translate-middle badge rounded-pill mt-1' style={{backgroundColor: 'green'}}>0</span>
        </button>
    )
}

export default CardWidget;