import './App.css'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Login ({ handleLogin, error }) {
  return (
    <>
      <form>
        <img className='logo' src='../src/image/SGEC.png' alt='Logo SGEC' />
        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-user'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /><path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' /></svg>
          <input type='text' placeholder='Usuario' id='user' />
        </div>
        <div className='form-field'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-key'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z' /><path d='M15 9h.01' /></svg>
          <input type='password' placeholder='Contraseña' id='pass' />
        </div>
        <div className='action-buttons'>
          <button className='button' onClick={handleLogin}>
            Acceder
          </button>
          <button className='button-secondary'>
            Invitado
          </button>
          {
            error &&
              <div className='error'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-info-circle'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M12 9h.01' /><path d='M11 12h1v4h1' /></svg>
                <p>{error}</p>
              </div>
          }
        </div>
      </form>
      <p>
        Eres nuevo en SGEC? <Link to='/register'>Regístrate</Link>
      </p>
    </>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

export default Login
