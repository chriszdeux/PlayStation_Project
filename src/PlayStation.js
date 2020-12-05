import React, { useState } from 'react'
import Modal from 'react-modal';
import psLogo from './images/icons/playstation-logo.svg'

import './icons/font/icons.css';
import './styles/global-style.css'
import './styles/PlayStation.css';
import {MainModalMenu} from './components/menu/MainModalMenu';
export const PlayStation = () => {


  const [iconMenu, setIconMenu] = useState( 'flaticon-menu-2' )

  const toggle = () => {
    iconMenu ? setIconMenu('flaticon-menu-2') : setIconMenu('flaticon-multiplay')
  }
  return (
    <header>
      <nav className="mobile__menu">
        <div className="mobile__icons">
        <span className={ iconMenu } onClick={ toggle }></span>
          {
            
          }
          {/* <span className="flaticon-menu-2" onClick={() => setOpenMenu( true ) }></span> */}
          <span className="flaticon-search"></span>          
        </div>
        <img className="playstation--logo" src={ psLogo } alt="" />
        <button className="sign--in" >Sign In</button>
        
      </nav>
      
      

      {/* <Modal isOpen={ openMenu } className="menu__mobile">
        <span className=" .ReactModal__Overlay .ReactModal__Overlay--after-open flaticon-menu-2 close--button " onClick={() => {
          setOpenMenu(false)
        }}></span>
        < MainModalMenu />

      </Modal> */}
    </header>
  )
}
