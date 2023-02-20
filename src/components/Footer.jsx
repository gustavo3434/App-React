import insta from './images/instagram.svg'
import face from './images/facebook.svg'
import youtube from './images/youtube.svg'
import tiktok from './images/tiktok.svg'

const Footer = () => {
    return (
        <div style={{marginTop: 120, backgroundColor: '#3b3b3b'}}>
            <div className="container text-light">
                <div className="row">
                    <div className="col mt-3">
                        <h5 className="" style={{color: "green"}}>¡Contactanos!</h5>
                        <ul className="list-inline fs-6">
                            <li className="mt-3">Av 9 de Julio 127 Centro (Córdoba)</li>
                            <li className="mt-3">Remedios de Escalada de San Martín 4000 Floresta (CABA)</li>
                            <li className="mt-3">Empresas@CompraTech.com.ar</li>
                        </ul>
                    </div>
                    <div className="col mt-3">
                    <h5 className="" style={{color: "green"}}>
                        Nuestros Horarios</h5>
                        <ul className="list-inline fs-6">
                            <li className="mt-3">Córdoba Capital</li>
                            <li>Lun a Vier. 9:00 AM - 18:00 PM</li>
                            <li>Sab 10:00 AM - 14:30 PM</li>
                            <li className="mt-3">Floresta (CABA)</li>
                            <li>Lun a Vier. 10:00 AM a 19:00 PM</li>
                            <li>Sab 10:00 AM - 14:30 PM</li>
                        </ul>
                    </div>
                    <div className="col mt-3">
                        <h5 style={{color: "green"}}>
                            Seguinos en las Redes</h5>
                        <a href={"/"}> <img className='ms-4 mt-3' src={insta} width={26} alt="" /></a>
                        <a href={"/"} className='text-decoration-none'> <img className='ms-3 mt-3' src={face} width={26} alt="" /></a>
                        <a href={"/"} className='text-decoration-none'> <img className='ms-3 mt-3' src={youtube} width={26} alt="" /></a>
                        <a href={"/"} className='text-decoration-none'> <img  className='ms-3 mt-3'src={tiktok} width={26} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;