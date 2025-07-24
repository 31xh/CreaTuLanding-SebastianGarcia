import { Link } from "react-router-dom"
import { useCart } from "../context/useCart"
import ItemCount from "./ItemCount"


const Cart = () => {
    const {
        cart,
        removeItem,
        updateQuantity
    } = useCart()
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0)

    return (
        <div className="container my-5">
            <div className="row">
                {cart.map(prod => (
                    <div key={prod.id} className="col-lg-8 border-4 shadow-lg my-3 p-2">
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
                {cart.length === 0

                    ?

                    <div className="col-12 text-center">
                        <h3>No hay productos en el carrito</h3>
                        <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
                    </div>

                    :

                    <div className="col-lg-3 border-4 shadow-lg">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h5 className="text-center">Total: ${total}</h5>
                            <Link to={'/checkout'} className="text-primary">Ir al checkout</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
