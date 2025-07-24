import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import CartProvider from './context/CartProvider'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
