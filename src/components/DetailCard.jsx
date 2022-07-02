import React from 'react'
import placeholder from '../assets/images/productplaceholder.png'

const DetailCard = ({ product }) => {
  const { isActive, product_name, description, price, brand, category, image, sku } = product

  console.log({product})

  return (
    <div className='container mt-5 p-3'>
      <div className="card mb-3 mt-5" style={{maxWidth: '100%'}}>
        <div className="card-header">Product Details:</div>
        <div className="row g-0">
          <div className="col-md-4 my-auto">
            <img src={image ?? placeholder} className="img-thumbnail img-fluid rounded-start" style={{height : '100%'}} alt="product" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product_name}</h5>
              <p className="card-text"><b>Brand: </b>{brand ?? 'No data'}</p>
              <p className="card-text"><b>Category: </b>{category ?? 'No data'}</p>
              <p className="card-text">$: <i>{price ?? 'No data'}</i></p>
              <p className="card-text"><b>Descripption: </b>{description ?? 'No description'}</p>
              <p className="card-text"><small className="text-muted">SKU: {sku}</small></p>
              <div className='d-grid gap-2 col-12 col-md-6 mx-auto sticky-bottom'>
                <button className='btn btn-success'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard