import React from 'react'
// import Modal from 'react-modal'

import { menuDB } from '../../database/menu-database.js/menu-items';
// import { SecondModalMenu } from './SecondModalMenu';


export const MainModalMenu = () => {


  // console.log(key, icon, section)
  
  // debugger
  return (
    <div className="main__menu__container">
      <div className="menu__mobile">
        <ul className="menu__list">
          {
            menuDB.map(item => {
              const { key, icon, section} = item;
              return (
                <li key={key} className="menu--item--list" >
                  <img src={icon} alt="" />
                  <p>{ section }</p>
                </li>
                // <div>
                // </div>
                // <>
                // </>
              )
            })
          }
                
        </ul>
      </div>
      
       {/* <SecondModalMenu /> */}
    </div>
  )

  
}
