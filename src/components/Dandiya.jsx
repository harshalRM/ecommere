import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Dandiya = () => {
  return (
    <>
      <div className="container-fluid py-4 my-4 text-center">
        <div className="more">
          <img src="images/chaniyacholi/chaniya5.webp" classname="img-fluid w-100" height="860px" alt="Responsive "></img>
          <img src="images/chaniyacholi/chaniya2.webp" classname="img-fluid w-100" height="860px" alt="Responsive "></img>
          <div className="garba">
            <h1 className="fw-bolder text-white display-3">DANDIYA NIGHTS</h1>
            <NavLink to="/dandiya" className='text-white fw-bolder fs-2'>SHOP NOW</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dandiya