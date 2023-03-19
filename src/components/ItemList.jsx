import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <div className="row" >
            {items.map(item => (
                <div className="hov col-4" key={item.idItem} >
                    <Item item={item}/>
                </div>
            ))}

        </div>
    )
}

export default ItemList;