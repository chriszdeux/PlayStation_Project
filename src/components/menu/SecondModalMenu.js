import React from 'react'


import console from '../../images/icons/console.svg';
import ps3 from '../../images/icons/ps3-blue.svg';
export const SecondModalMenu = () => {
  return (
    <>
      <div className="menu__container">

      <div className="menu--close--content">
        <img src="" alt="" />
        <p>|||</p>
        <p>Games</p>
      </div>

      <ul className="menu__content">
        
        <li className="menu--list--content">
          <img src={ console } alt="" />
          <p>PS5</p>
          <div className="card"></div>
        </li>
        <li className="menu--list--content">
          <img src={ ps3 } alt="" />
          <p>PS5</p>
        </li>
        <li className="menu--list--content">
          <img src={ console } alt="" />
          <p>PS5</p>
        </li>
        <li className="menu--list--content">
          <img src={ console } alt="" />
          <p>PS5</p>
        </li>
        <li className="menu--list--content">
          <img src={ console } alt="" />
          <p>PS5</p>
        </li>
        <li className="menu--list--content">
          <img src={ console } alt="" />
          <p>PS5</p>
        </li>
        
      </ul>
      <p>Playstation indies</p>
      </div>
    </>
  )
}
