import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
  
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  
    <Link to="/" className="navbar-brand" > Navbar </Link>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink  exact="true" activeclassname="active" className="nav-link" to="/"> Home </NavLink>
        <NavLink  exact="true" activeclassname="active" className="nav-link" to="/about"> About </NavLink>
        <NavLink  exact="true" activeclassname="active" className="nav-link" to="/login"> Login </NavLink>
        
      </div>
    </div>
  
</nav>
   
   
  

  )
}
