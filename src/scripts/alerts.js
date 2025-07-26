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

export const areYouSure = (emptyCart) => {
    Swal.fire({
  title: "<strong>Esta seguro de vaciar el carrito?</strong>",
  icon: "info",
  html: `
    <div>
        <p className="fw-bold">Esta acción no se puede deshacer.</p>
        <p className="fs-5">¿Desea continuar?</p>
    </div>
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Si
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> No
  `,
  cancelButtonAriaLabel: "Thumbs down"
}) .then((result) => {
        if (result.isConfirmed) {
            emptyCart();
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