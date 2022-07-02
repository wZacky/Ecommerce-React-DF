import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../components/DetailCard'

const DetailsProduct = () => {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${productId}`)
      .then(({ data }) => {
        setProduct(data)
      })
      .catch((error) => console.log(error))
  }, [])


  return <DetailCard product={product} />
}

export default DetailsProduct