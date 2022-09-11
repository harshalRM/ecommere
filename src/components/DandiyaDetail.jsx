import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DANDIYA from '../DandiyaData';
import { useDispatch } from 'react-redux/es/exports';
import { addItem, delItem } from '../redux/actions/index';


const DandiyaDetail = () => {
    const [cartBtn, setCartBtn] = useState("ADD TO CART")

    const proid = useParams();
    // eslint-disable-next-line
    const proDetail = DANDIYA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);
    const dispatch = useDispatch()

    const handleCart = (product) =>{
        if (cartBtn === "ADD TO CART"){
            dispatch(addItem(product))
            setCartBtn("REMOVE FROM CART")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("ADD TO CART")
        }
    }
  return (
    <>
         <div className="container py-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} className="product_image" alt={product.title} height="600px"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='text display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h1 className="prices my-4">Rs {product.price} <span className=' discount lead text-danger ms-2'>40%-off</span></h1> 
                <p className='lead my-4'>{product.desc}</p>
                <div class="sizes mt-5 my-3">
                    <h6 class="text-uppercase p-2 fw-bolder fs-5">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" /> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M"/> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L"/> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"/> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"/> <span>XXL</span> </label>
                </div>
                <div className="btn-group my-5 py-2">
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary w-50 p-4">{cartBtn} <i className='fa fa-shopping-cart'></i></button>
                    <button className="btn btn-outline-danger w-50 p-4 ms-4">ADD TO WISHLIST <i className='fa fa-heart'></i></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DandiyaDetail