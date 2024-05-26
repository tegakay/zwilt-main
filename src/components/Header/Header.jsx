import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/zwiltlogo.png";
import { useState } from "react";
import './Header.css'

const Header = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggleOpen = ()=>{
      setisOpen(!isOpen)
    }
  return (
    <header className="container">
      <div className="main-header">
      <button className="nav-toggle" aria-label="open navigation" onClick={toggleOpen} >
      
        <span className="hamburger"></span>
      </button>
     
      <NavLink className="site-logo filler" to="/">
        <div className="header">
          <img src={logo} />
        </div>
      </NavLink>

      <nav className={isOpen ?'nav-open':'nav'}>
        <ul className=" nav-child nav-primary">
          <li className="nav-list-item filler">Find Work</li>
          <li className="nav-list-item filler">Find Talent</li>
          <li className="nav-list-item filler">Articles</li>
          <li className="nav-list-item filler">About Us</li>
          <li className="nav-list-item filler">Contact Us</li>
        </ul>

        <ul className="nav-child nav-secondary">
          <li className="nav-list-item filler">Log In</li>
          <li className=" nav-list-item nav-join filler">Join Now</li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
