import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <a href='/' className='Header-logo'>
        <i className='fa fa-optin-monster fa-3x' aria-hidden='true' />
      </a>
      <h1 className='Header-title'>Monster Escape</h1>
    </header>
  )
}

export default Header
