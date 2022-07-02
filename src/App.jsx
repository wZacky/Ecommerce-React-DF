import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './styles/App.css'

function App() {
  const [visited, setVisited] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  //if (visited && location.pathname) navigate("/home", {replace : true})
  
  useEffect(() => {
    console.log(location)
    if (location.pathname === '/') {
      setVisited(true)
    }
    navigate("/home", {replace : true})
  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Outlet />
    </div>
  )
}

export default App
