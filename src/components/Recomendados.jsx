import './Recomendados.css';
import basic from './images/basic.jpg'
import media from './images/media.jpg'
import alta from './images/alta1.jpg'

const Recomendados = () => {
    return (
        <div className='bg-dark'>
            <h4 className='text-light fw-bold p-2 mt-4' style={{marginLeft: 65}}> PCs Recomendadas</h4> 
            <a href={"/"} tabindex="-1" className='btn disabled placeholder col-1' style={{marginLeft:75, height:1, backgroundColor: 'green'}} ariaHidden="true"> </a>
            <div className='container text-center'>
                <div className="row mb-5">
                    <div className="producto col mt-1">
                        <img src={basic} alt="PC gama basic" width={280}/>
                    </div>
                    <div className="producto col mt-1">
                        <img src={media} alt="PC gama media" width={280}/>
                    </div>
                    <div className="producto col mt-1">
                        <img src={alta} alt="PC gama alta" width={280}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendados;