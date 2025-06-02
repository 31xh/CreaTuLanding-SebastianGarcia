import React from 'react'
import logo from '../assets/logo.png'
import Cartwidget from './CartWidget'

const Nabvar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} className='logo' alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href="#">Moviles</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Laptops</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-disabled="true">Monitores</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-disabled="true">Consolas</a>
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
