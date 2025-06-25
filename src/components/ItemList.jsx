import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ productos }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="card col-md-3 col-10 mt-5" key={producto.id} producto={producto}>
                            <img className="mx-auto img-thumbnail img-fluid h-100" src={producto.image} width="auto" height="auto" />
                            <div className="card-body text-center mx-auto">
                                <div className="cvp">
                                    <h5 className="card-title font-weight-bold">{producto.name}</h5>
                                    <p className="card-text">${producto.price}</p>
                                    <Link to={`/product/${producto.id}`} className="btn details px-auto">Ver detalles</Link><br />
                                    <a href="#" className="btn cart px-auto">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemList
