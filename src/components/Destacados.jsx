import './Destacados.css';
import { NavLink } from 'react-router-dom';

const Destacados = () => {
    return (
        <div className='bg-dark'>
            <h4 className='text-light fw-bold p-2 ' style={{marginLeft: 65}}> Productos Destacados</h4> 
            <a href={"/"} tabindex="-1" className='btn disabled placeholder col-1' style={{marginLeft:75, height:1, backgroundColor: 'green'}} ariaHidden="true"> </a>
            <div className="container text-center">
                <div className="row">
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                        <NavLink to={`/item/1`}><img src={"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27675_Procesador_AMD_Ryzen_5_5600G_4.4GHz_Turbo___Wraith_Stealth_Cooler_d4e323ea-grn.jpg"} className="card-img-top"  alt=''/></NavLink>
                            <section className="card-body">
                                <h5 className="card-title">Procesador AMD Ryzen 5 5600G 4.4GHz Turbo</h5>
                                <h6>$74000</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                        <NavLink to={`/item/8`}><img src={"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32310_Mother_ASUS_PRIME_A520M-A_II_CSM_AM4_c5943237-grn.jpg"} className="card-img-top"  alt=''/></NavLink>
                            <section className="card-body">
                                <h5 className="card-title">Mother ASUS PRIME A520M-A II/CSM AM4</h5>
                                <h6>$34500</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                        <NavLink to={`/item/12`}><img src={"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35018_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_195fb927-grn.jpg"} className="card-img-top"  alt=''/></NavLink>
                            <section className="card-body">
                                <h5 className="card-title">Placa de Video MSI GeForce RTX 3090 24GB GDDR6X</h5>
                                <h6>$410000</h6>
                                <button type="button" class="btn btn-dark">Agregar</button>
                            </section>
                        </div>
                    </div>
                    <div className="hov col mt-2">
                        <div className="card bg-white">
                        <NavLink to={`/item/37`}><img src={"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33421_Silla_Gamer_Vertagear_Racing_Series_PL-4500_Crystals_from_Swarovski_287fcb8e-grn.jpg"} className="card-img-top"  alt=''/></NavLink>
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