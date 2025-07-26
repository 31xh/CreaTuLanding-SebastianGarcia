export const validateCheckOutForm = (form) => {
        const newErrors = {};
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;

        if (!email) {
            newErrors.email = "El email es requerido";
        } else if (email.includes("@") === false && email.endsWith(".com") === false) {
            newErrors.email = "El email debe contener '@' y terminar con '.com'";
        }

        if (!name) {
            newErrors.name = "El nombre es requerido";
        } else if (name.length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres";
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            newErrors.name = "El nombre solo puede contener letras y espacios";
        }

        if (!phone) {
            newErrors.phone = "El teléfono es requerido";
        } else if (phone.length < 10 && phone.length > 15) {
            newErrors.phone = "El teléfono debe tener entre 10 y 15 dígitos";
        }

        return newErrors;
}