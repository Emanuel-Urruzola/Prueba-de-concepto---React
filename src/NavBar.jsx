import './NavBar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function NavBar ({ user, logout }) {
  return (
    <nav>
      <p>Campus Virtual</p>
      {
        user
          ? <p onClick={logout} className='session'>{user}</p>
          : <Link to='/login' className='session'>Iniciar Sesión</Link>
      }
    </nav>
  )
}

NavBar.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func.isRequired
}

export default NavBar
