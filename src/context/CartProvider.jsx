import { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prevCart => {
      const mismoObjeto = prevCart.find(prod => prod.id === item.id);
      if (mismoObjeto) {
        return prevCart.map(prod =>
          prod.id === item.id ? { ...prod, cantidad: prod.cantidad + item.cantidad } : prod
        );
      } else {
        return [...prevCart, item];
      }
    })
  }

  const getQuantities = () => {
    const quantity = cart.map(prod => prod.cantidad)
    const total = quantity.reduce((acc, curr) => acc + curr, 0)

    return total
  }

  const emptyCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(prod => prod.id === id ? { ...prod, cantidad: quantity } : prod))
  }

  return (
    <CartContext.Provider value={{ cart, addItem, getQuantities, removeItem, updateQuantity, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
