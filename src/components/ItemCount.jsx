
const ItemCount = ({counter, setCounter}) => {
    const handleClickSumar = () => {
        setCounter(counter + 1)
    }

    const handleClickRestar = () => {
        setCounter(counter - 1)
        if (counter == 1) {
            return setCounter(1) 
        }
    }

    return (
        <div className="mb-3">
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
