# 🛒 Proyecto de e-commerce de Coderhouse usando ReactJs

Este proyecto es una tienda online desarrollada como entrega final para el curso de ReactJs en Coderhouse. Permite a los usuarios navegar productos, agregarlos al carrito, realizar compras y gestionar el estado del carrito.

## 🚀 Tecnologías utilizadas

- [![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=flat)](https://react.dev/) **ReactJs** [🌐](https://react.dev/)  
  Librería principal para la construcción de interfaces de usuario.

- [![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=white&style=flat)](https://reactrouter.com/) **React Router** [🗺️](https://reactrouter.com/)  
  Navegación entre páginas y rutas.

- [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=white&style=flat)](https://firebase.google.com/) **Firebase Firestore** [🔥](https://firebase.google.com/)  
  Base de datos en tiempo real para productos y órdenes.

- [![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF4088?logo=sweetalert&logoColor=white&style=flat)](https://sweetalert2.github.io/) **SweetAlert2** [🔔](https://sweetalert2.github.io/)  
  Alertas y notificaciones visuales.

- [![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white&style=flat)](https://getbootstrap.com/) **Bootstrap** [🎨](https://getbootstrap.com/)  
  Estilos y componentes visuales.

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)](https://developer.mozilla.org/es/docs/Web/JavaScript) **JavaScript (ES6+)** [💻](https://developer.mozilla.org/es/docs/Web/JavaScript)  
  Lógica y funcionalidad.

- [![Context API](https://img.shields.io/badge/Context%20API-20232A?logo=react&logoColor=61DAFB&style=flat)](https://react.dev/reference/react/useContext) **Context API** [🧠](https://react.dev/reference/react/useContext)  
  Manejo global del estado del carrito.

## ✨ Funcionalidades principales

- 📦 Listado de productos desde Firestore.
- 🗂️ Filtrado por categoría.
- 🔍 Vista de detalle y opción de agregar al carrito.
- 🛒 Carrito de compras: agregar, eliminar y modificar cantidades.
- 📝 Checkout con validación y generación de orden.
- ✅ Alertas de compra con ID de la orden.
- 🧹 Vaciar carrito tras la compra.

## 🧩 Métodos y lógica clave

- **addItem(item)**: ➕ Agrega productos al carrito, suma cantidades si el producto ya existe.
- **removeItem(id)**: ❌ Elimina un producto del carrito por su ID.
- **updateQuantity(id, cantidad)**: 🔄 Actualiza la cantidad de un producto en el carrito.
- **emptyCart()**: 🧹 Vacía el carrito completamente.
- **validateCheckoutForm(form)**: ✔️ Valida los campos del formulario de compra.
- **addItems(order)**: 🗄️ Guarda la orden en Firestore y retorna el ID.
- **checkOut(id, emptyCart, navigate)**: 🎉 Muestra alerta de compra exitosa, vacía el carrito y redirige al inicio.

## 🛠️ Instalación y ejecución

1. 📥 Clona el repositorio.
2. 📦 Instala dependencias con `npm install`.
3. 🔑 Configura tus credenciales de Firebase en el proyecto.
4. ▶️ Ejecuta el proyecto con `npm start`.

---

**Autor:** Sebastián García  
**Curso:** ReactJs -