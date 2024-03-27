import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'

import mockUsers from './Mocks/users.json'

function App () {
  const [user, setUser] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('pass').value
    const userExists = isUserExists(user)
    console.log(userExists)
    if (userExists !== undefined) {
      if (userExists.pass === password) {
        setUser(user)
        setError('')
      } else {
        setError('Alguno de los datos es incorrecto')
      }
    } else {
      setError('Alguno de los datos es incorrecto')
    }
  }

  const isUserExists = (user) => mockUsers.find((u) => u.user === user)

  const addUser = (user) => {
    mockUsers.push(user)
  }

  const logout = () => setUser('')

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} logout={logout} />
        <div className='card'>
          <Routes>
            {user
              ? <Route path='/login' element={<Navigate to='/home' />} />
              : <Route path='/home' element={<Navigate to='/login' />} />}
            <Route path='/login' element={<Login handleLogin={handleLogin} error={error} />} />
            <Route path='/register' element={<Register addUser={addUser} />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
