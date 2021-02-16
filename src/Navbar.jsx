import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {NavLink} from 'react-router-dom'
const obj = {
    fontSize:"1.2rem",
}
const Navbar = ()=>{
return (
    <>
<div className = "container-fluid  bg-dark">
<div className = "row">
<div className  = "container col-10 mx-auto" >
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    < NavLink exact class="" to="/"><h1><span class="badge bg-secondary">Team CodeMonk</span></h1></ NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-lg-0" style = {obj}>
        <li class="nav-item">
          <NavLink activeClassName = "menu_active" className  = "active "   exact to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  activeClassName = "menu_active" className = "active" exact to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName = "menu_active"  className = "active" exact to="/service">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName = "menu_active" className = "active"  exact to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>    
</div>
</div>
</div>
    </>
)
}
export default Navbar;