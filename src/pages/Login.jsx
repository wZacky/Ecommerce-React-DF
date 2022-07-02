import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Login = () => {
  const { loginAuth, messageError, setMessageError, authed } = useAppContext()

  const navigate = useNavigate()

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()

    try {
      await loginAuth(email,password)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(authed){
      navigate('/home')
    }else{
      if(messageError){
        toast.error(messageError)
        console.log(messageError)
        setMessageError('')
      }
    }
  }, [messageError])

  useEffect(() => {
    if(authed){
      navigate('/home')
    }
  }, [authed])

  return (
    <div>
      <div className='container-fluid' style={{maxWidth : '580px'}}>
        <h1><span className='badge bg-secondary mt-4'>LOGIN</span></h1>
        <form onSubmit={handleSubmitForm} className='col mt-5' autoComplete='off'>
          <div className="form-floating mb-3">
            <input type="email" name='email' className="form-control" id="floatingInput" placeholder='Email' required />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder='Password' required />
            <label htmlFor="floatingPassword">Password</label>
          </div>
      
          <button type='submit' className='btn btn-outline-primary' style={{width : '300px'}}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login