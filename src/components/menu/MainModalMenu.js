import React, { useState } from 'react'
// import Modal from 'react-modal'

import { menuDB } from '../../database/menu-database.js/menu-items';
import { SecondModalMenu } from './SecondModalMenu';
// import { SecondModalMenu } from './SecondModalMenu';


export const MainModalMenu = () => {

  const [showContent, setShowContent] = useState(false)

  const toggle = () => {
    showContent ? setShowContent(false) : setShowContent(true)
  }
  // console.log(key, icon, section)
  // console.log(menuDB)
  // debugger
  return (
    <div className="main__menu__container">
      <div className="menu__mobile">
        <ul className="menu__list">
          {
            menuDB.map(item => {
              // debugger
              const { key, icon, section, content} = item;
              return (
                <li id={key} key={key.toString()} className="menu--item--list" 
                onClick={toggle}

                >
                  <img src={icon} alt="" />
                  <p>{ section }</p>
                </li>
                // <div>
                // </div>
                // <>
                // </>
                )
                //WE ARE HERE IN THIS PART, JUST
                //REMEMBER TO SET SHOWCONTENT INTO DE ONCLICK BUTTON TO CHEC
                  {
                    
                    showContent && <SecondModalMenu value={ key }/>
                }
            })
          }
                
        </ul>
      </div>
      

       {/* <SecondModalMenu /> */}
    </div>
  )

  
}
