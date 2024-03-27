import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar () {
  return (
    <nav>
      <p>Campus Virtual</p>
      <Link to='/login'>Iniciar Sesión</Link>
    </nav>
  )
}

export default NavBar
