import SummaryCard from '../components/SummaryCard'
import { useAppContext } from '../context/AppContext'


const Products = () => {
  const { productsList } = useAppContext()

  return (
    <div className='container mt-5'>
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-3 gy-4'>
        {productsList.map((product) => {
          return (
            <SummaryCard key={product["_id"]} data={product} />
          )
        })}
      </div>
    </div>
  )
}

export default Products