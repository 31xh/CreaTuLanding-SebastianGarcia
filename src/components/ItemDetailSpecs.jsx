const ItemDetailSpecs = ({ item }) => {
    return (
        <div className="tab-pane fade" id="specifications" role="tabpanel">
            <div className="row">
                <div className="col-lg-6">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Procesador</strong>
                                </td>
                                <td>{item.procesador}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Graficos</strong>
                                </td>
                                <td>{item.graficos}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Pantalla</strong>
                                </td>
                                <td>{item.pantalla}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Memoria</strong>
                                </td>
                                <td>{item.memoria}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Bateria</strong>
                                </td>
                                <td>{item.bateria}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailSpecs
