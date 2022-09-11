import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'

const Cartshop = () => {

  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const handleClose = (item)  => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return(
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.img} alt={cartItem.title} className="border border-dark rounded" height="400px" width="260px"/>
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>${cartItem.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  const emptyCart = () => {
    return(
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
                <div className="row">
                    <h3 className="fw-bold text-center">Your Cart is empty</h3>
                </div>
            </div>
        </div>
    );
  }

  const button = () => {
    return(
        <div className="container">
            <div className="row ">
                <NavLink to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto">Proceed To Checkout</NavLink>
            </div>
        </div>
    );
  }

  return (
    <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
    </>
  )
}

export default Cartshop