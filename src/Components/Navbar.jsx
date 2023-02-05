/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg sticky-top">
    <div className="col-lg-3 medix">
    <h3 className=' text-white'><span><img src="Images/WhatsApp Image 2023-01-01 at 8.15.34 PM.jpeg" alt="" /></span>Medix</h3>
    </div>
  <div className="container  text-center">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-auto " id="navbarNav">
      <ul className="navbar-nav ">
      <li className="nav-item active">
          <Link className="nav-link  text-white" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="about">About</Link>
        </li>
      </ul>
    </div>
 <div className="col-lg-3 social-links">
 <button><a href=''>Request Services</a></button>
 </div>
  </div>
</nav>
  
  </>
}
