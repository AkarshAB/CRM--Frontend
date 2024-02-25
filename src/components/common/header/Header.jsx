import React from 'react'
import './Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Header() {

  const location = useLocation()
  const isLogin = location.pathname === '/'
  const isRegister = location.pathname === '/register'
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <>
      <div className='container-fluid header-wrapper'>
        <h3><Link className='CRM-heading' to={'/'}>SHOP<b>EASY</b></Link></h3>
        <div className='social-media'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <button className="btn btn-danger" style={{ display: isLogin || isRegister ? "none" : '' }} onClick={logout}>LOGOUT</button>
        </div>
      </div>
    </>
  )
}

export default Header