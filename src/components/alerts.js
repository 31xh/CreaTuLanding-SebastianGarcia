import Swal from 'sweetalert2'

export const checkOut = (id, resetCart, navigate) => {
    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: 'Tu pedido ha sido recibido con éxito. Tu ID de compra es: ' + id,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'btn btn-primary'
        }
    }).then(() => {
        if (typeof resetCart === 'function') {
            resetCart();
        }
        if (typeof navigate === 'function') {
            navigate('/');
        }
    })
}

export const addedToCart = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        background: "#ffffffff",
    });
}