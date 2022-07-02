import React from 'react'
import SummaryCard from '../components/SummaryCard'
import { useAppContext } from '../context/AppContext'
import notFoundData from '../assets/images/notFoundData.png'

const SearchResults = () => {
  const { searchResultsList } = useAppContext()

  if (searchResultsList.length === 0) {
    return <img className='mt-5' src={notFoundData} alt="not found data" />
  }

  return (
    <div className='container mt-5'>
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-3 gy-4'>
        {searchResultsList.map(product => {
          return (
            <SummaryCard key={product["_id"]} data={product} />
          )})}
      </div>
    </div>
  )
}

export default SearchResults