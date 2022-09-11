import React from 'react'
import { NavLink } from 'react-router-dom'


const Products = () => {
    return (
        <>
            <div className="container my-4 py-3 bg-dark">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5 m-4">
                    <div className="col">                      
                        <img src="images/pallazo/pallazo3.webp" className="card-img-top" alt="..." />
                        <div className="card-footer  text-center">
                            <small className="product_name  text-white">Pallazo Suits</small>                                             
                        </div>
                        <div className="buttons text-center mx-1">
                            <NavLink to="/pallazo" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">     
                        <img src="images/anarkali/anarkali8.jpg" className="card-img-top" alt="..." />
                        <div className="card-footer text-center">
                            <small className="product_name  text-white">Anarkali</small>
                            <div className="buttons text-center mx-1">
                            <NavLink to="/anarkali" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/kurti/kurti2.jpg" className="card-img-top" alt="..." />
                        <div className="card-footer text-center">
                        <small className="product_name text-white">Kurti</small>
                        </div>
                        <div className="buttons text-center mx-1">
                            <NavLink to="/kurti" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5 m-4">
                    <div className="col">                      
                        <img src="images/suits/suit2.webp" className="card-img-top" alt="..." />
                        <div className="card-footer text-center">
                        <small className="product_name  text-white">Suits</small>
                        </div>
                        <div className="buttons text-center mx-1">
                            <NavLink to="/salwaar" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">     
                        <img src="images/saree/saree11.jpg" className="card-img-top" alt="..." />
                        <div className="card-footer text-center">
                        <small className="product_name text-white">Saree</small>
                        </div>
                        <div className="buttons text-center mx-1">
                            <NavLink to="/saree" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/lehenga/lehenga4.webp" className="card-img-top" alt="..." />
                        <div className="card-footer text-center">
                        <small className="product_name  text-white">Lehenga</small>
                        </div>
                        <div className="buttons text-center mx-1">
                            <NavLink to="/lehenga" className="mx-1 fs-4 text-white fw-bold">SHOP NOW</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products