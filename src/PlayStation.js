import React from 'react';

import { useShow } from './util/hooks/useShow';
import {MainModalMenu} from './components/menu/MainModalMenu';

import psLogo from './images/icons/playstation-logo.svg'

import './icons/font/icons.css';
import './styles/global-style.css'
import './styles/PlayStation.css';


export const PlayStation = () => {


  const { showContent, toggleContent } = useShow( )

  return (
    <header>
      <nav className="mobile__menu">
        <div className="mobile__icons">
          {
            
            (!showContent)
              ? <span className="flaticon-menu-2" onClick={ toggleContent }></span>
              : <span className="flaticon-multiply blue--outline" onClick={ toggleContent }></span>
              
          }
          
          <span className="flaticon-search"></span>          
        </div>
        <img className="playstation--logo" src={ psLogo } alt="" />
        <button className="sign--in" >Sign In</button>
        
      </nav>
      {
        showContent && <MainModalMenu />
      }
    </header>
  )
}
