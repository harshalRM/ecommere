import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container py-4 my-5">
        <img src="images/contact.png" class="img-fluid" alt="..."/>
      </div>
      <div className="container my-4 py-4 ">
        <div className="row ">
          <div className="col-md-6 text-center bg-light shadow ">
            <i className="fa fa-phone fs-1 my-3 "></i>
            <h3 className="fw-bold my-3 py-2">Talk to Sales</h3>
            <p className="fw-bold lead my-3 py-2">Just pick up the phone to chat with a member of our sales team.</p>
            <p className='lead my-3 py-2'>+1 3456723890</p>
            <h3 className="text-danger fw-bold my-3">Contact us via this number</h3>
          </div>
          <div className="col-md-6 text-center bg-light shadow ">
            <i class="fa fa-comments fs-1 my-3 py-2"></i>
            <h3 className="fw-bold my-3 py-2">Customer Care message</h3>
            <p className="fw-bold lead my-3 py-2">Start a chat with our chatbot if call is not working. leave your doubts or complains</p>
            <button className="btn btn-outline-primary p-2 my-3">Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact