export const validateCheckOutForm = (form) => {
        const newErrors = {};
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;

        if (!email) {
            newErrors.email = "Email is required";
        } else if (email.includes("@") === false && email.endsWith(".com") === false) {
            newErrors.email = "Email is invalid";
        }

        if (!name) {
            newErrors.name = "Name is required";
        } else if (name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }

        if (!phone) {
            newErrors.phone = "Phone is required";
        } else if (phone.length < 10 && phone.length > 15) {
            newErrors.phone = "Phone must be between 10 and 15 digits long";
        }

        return newErrors;
}