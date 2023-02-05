import React from 'react'

export default function About() {
  return  <>
  <h1>about</h1>
  <div className="col-lg-12 mt-5">
    <h1 className='text-center '>Contact</h1>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-8">
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
    </div>
  </div>
  </>
}
