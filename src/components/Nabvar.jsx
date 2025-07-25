import logo from '../assets/logo.png'
import Cartwidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const Nabvar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={"/"}>
                        <img src={logo} className='logo' alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <NavLink to={`/category/phone`} className="nav-link" aria-current="page" href="#">Moviles</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to={`/category/laptop`} className="nav-link" aria-current="page" href="#">Laptops</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to={`/category/monitor`} className="nav-link" aria-current="page" href="#">Monitores</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to={`/category/tarjeta`} className="nav-link" aria-current="page" href="#">Tarjetas Graficas</NavLink>
                            </li>
                        </ul>
                        <Cartwidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nabvar
