import React from 'react'

import psLogo from './images/icons/playstation-logo.svg'

import './icons/font/icons.css';
import './styles/global-style.css'
import './styles/menu-style/PlayStation.css';
export const PlayStation = () => {
  return (
    <header>
      <nav className="mobile__menu">
        <div className="mobile__icons">
          <span className="flaticon-menu-2"></span>
          <span className="flaticon-search"></span>
          
        </div>
        <img className="playstation--logo" src={ psLogo } alt="" />
        <button className="sign--in" >Sign In</button>
        
      </nav>
    </header>
  )
}
