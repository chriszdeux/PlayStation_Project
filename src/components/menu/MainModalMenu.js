import React from 'react'
// import Modal from 'react-modal'

import { menuDB } from '../../database/menu-database.js/menu-items';
import { SecondModalMenu } from './SecondModalMenu';
export const MenuComponent = () => {

  // console.log(key, icon, section)
  
  // debugger
  return (
    <div className="main__menu__container">
      {
        menuDB.map(item => {
        const { key, icon, section } = item;
          return (
            <div className="menu__mobile">
              <ul className="menu__list">
                <li key={key} className="menu--item--list" >
                  <img src={icon} alt="" />
                  <p>{ section }</p>
                </li>
              </ul>
            </div>
          )
        }

        )
      }
      <SecondModalMenu />
    </div>
  )

  
}
