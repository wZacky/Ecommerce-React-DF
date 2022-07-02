import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Public = ({ children }) => {
  //const { authed } = useAppContext()

  //if(authed) return <Navigate to="" replace />

  return <>{ children }</>
}

export default Public