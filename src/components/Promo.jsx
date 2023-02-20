import './Promo.css'

const Promo = () => {
    return (
        <div className="mb-5" style={{marginTop:110}}>
            <form className="registro text-center"> 
                <h2 className="text-light">Recibí todas nuestras ofertas</h2>
                <p className="text-light">¿Querés recibir nuestras ofertas? ¡Registrate ahora y comenza a recibirlas!</p>
                <input className="mt-2" type="email" name="emal" placeholder="Email" required/>
                <input className=" btn btn-sm ms-2" style={{backgroundColor: 'green'}} type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Promo;