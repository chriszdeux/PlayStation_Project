import React, { useState } from 'react'
import Modal from 'react-modal';
import psLogo from './images/icons/playstation-logo.svg'

import './icons/font/icons.css';
import './styles/global-style.css'
import './styles/PlayStation.css';
import {MainModalMenu} from './components/menu/MainModalMenu';
export const PlayStation = () => {


  // const menuButton = 'flaticon-menu-2';
  // const closeButton = 'flaticon-multiply';
  
  const [iconMenu, setIconMenu] = useState( false )

  const toggle = () => {
    iconMenu ? setIconMenu(false) : setIconMenu( true );
  }

  return (
    <header>
      <nav className="mobile__menu">
        <div className="mobile__icons">
          {
            
            (!iconMenu)
              ? <span className="flaticon-menu-2" onClick={ toggle }></span>
              : <span className="flaticon-multiply blue--outline" onClick={ toggle }></span>
              
          }
          
          <span className="flaticon-search"></span>          
        </div>
        <img className="playstation--logo" src={ psLogo } alt="" />
        <button className="sign--in" >Sign In</button>
        
      </nav>
      {
        iconMenu && <MainModalMenu />
      }
      

      {/* <Modal isOpen={ openMenu } className="menu__mobile">
        <span className=" .ReactModal__Overlay .ReactModal__Overlay--after-open flaticon-menu-2 close--button " onClick={() => {
          setOpenMenu(false)
        }}></span>
        < MainModalMenu />

      </Modal> */}
    </header>
  )
}
