import React from 'react'

const About = () => {
  return (
    <>
      <div className="container py-4 my-4">
        <div className="border border-black border-5 p-3 m-3">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 py-4 my-4">
                <i class="fa fa-solid fa-2x fa-credit-card my-3"></i>
                <h2 className='fw-bold my-3'>FAST SECURE PAYMENTS</h2>
                <p className="lead my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quas quos laudantium beatae id dolores neque ea enim tempora ipsum ratione earum sapiente, amet mollitia possimus reprehenderit hic assumenda? Voluptatem alias dignissimos dolores laboriosam ea nesciunt consequatur</p>
              </div>
              <div className="col-md-4  py-4 my-4">
                <i class="fa fa-solid fa-2x fa-star my-3"></i>
                <h2 className='fw-bold my-3'>PREMIUM PRODUCTS</h2>
                <p className="lead my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem est illo quidem quisquam quo doloribus, aspernatur at provident dolorem eligendi minus optio quae reiciendis ut similique vitae magnam iste cum perferendis maxime non reprehenderit neque officiis inventore?</p>
              </div>
              <div className="col-md-4  py-4 my-4">
                 <i class="fa fa-solid fa-2x fa-truck my-3"></i>
                 <h2 className="fw-bold my-3">FREE & FAST DELIVERY</h2>
                 <p className="lead my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam cupiditate facilis sit. Quos expedita, reiciendis dolorem voluptatibus accusamus vitae nulla ut ipsam. Nam impedit non dolores sequi repellat corrupti illum ducimus est repellendus quisquam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default About