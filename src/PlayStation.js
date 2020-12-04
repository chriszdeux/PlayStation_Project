import React from 'react'

import menu from './images/icons/menu.svg';
import search from './images/icons/search.svg'
import psLogo from './images/icons/playstation-logo.svg'

import './global-style.css';
import './styles/PlayStation.css';
export const PlayStation = () => {
  return (
    <header>
      <nav className="mobile__menu">
        <div className="mobile__icons">
          <img src={ menu } alt="" />
          <img src={ search } alt="" />
        </div>
        <img className="playstation--logo" src={ psLogo } alt="" />
        
        <button className="sign--in" >Sign In</button>
        
      </nav>
    </header>
  )
}
