import React,{useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { GiRocketThruster } from "react-icons/gi";
import { FaBars,FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function Navbar(){
    const [click,setClick]=useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
        <IconContext.Provider value={{color:"#ffff"}}>
        <nav className="navbar">
        <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
        <GiRocketThruster className="navbar-icon"/>
        Skye
        </Link>
        <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes/> : <FaBars/>}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
        <NavLink to="/" className={({ isActive})=>
        "nav-links" + (isActive ? " activated" : "")}
        onClick={closeMobileMenu}
        >
        Home
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Article" className={({ isActive})=>
        "nav-links" + (isActive ? " activated" : "")}
        onClick={closeMobileMenu}
        >
        Article
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Genre" className={({ isActive})=>
        "nav-links" + (isActive ? " activated" : "")}
        onClick={closeMobileMenu}
        >
        Genre
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Toppicks" className={({ isActive})=>
        "nav-links" + (isActive ? " activated" : "")}
        onClick={closeMobileMenu}
        >
        Top Picks
        </NavLink>
        </li>
        </ul>
        </div>
        </nav>
        </IconContext.Provider>
        </>
    );
}
export default Navbar;