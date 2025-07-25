import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/useCart";
import { addItems } from "../firebase/db";
import { useState } from "react";
import { checkOut } from "../scripts/alerts";
import { useNavigate } from "react-router-dom";
import { validateCheckOutForm } from "../scripts/validation";

const Checkout = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { cart } = useCart()
    const { emptyCart } = useCart()


    const handleForm = async (e) => {
        e.preventDefault();
        
        const form = e.target

        const newErrors = validateCheckOutForm(form)
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
