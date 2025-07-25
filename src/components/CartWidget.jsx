import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'


const Cartwidget = () => {
  const { getQuantities } = useContext(CartContext)
  const quantity = getQuantities()

  return (
    <>
      <NavLink to={'/cart'} >
        <i className="bi bi-cart2 fs-4 text-dark">
          <span className='rounded-pill badge bg-dark fs-6'>
            {quantity}
          </span>
        </i>
      </NavLink>
    </>
  )
}

export default Cartwidget
