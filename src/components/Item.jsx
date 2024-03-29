import { NavLink } from "react-router-dom"

const Item = ({item}) => {
    return(
        <div className="card bg-white mb-4">
            <NavLink to={`/item/${item.id}`}><img src={item.img} className="card-img-top"  alt={item.nombre}/></NavLink> 
            <section className="card-body">
            <NavLink to={`/item/${item.id}`} className="text-decoration-none text-dark"><h5 className="card-title ">{item.nombre}</h5></NavLink>
                <h6>${item.precio}</h6>
            </section>
        </div>
    )
}

export default Item;