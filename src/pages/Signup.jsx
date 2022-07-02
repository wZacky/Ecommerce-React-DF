import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Signup = () => {
  const { authed, signup, messageError, setMessageError } = useAppContext()

  const navigate = useNavigate()

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    const first_name = e.target.firstname.value.trim()
    const last_name = e.target.lastname.value.trim()
    const birth_date = e.target.birthdate.value
    const gender = e.target.gender.value
    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()
    const role = e.target.role.value

    try {
      await signup(first_name, last_name, birth_date, gender, email, password, role)
      navigate("/home")
    } catch (error) {
      console.log(error)
      setMessageError(error.message)
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
      <div className='container-fluid' style={{maxWidth : '580px'}} >
        <h1><span className='badge bg-secondary mt-4'>SIGNUP</span></h1>
        <form onSubmit={handleSubmitForm} className='col mt-5' autoComplete='off'>
          <div className="form-floating mb-3">
            <input type="text" name='firstname' className="form-control" id="floatingFN" placeholder='First Name' required />
            <label htmlFor="floatingFN">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" name='lastname' className="form-control" id="floatingLN" placeholder='Last Name' required />
            <label htmlFor="floatingLN">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="date" name='birthdate' className="form-control" id="floatingBD" placeholder='Birth Date' required />
            <label htmlFor="floatingBD">Birth Date</label>
          </div>
          <div className="form-floating mb-3">
            <p className='text-start ms-2'>Gender:</p>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value='M' defaultChecked/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value='F' />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="email" name='email' className="form-control" id="floatingEmail" placeholder='Email' required />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder='Password' required />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <p className='text-start ms-2'>Role:</p>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="role" id="flexRadioDefault3" value='ADMIN'/>
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Admin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="role" id="flexRadioDefault4" value='CUSTOMER' defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Customer
              </label>
            </div>
          </div>
      
          <button type='submit' className='btn btn-outline-primary' style={{width : '300px'}}>
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup