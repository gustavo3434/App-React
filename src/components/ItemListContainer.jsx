import './ItemListContainer.css'

const ItemListContainer = ({promo}) => {
    return (
        <div className="mb-5" style={{marginTop:110}}>
            <form className="registro text-center"> 
                <h2 className="text-light">{promo.mensaje}</h2>
                <p className="text-light">{promo.registro}</p>
                <input className="mt-2" type="email" name="emal" placeholder="Email" required/>
                <input className=" btn btn-sm ms-2" style={{backgroundColor: 'green'}} type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default ItemListContainer;