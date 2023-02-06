import item1 from './images/item1.png'
import item2 from './images/item2.jpg'
import item3 from './images/item3.png'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" class="carousel slide mt-5">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={item3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={item2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={item1} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;