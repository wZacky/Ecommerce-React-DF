import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const NavBar = () => {
  const { productsList, setSearchResultsList, authed, user, logout } = useAppContext()
  const navigate = useNavigate()
  const inputSearch = useRef('')

  const { pathname } = useLocation()

  const handleInputSearch = (e) => {
    e.preventDefault()
    // console.log(productsList)
    // console.log(productsList.filter(p => (p.product_name).includes(inputSearch.current.value.trim())))
    setSearchResultsList(productsList.filter(p => (p.product_name).includes(inputSearch.current.value.trim())))
    inputSearch.current.value = ''
    navigate("/home/search")
  }

  const handleClickLogin = () => {
    navigate("/home/login")
  }

  const handleClickSignup = () => {
    navigate("/home/signup")
  }

  const handleClickLogout = () => {
    logout()
    navigate("/home")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
      {
        (pathname === '/home/login' || pathname === '/home/signup')
          ? <Link to='/home' className="navbar-brand me-2"><b>E-TORE</b></Link>
          : <>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <Link to='/home' className="navbar-brand me-2"><b>E-TORE</b></Link>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <form className="d-flex my-2" role="search">
                  <input className="form-control me-2" ref={inputSearch} type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" onClick={handleInputSearch}>Search</button>
                </form>
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <div className='d-flex'>
                  {!authed &&
                    <>
                      <li className="nav-item me-2">
                        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleClickLogin}>Login</button>
                      </li>
                      <li className="nav-item me-2">
                        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleClickSignup}>Signup</button>
                      </li>
                    </>
                  }
                  {!!user &&
                    <li className="nav-item me-2">
                      <a className="nav-link disabled">Hello {user.user.first_name}</a>
                    </li>
                  }
                  {authed &&
                    <li className="nav-item me-2">
                      <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleClickLogout}>Logout</button>
                    </li>
                  }
                </div>
              </ul>
            </>
      }
      </div>
    </nav>
  )
}

export default NavBar