import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/images/productplaceholder.png'

const SummaryCard = ({ data }) => {
  const {product_name, price, image} = data

  return (
    <div className="card col mx-auto my-md-4" style={{width: '17rem'}}>
      <img src={image ?? placeholder} className="card-img-top my-2" alt="image of product" />
      <div className="card-body">
        <h5 className="card-title text-start">{product_name}</h5>
        <p className="card-text text-end">$ {price}</p>
        <Link to={`/home/product/${data["_id"]}`} replace={true} className="btn btn-primary">View Detail</Link>
      </div>
    </div>
  )
}

export default SummaryCard