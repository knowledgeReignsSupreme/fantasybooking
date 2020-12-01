import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../design/Vector.svg'
import mobileLogo from '../design/Phone Logo.svg';
export default function Nav({navOn, setNavOn}) {
  return (
    <>
    <nav className="nav">
        <ul className="nav-list">
        <Link to="/" exact="true" className="Logo">
        <img  src={Logo} alt="Logo"/>
        </Link>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/destinations" exact>Destinations</NavLink>
          <NavLink to="/attractions" exact>Attractions</NavLink>
          <NavLink to="/blog" exact>Blog</NavLink>
        </ul>

        {navOn ? 
        <ul className={`nav-list-mobile ${navOn ? 'show' : ''}`} >
          <Link to="/" exact="true">
        <img className="Logo" src={mobileLogo} alt="Logo"/>
        </Link>
          <NavLink to="/" exact  onClick={() => setNavOn(!navOn)}>Home</NavLink>
          <NavLink to="/destinations" exact onClick={() => setNavOn(!navOn)}>Destinations</NavLink>
          <NavLink to="/attractions" exact onClick={() => setNavOn(!navOn)}>Attractions</NavLink>
          <NavLink to="/blog" exact onClick={() => setNavOn(!navOn)}>Blog</NavLink>
        </ul> : ''}
    </nav>
</>
  )
}
