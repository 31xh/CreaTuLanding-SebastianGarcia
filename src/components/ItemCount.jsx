import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const handleClickSumar = () => {
        setCounter(counter + 1)
    }

    const handleClickRestar = () => {
        setCounter(counter - 1)
        if (counter == 0) {
            return setCounter(0) 
        }
    }

    return (
        <div className="mb-3">
            <label className="form-label fw-semibold">Cantidad:</label>
            <div className="input-group">
                <button className="btn btn-outline-secondary" type="button" onClick={handleClickRestar}>
                    -
                </button>
                <input type="number" className="form-control text-center" readOnly id='conter' value={counter} />
                <button className="btn btn-outline-secondary" type="button" onClick={handleClickSumar}>
                    +
                </button>
            </div>
        </div>
    )
}

export default ItemCount
