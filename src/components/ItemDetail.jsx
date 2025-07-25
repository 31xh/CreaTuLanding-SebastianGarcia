import ItemDetailDesc from './ItemDetailDesc'
import ItemDetailMedia from './ItemDetailMedia'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addedToCart } from '../scripts/alerts'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({ item }) => {

  const [counter, setCounter] = useState(1)
  const { addItem } = useContext(CartContext)

  const handleAddToCart = () => {
    addItem({ ...item, cantidad: counter })
    addedToCart()
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body p-0">
                <div className="mb-3">
                  <img
                    src={item.image}
                    alt="Premium Wireless Headphones"
                    className="img-fluid w-100 rounded border-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <h1 className="font-asus fw-bold mb-3">{item.name}</h1>
              <div className="mb-4">
                <span className="h3 text-primary fw-bolder me-3">${item.price}</span>
              </div>
              <div className="mb-4">
                <p className="text-muted fs-4">
                  {item.desc}
                </p>
              </div>
              <ItemCount counter={counter} setCounter={setCounter} />
              <div className="d-grid gap-2 mb-4">
                <button onClick={handleAddToCart} className="btn btn-dark mt-5 btn-lg">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Agregar al carrito
                </button>
                <NavLink to={'/checkout'} onClick={handleAddToCart} className="text-white text-decoration-none btn btn-primary btn-lg">
                    Comprar
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <ItemDetailDesc item={item} />
      </div>

      <div className='container-fluid my-5'>
        <ItemDetailMedia item={item} />
      </div>
    </>
  )
}

export default ItemDetail
