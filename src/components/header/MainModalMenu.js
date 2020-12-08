import React from 'react';

import { menuDB } from '../../database/menu-database.js/menu-items';
import { useShow } from '../../util/hooks/useShow';
// import { SecondModalMenu } from './SecondModalMenu';

export const MainModalMenu = () => {

  const { showContent, toggleContent } =useShow()

  return (
    <div className="main__menu__container">
      <div className="menu__mobile">
        <ul className="menu__list">
          {
            menuDB.map(item => {
              // debugger
              const { key, icon, section} = item;
              return (
                <li key={key}  className="menu--item--list" 
                onClick={toggleContent}
                
                >
                  <img src={icon} alt="" />
                  <p>{ section }</p>
                </li>
                
                )
                
              })
            }
          </ul>
      </div>
      
    </div>
  )
}
