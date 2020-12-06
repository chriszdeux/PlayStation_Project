import React from 'react';

// import menuDB from '../../database/menu-database';



export const SecondModalMenu = (  value) => {
  // const { id, icon, name } = content;
  // console.log(id, icon, name)
  // const { content } = value
  console.log(value)
  debugger

  return (
    <>
      <div className="menu__container">

      <div className="menu--close--content">
        {/* <img src={ icon } alt={ name } /> */}
        <p>|||</p>
        {/* <p>{ section }</p> */}
      </div>

      <ul className="menu__content">
        
        {
          
          value.map(item => {
            const { id, icon, name } = item;
            // debugger
            return (
              <li key={ id }className="menu--list--content">
                <img src={ icon } alt="" />
                <p>{ name }</p>
                {/* <div className="card"></div> */}
              </li>
            )
          })
        }
      </ul>
      </div>
    </>
  )
}
