import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Private = ({ children }) => {
  const [ location, setLocation ] = useState(null)
  const { authed, init } = useAppContext()
  const { pathname } = useLocation()

  if (!init) return <p>Loading data...</p>

  if (!authed) {
    if (pathname !== location) setLocation(pathname)
    return <Navigate to={'/login'} />
  }

  if (location && pathname !== location) {
    setLocation(null)
    return <Navigate to={location} replace />
  }

  return <>{ children }</>
}

export default Private