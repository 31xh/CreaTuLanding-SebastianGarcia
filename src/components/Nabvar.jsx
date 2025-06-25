import React from 'react'
import logo from '../assets/logo.png'
import Cartwidget from './CartWidget'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Nabvar = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('https://685432bd5470323abe951525.mockapi.io/api/v1/categorias')
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <img src={logo} className='logo' alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {categorias.map((categoria) => (
                                <li className="nav-item mx-2" key={categoria.id}>
                                    <Link to={`/category/${categoria.id}`} className="nav-link" aria-current="page" href="#">{categoria.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <Cartwidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nabvar
