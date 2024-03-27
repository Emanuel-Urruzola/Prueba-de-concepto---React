import './App.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Register ({ addUser }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: '',
    address: '',
    email: '',
    phone: '',
    pass: ''
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const userForm = (e) => {
    e.preventDefault()
    console.log(formData)
    addUser(formData)
    navigate('/home')
  }

  return (
    <>
      <form>
        <img className='logo' src='../src/image/SGEC.png' alt='Logo SGEC' />

        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-user'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /><path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' /></svg>
          <input
            type='text'
            placeholder='Nombre completo'
            id='user'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-map-pins'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z' /><path d='M8 7l0 .01' /><path d='M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z' /><path d='M16 15l0 .01' /></svg>
          <input
            type='text'
            placeholder='Dirección'
            id='address'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-mail'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' /><path d='M3 7l9 6l9 -6' /></svg>
          <input
            type='email'
            placeholder='Email'
            id='email'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-phone'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' /></svg>
          <input
            type='text'
            placeholder='Teléfono'
            id='phone'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-key'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z' /><path d='M15 9h.01' /></svg>
          <input
            type='password'
            placeholder='Contraseña'
            id='pass'
            onChange={handleInputChange}
          />

        </div>

        <div className='action-buttons'>
          <button className='button' onClick={userForm}>
            Registrarte
          </button>
        </div>

      </form>
    </>
  )
}

Register.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default Register
