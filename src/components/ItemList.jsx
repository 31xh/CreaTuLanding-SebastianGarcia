import { NavLink } from 'react-router-dom'

const ItemList = ({ productos }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 my-5" key={producto.id}>
                            <div className="card h-100 w-100" producto={producto}>
                                <img className="mx-auto img-thumbnail img-fluid h-100" src={producto.image} width="auto" height="auto" />
                                <div className="card-body text-center mx-auto">
                                    <div className="cvp">
                                        <h5 className="card-title font-weight-bold">{producto.name}</h5>
                                        <p className="card-text">${producto.price}</p>
                                        <NavLink to={`/product/${producto.id}`} className="btn details px-auto">Ver detalles</NavLink><br />
                                    </div>
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
