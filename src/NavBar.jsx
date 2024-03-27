import './NavBar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function NavBar ({ user }) {
  return (
    <nav>
      <p>Campus Virtual</p>
      {
        user
          ? <p>{user}</p>
          : <Link to='/login'>Iniciar Sesión</Link>
      }
    </nav>
  )
}

NavBar.propTypes = {
  user: PropTypes.string
}

export default NavBar
