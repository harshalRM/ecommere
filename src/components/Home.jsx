import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from './Products'
import Dandiya from './Dandiya'



const Home = () => {
  return (
    <>   
      <div className="back">
        <div className="back-text text-white text-center mb-3">
          <h1 className="display-3 fw-bold">GOWNS FASHION</h1>
          <h3>FLATTERING NEW AGE TRENDS</h3>
          <NavLink to="/gown" className="text-white ">SHOP NOW</NavLink>
        </div>
      </div>
      <Products/>
      <Dandiya/>    
    </>
  )
}

export default Home