import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaGithub, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
      <footer>
    <h3 className="footer__header">This site was designed and built by davidOren</h3>
    <div className="footer__wrapper">
    <div className="footer__nav footer__left">
      <a href="https://github.com/knowledgeReignsSupreme">
    <p>Github: <FaGithub className="footer__icon"/></p>
    </a>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/destinations" exact>Destinations</NavLink>
    </div>  
    <div className="footer__nav footer__right">
    <a href="https://www.facebook.com/david.oren.144">
    <p>Facebook: <FaFacebook className="footer__icon"/></p>
    </a>
    <NavLink to="/attractions" exact>Attractions</NavLink>
    <NavLink to="/blog" exact>Blog</NavLink>
    </div>
    </div>
    <p className="disclaimer">I do not own any of the images on this site</p>

    </footer>
    
  )
}
