import React from 'react';

import menuDB from '../../database/menu-database';

export const SecondModalMenu = ( { key } ) => {
  debugger
  const { id, icon, name } = content;
  return (
    <>
      <div className="menu__container">

      <div className="menu--close--content">
        {/* <img src={ icon } alt={ name } /> */}
        <p>|||</p>
        <p>{ section }</p>
      </div>

      <ul className="menu__content">
        
        <li key={ id }className="menu--list--content">
          <img src={ icon } alt="" />
          <p>{ name }</p>
          {/* <div className="card"></div> */}
        </li>
      </ul>
      </div>
    </>
  )
}
