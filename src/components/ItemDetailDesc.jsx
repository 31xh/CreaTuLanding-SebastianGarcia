import React from 'react'
import ItemDetailSpecs from './ItemDetailSpecs'

const ItemDetailDesc = ({item}) => {
  return (
    <div>
      <div className="row mt-5">
          <div className="col-12">
            <ul className="nav nav-tabs" id="productTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  type="button"
                >
                  Descripcion
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="specifications-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specifications"
                  type="button"
                >
                  Especificaiones
                </button>
              </li>
            </ul>

            <div className="tab-content mt-4" id="productTabsContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel">
                <div className="row">
                  <div className="col-lg-8">
                    <h5>Descripcion del Producto</h5>
                    <p>
                      {item.detailedDesc}
                    </p>
                  </div>
                </div>
              </div>

              <ItemDetailSpecs item={item}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetailDesc
