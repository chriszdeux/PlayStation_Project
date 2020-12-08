import React from 'react'


import '../../styles/hero-style.css';
import halo from '../../images/pictures/halo.jpg'
export const HeroSection = () => {
  return (
    <>
      <main className="container ">
        
        <div className="main__section">
          <div className="main__content">
            <h2>Playstation 5</h2>
            <p>This is a paragraph to check functionality</p>
            <button className="buy--btn">Buy now</button>
          </div>
        <div className="fade--in"></div>

        </div>
        <div className="main__slider">
          <img src={ halo } alt="" />
          <img src={ halo } alt="" />
          <img src={ halo } alt="" />
        </div>
      </main>
    </>
  )
}
