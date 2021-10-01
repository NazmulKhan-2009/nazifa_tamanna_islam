import React from 'react';

import Link from 'next/link'

export default function Navbar() {


 return (

  <nav  className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
  <div className="container">
   

    {/* <NavLink className="back-to-nav navbar-brand brand_scope" to='/'><img src={nav_logo} alt="" width="50%"/> <span>Doctor Care</span></NavLink> */}

    <div className="back-to-nav navbar-brand brand_scope"><Link  href='/'><a>Nazifa Tamanna Islam</a></Link></div>
   
         
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i className="lni-menu"></i>
    </button>

    <div  className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">

    
        

        

        <li className="nav-item ">
        
        
        <Link  href='/'><a>Home</a></Link>
        </li>
  
       
         
       
        <li className="nav-item">
           <Link  href='/dashboard'><a>Dashboard</a></Link>
            
       
        </li>

        <li className="nav-item">
          <Link className='linkok' href="/login">
            Log In
          </Link>
        </li>

       
        
      </ul>
    </div>
  </div>
</nav>

 )
}
