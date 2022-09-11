import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cart = () => {
  const sstate = useSelector((state) => state.addItem)
  return (
    <>
        <NavLink to = "/cart" className="btn btn-outline-primary  px-3">
        Cart({sstate?.length}) <i className='fa fa-shopping-cart me-2'></i>
        </NavLink>
    </>
  )
}

export default Cart