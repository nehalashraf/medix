/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider from "react-slick";
export default function Home() {
    const settings={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return ( 
      <>
      <div className="col-lg-4  d-flex justify-content-end contactus">
      <form action="#">
<div class="row form-group mt-3">
<div class="col-md-6 mb-3 mb-md-0">
<label  for="fname">First Name</label>
<input type="text" id="fname" className="form-control"/>
</div>
<div className="col-md-6 ">
<label  for="lname">Last Name</label>
<input type="text" id="lname" class="form-control"/>
</div>
</div>
<div className="row form-group mt-3">
<div className="col-md-12">
<label  for="email">Email</label>
<input type="email" id="email" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label  for="subject">Subject</label>
<input type="subject" id="subject" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label class="" for="message">Message</label>
<textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12 btn">
<input className='btn' type="submit" value="Send Message" class="btn btn-primary py-2 px-4 text-white"/>
</div>
</div>
</form>
      </div>
     <div className="container mt-2">
       <div>
        <Slider {...settings}>
         <div className="col-lg-8 col-sm-12 d-flex justify-content-between">
         <div className="col-lg-4 ">
         <img  src="Images/about.png.webp" alt="" />
         </div>
         <div className="col-lg-4">
          <h1>Hello</h1>
         </div>
         </div>
         <div className="col-lg-8 col-sm-12 d-flex justify-content-between">
         <div className="col-lg-4">
         <img  src="Images/about.png.webp" alt="" />
         </div>
         <div className="col-lg-4">
          <h1>Hello</h1>
         </div>
         </div>
        </Slider>
      </div>
     </div>
      <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="web_info d-flex justify-content-evenly">
            <div className="icon">
              <a href=""><i class="fa-solid fa-phone"></i></a>
            </div>
            <div className="info">
              <p>Give us a call</p>
              <strong>1-999-123-4567</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="web_info d-flex justify-content-evenly">
            <div className="icon">
              <a href=""><i class="fa-solid fa-envelope"></i></a>
            </div>
            <div className="info">
              <p>Give us a call</p>
              <strong>1-999-123-4567</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="web_info d-flex justify-content-evenly">
            <div className="icon">
              <a href=""><i class="fa-solid fa-location-dot"></i></a>
            </div>
            <div className="info">
              <p>Give us a call</p>
              <strong>1-999-123-4567</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }
 