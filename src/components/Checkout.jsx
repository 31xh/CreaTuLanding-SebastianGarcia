import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/useCart";
import { addItems } from "../firebase/db";
import { useState } from "react";
import { checkOut } from "./alerts";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
    const [errors, setErrors] = useState({});

    const validateForm = (form) => {
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

    const navigate = useNavigate();
    const { cart } = useCart()
    const { emptyCart } = useCart()


    const handleForm = async (e) => {
        e.preventDefault();

        const form = e.target

        const newErrors = validateForm(form)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } else {
            setErrors({});
        }

        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            buyer: {
                email, name, phone
            },
            time: serverTimestamp(),
            items: cart
        }


        const id = await addItems(order)
        checkOut(id, emptyCart, navigate)
    }


    return (
        <div className="container my-5">
            <form className="w-50 border p-3 mx-auto" onSubmit={handleForm}>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" required />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPhone1">Phone</label>
                    <input type="number" className="form-control" id="phone" placeholder="Phone" required pattern="\d*" />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
                <button type="submit" className="btn btn-dark">Purchase</button>
            </form>
        </div>
    )
}

export default Checkout
