import axios from 'axios'
import jwtDecode from "jwt-decode"
import { toast } from 'react-toastify'
import { createContext, useContext, useEffect, useState } from 'react'
import { isValidToken, setCurrentUser, setSession } from '../services/jwt'

const AppContext = createContext({
  authed : false,
  init : false,
  loginAuth: () => new Promise()
})

const AppProvider = ({children}) => {
  const [productsList, setProducts] = useState([])
  const [searchResultsList, setSearchResultsList] = useState([])
  const [authed, setAuthed] = useState(() => {
    const token = window.localStorage.token || ''
    return !!(token && isValidToken(token))
  })

  const [globalUser, setGlobalUser] = useState(null)
  const [user, setUser] = useState(null)
  const [init, setInit] = useState(false)
  const [messageError, setMessageError] = useState('')

  const getAllProducts = async () => {
    const response = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    const activeProducts = response.data.filter( p => p.isActive !== false)
    setProducts(activeProducts)
  }

  const getUserMe = async () => {
    const { data } = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me',{
      headers : {
        Authorization : `JWT ${window.localStorage.token}`
      }
    })

    setUser(data)
  }

  const loginAuth = async (email, password) => {
    console.log({email, password})
    await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login',{email, password})
      .then(({data}) => {
        setSession(data.token)
        setGlobalUser(jwtDecode(window.localStorage.token))
        setAuthed(true)
    
        //await getUserMe()
        getUserMe()
      })
      .catch((error) => {
        setMessageError(error.response.data.message)
        console.log('entre aqui123');
      })

  }

  const logout = () => {
    setSession(null)
    setAuthed(false)
    setUser(null)
    setGlobalUser(null)
  }

  const signup = async (first_name, last_name, birth_date, gender, email, password, role) => {
    // console.log({first_name, last_name, birth_date, gender, email, password, role})
    const response =await axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup',{first_name, last_name, birth_date, gender, email, password, role})

    if (response.status === 200) {
      console.log(response.data)
      loginAuth(email, password)
      console.log('registrado y logueado')
      //setCurrentUser(JSON.stringify(response.data))
      
      await loginAuth(email, password)
    }else {
      console.log(response.data.message)
      setMessageError(response.data.message)
      console.log('error4')
    }
  }

  useEffect(() => {
    // cada vez que se recargue la pagina se ejecuta esto:
    getAllProducts()

    const token = window.localStorage.token || ''
    //setInit(true)
    console.log(token)

    try {
      if (token && isValidToken(token)) {
        setSession(token)
        setGlobalUser(jwtDecode(window.localStorage.token))
        setAuthed(true)
        setUser(data)
      } else {
        console.log('aqui1')
        setAuthed(false)
      }
    } catch (error) {
      console.log('aqui2')
      setAuthed(false)
    }
  }, [])

  const initialState = {
    productsList,
    searchResultsList,
    setSearchResultsList,
    loginAuth,
    logout,
    authed,
    init,
    globalUser,
    signup,
    user,
    messageError,
    setMessageError
  }

  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }