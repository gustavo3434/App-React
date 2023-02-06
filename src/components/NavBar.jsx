import CardWidget from './CardWidget'
import logo from './images/logo.png'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-black fixed-top">
                <div className="container-fluid bg-black">
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon "></span>
                    </button>
                    <a className="navbar-brand text-light position-absolute top-50
                     start-50 translate-middle" href={"/"} ><img src={logo} width={190} alt="LOGO" height={68} /> </a>
                    <div className="offcanvas bg-black offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel"><img src={logo} alt="LOGO" width={250} height={65} /></h5>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href={"/"}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href={"/"}>Link</a>
                                </li>
                                <li className="nav-item dropdown bg-black">
                                    <a className="nav-link dropdown-toggle  text-light" href={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul className="dropdown-menu bg-black">
                                        <li><a className="dropdown-item text-light" href={"/"}>Action</a></li>
                                        <li><a className="dropdown-item text-light" href={"/"}>Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item text-light" href={"/"}>Something else here</a></li>
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