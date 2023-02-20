

const ItemDetail = ({items}) => {
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
                            <p className="card-text text-center"><small className="text-center text-success">Precio especial</small></p>
                            <h4 className="text-center text-success" style={{marginTop:-15}}>${items.precio}</h4>
                            <p className="card-text text-light mt-3">{items.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail