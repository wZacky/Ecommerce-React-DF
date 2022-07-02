import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
  /* useEffect(() => {
    console.log(location);
  }, []) */

  return (
    <div>
      <div>
        <NavBar />
        <p>Home</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Home