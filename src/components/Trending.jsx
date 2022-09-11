import React from 'react'

const Trending = () => {
    return (
        <>
            <div className="container p-4 my-3">
                <hr />
                <h1 className="text-center fw-bolder ">TRENDING ON OUR SITE</h1>
                <hr />
                <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                    <div class="col">
                        <div class="card h-100">
                            <img src="images/saree/saree9.webp" class="card-img-top"height="600px" alt="..."/>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Light Pink Art Silk Sequinned Border Saree</h5>
                                    <p class="card-text text-danger fw-bold">Rs 3480</p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class="card-footer text-center">
                                    <button className="btn btn-outline-primary">ADD TO CART</button>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="images/anarkali/anarkali7.webp" class="card-img-top"height="600px" alt="..."/>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Red Chiffon Georgette Anarkali Suit</h5>
                                    <p class="card-text text-danger fw-bold">Rs 13800</p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class="card-footer text-center">
                                    <small class="text-muted">ADD TO CART</small>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="images/lehenga/lehenga12.webp" class="card-img-top w-40" height="600px"alt="..."/>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Off White Georgette Lehenga with Sequins Work</h5>
                                    <p class="card-text text-danger fw-bold">Rs 7000</p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div class="card-footer text-center">
                                    <small class="text-muted">ADD TO CART</small>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending