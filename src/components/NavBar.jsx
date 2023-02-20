import CardWidget from './CardWidget'
import logo from './images/logo.png'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-black fixed-top">
                <div className="container-fluid bg-black">
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon "></span>
                    </button>
                    <Link className="navbar-brand text-light position-absolute top-50
                     start-50 translate-middle" to={"/"} ><img src={logo} width={190} alt="LOGO" height={68} /> </Link>
                    <div className="offcanvas bg-black offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel"><img src={logo} alt="LOGO" width={250} height={65} /></h5>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item dropdown bg-black">
                                    <li  className="nav-link dropdown-toggle  text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Procesadores
                                    </li>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Procesadores"}>-Ver todo en Procesadores</NavLink></li>
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/"}>-Procesadores AMD</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}>-Procesadores Intel</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mothers
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Mothers"}>-Ver todo en Mothers</NavLink></li>
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/"}>-Mothers AMD</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}> Intel</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Placas de Video
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <NavLink className="nav-link ms-3 text-secondary" to={"/category/Placas_de_video"} activeClassName={"active"}>-Ver todo en Placas de Video</NavLink>
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/"}>-Placas de Video GeForce</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}>-Placas de Video Radeon AMD</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Memorias RAM
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Memorias_RAM"}>-Ver todo en Memorias RAM</NavLink></li>
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/"}>-Memorias</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}>-Memorias Notebook</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Refrigeración
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Refrigeracion"}>-Ver todo en Refrigeracion</NavLink></li>
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/"}>-Coolers Fan</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}>-Coolers CPU</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 text-secondary" to={"/"}>-Pasta Termica</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gabinetes
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Gabinetes"}>-Gabinetes</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fuentes
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Fuentes"}>-Fuentes de Alimentación</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <NavLink className="nav-link dropdown-toggle  text-light" to={"/category/Sillas_Gamers"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sillas Gamers
                                    </NavLink>
                                    <ul className="dropdown-menu bg-black">
                                        <li><NavLink className="nav-link active  ms-3 text-secondary" to={"/category/Sillas_Gamers"}>-Sillas Gamers</NavLink></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex mt-3 " role="search">
                                <input className="form-control bg-black me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn bg-black text-light " type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <CardWidget/>
            </nav>
        </div>
    )
} 

export default NavBar;