import React from 'react';
// import { NavLink } from 'react-router-dom';
// import nav_logo from '../../../../images/logos/logo.png';
// import "./navbar.css";
// import $ from 'jquery';
// import { Link as SmoothLink } from 'react-scroll';
import Link from 'next/link'

export default function Navbar() {


 

  // $('.navbar-nav').onePageNav({
  //   currentClass: 'active'
  // });

  



 return (

  <nav  className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
  <div className="container">
   

    {/* <NavLink className="back-to-nav navbar-brand brand_scope" to='/'><img src={nav_logo} alt="" width="50%"/> <span>Doctor Care</span></NavLink> */}
    <Link  href='/'><a>Home</a></Link>
   
         
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i className="lni-menu"></i>
    </button>

    <div  className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">

    
        {/* <li className="nav-item active">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li> 
         <li className="nav-item">
          <a className="nav-link" href="#service">
            Services
          </a>
        </li> */}

        

        <li className="nav-item ">
        
        {/* <Link className='nav-link'  href="/" >Home</Link> */}

        <Link  href='/'><a>Home</a></Link>
        </li>
  
        {/* <li className="nav-item">
          <SmoothLink className='nav-link' to="about" smooth={true} duration={800}>About</SmoothLink>
        </li>
        

        <li className="nav-item">
          <SmoothLink className='nav-link' to="service" smooth={true} duration={800}>Service</SmoothLink>
        </li>
        <li className="nav-item">
        <SmoothLink className='nav-link' to="doctor" smooth={true} duration={800}>Doctor</SmoothLink>
        </li>
        
        <li className="nav-item">
          <SmoothLink className='nav-link' to="blog" smooth={true} duration={800}>Blog</SmoothLink>
        </li>
        <li className="nav-item">
        <SmoothLink className='nav-link' to="online" smooth={true} duration={800}>Online</SmoothLink>
        </li>
        <li className="nav-item">
        <SmoothLink className='nav-link' to="contact" smooth={true} duration={800}>Contact</SmoothLink>
        </li> */}
         
        {/* ROUTE  */}
        <li className="nav-item">
           <Link  href='/dashboard'><a>Dashboard</a></Link>
            
       
        </li>

        <li className="nav-item">
          <Link className='linkok' href="/login">
            Log In
          </Link>
        </li>

        {/* <li className="nav-item">
        <a href="#" className="nav-link"><i class="far fa-bell"></i> <span className="badge bg-danger">{`(8)`}</span></a>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>

 )
}
