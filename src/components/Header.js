import React from 'react'
import fscreen from 'fscreen'

import './Header.css'

const renderFullscreenButton = (isFullScreen, handler) => {
  if (fscreen.fullscreenEnabled) {
    const label = isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'
    return (
      <button className='Header-fullscreen' onClick={handler}>{label}</button>
    )
  }
}

const Header = props => {
  const { toggleFullScreen, isFullScreen } = props
  return (
    <header className='Header'>
      <a href='/' className='Header-logo'>
        <i className='fa fa-optin-monster fa-3x' aria-hidden='true' />
      </a>
      <h1 className='Header-title'>Monster Escape</h1>
      {renderFullscreenButton(isFullScreen, toggleFullScreen)}
    </header>
  )
}

export default Header
