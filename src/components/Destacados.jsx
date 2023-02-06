import './Destacados.css';
import procesadorRyzen5o5600G from './images/Procesador_AMD_Ryzen_5_5600G_4.4GHz_Turbo.jpg'
import MotherAsusPrimeA520M from './images/Mother_ASUS_PRIME_A520M-A_II_CSM_AM4.jpg'
import PlacaDeVideoMSIGeForceRTX309024GB from './images/Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC.jpg'
import SillaGamerVertagearRacing from './images/Silla_Gamer_Vertagear_Racing_Series_PL-4500_.jpg'

const Destacados = () => {
    return (
        <div className='bg-dark'>
            <h4 className='text-light fw-bold p-2 ' style={{marginLeft: 65}}> Productos Destacados</h4> 
            <a href={"/"} tabindex="-1" className='btn disabled placeholder col-1' style={{marginLeft:75, height:1, backgroundColor: 'green'}} ariaHidden="true"> </a>
            <div className="container text-center">
                <div className="row">
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                            <img src={procesadorRyzen5o5600G} className="card-img-top"  alt=''/>
                            <section className="card-body">
                                <h5 className="card-title">Procesador AMD Ryzen 5 5600G 4.4GHz Turbo</h5>
                                <h6>$74000</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                            <img src={MotherAsusPrimeA520M} className="card-img-top"  alt=''/>
                            <section className="card-body">
                                <h5 className="card-title">Mother ASUS PRIME A520M-A II/CSM AM4</h5>
                                <h6>$34500</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                            <img src={PlacaDeVideoMSIGeForceRTX309024GB} className="card-img-top"  alt=''/>
                            <section className="card-body">
                                <h5 className="card-title">Placa de Video MSI GeForce RTX 3090 24GB GDDR6X</h5>
                                <h6>$410000</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                            <img src={SillaGamerVertagearRacing} className="card-img-top"  alt=''/>
                            <section className="card-body">
                                <h5 className="card-title">Silla Gamer Vertagear Racing Series PL-4500</h5>
                                <h6>$219000</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destacados;