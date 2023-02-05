/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog2() {
  return <>
  <div className="container mt-5 d-flex justify-content-between">
    <div className="col-lg-8 col-sm-8">
    <div className="card">
  <img  src="../Images/pexels-photo-48604.webp" alt="Card image cap"/>
  <div className="card-body">
   <h3 className="card-text" >Google inks pact for new 35-storey office</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul class="blog-info-link mt-4">
<li><Link href="#"><i class="far fa-user"></i> Travel, Lifestyle</Link></li>
<li><Link href="#"><i class="far fa-comments"></i> 03 Comments</Link></li>
</ul>
  </div>
</div>
    </div>
    <div className="col-lg-4">
      <div className="row">
      <div className="div_2">
        
        </div>
      </div>
    </div>
  </div>
  </>
}