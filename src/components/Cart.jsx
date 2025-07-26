import { NavLink } from "react-router-dom"
import { useCart } from "../context/useCart"
import ItemCount from "./ItemCount"
import { areYouSure } from "../scripts/alerts"


const Cart = () => {
    const { cart, removeItem, updateQuantity, emptyCart } = useCart()
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0)
    const handleEmptyCart = () => {
        areYouSure(emptyCart)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    {cart.map(prod => (
                        <div key={prod.id} className="col-lg-12 border-4 shadow-lg my-3 p-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <img src={prod.image} className="img-fluid img-thumbnail cart-image border-0" alt="#" />
                                <div className="pt-2 mx-1">
                                    <h5 className="text-center">{prod.name}</h5>
                                    <button onClick={() => removeItem(prod.id)} className="text-primary border-0 bg-transparent px-3">
                                        Eliminar
                                    </button>
                                </div>
                                <ItemCount
                                    counter={prod.cantidad}
                                    setCounter={cantidad => updateQuantity(prod.id, cantidad)}
                                />
                                <p className="text-center pe-3 fw-semibold">Precio: ${prod.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {cart.length === 0

                    ?

                    <div className="col-12 text-center">
                        <h3>No hay productos en el carrito</h3>
                        <NavLink to="/" className="btn btn-primary">Volver a la tienda</NavLink>
                    </div>

                    :

                    <div className="col-lg-3 border-4 shadow-lg">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h5 className="text-center">Total: ${Math.round(total)}</h5>
                            <NavLink to={'/checkout'} className="text-primary">Ir al checkout</NavLink>
                            <button onClick={handleEmptyCart} className="btn btn-dark my-2">Vaciar Carrito</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
