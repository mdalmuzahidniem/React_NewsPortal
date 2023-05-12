import React, { useEffect, useState } from "react";
import { Navbar, Nav,NavDropdown,Container, Row,Col } from 'react-bootstrap';
import { Link,useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default function TopNav(){
  
  const [path, setPath]=useState("");
  const location = useLocation();

  useEffect(()=>{

    if(window.location.pathname === "/home"){
      setPath("home");
    }
    if(window.location.pathname === "/magazine"){
      setPath("magazine");
    }
    if(window.location.pathname === "/business"){
      setPath("business");
    }
    if(window.location.pathname === "/sports"){
      setPath("sports");
    }
    if(window.location.pathname === "/art"){
      setPath("art");
    }
    if(window.location.pathname === "/politics"){
      setPath("politics");
    }
    if(window.location.pathname === "/travel"){
      setPath("travel");
    }
    if(window.location.pathname === "/contact"){
      setPath("contact");
    }
  
  },[location])

    return(

    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-top">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="navbar-top-left-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Advertise</Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Events</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Write for Us</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">In the Press</a>
                </li>
              </ul>
              <ul className="navbar-top-right-menu">
                <li className="nav-item">
                  <input type="text"/>
                  <a href="#" className="nav-link" style={{backgroundColor:"black", paddingInline:"4px"}} ><i className="mdi mdi-magnify"></i></a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a className="navbar-brand" href="/"
                  ><img src="./assets/images/logo.svg" alt="world time"/>
                </a>
              </div>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="navbar-collapse justify-content-center collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav d-lg-flex justify-content-between align-items-center"
                  >
                    <li>
                      <button className="navbar-close">
                        <i className="mdi mdi-close"></i>
                      </button>
                    </li>
                    <li className="nav-item">
                      {
                        path == "home"?
                        <Link className="nav-link" to="/home" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Home</Link>:
                        <Link className="nav-link" to="/home">Home</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "magazine"?
                        <Link className="nav-link" to="/magazine" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Magazine</Link>:
                        <Link className="nav-link" to="/magazine">Magazine</Link> 
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "business" ? 
                        <Link className="nav-link" to="/business" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Business</Link>:
                        <Link className="nav-link" to="/business">Business</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "sports" ? 
                        <Link className="nav-link" to="/sports" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Sports</Link>:
                        <Link className="nav-link" to="/sports">Sports</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "art" ? 
                        <Link className="nav-link" to="/art" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Art</Link>:
                        <Link className="nav-link" to="/art">Art</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "politics" ? 
                        <Link className="nav-link" to="/politics" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Politics</Link>:
                        <Link className="nav-link" to="/politics">Politics</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "travel" ? 
                        <Link className="nav-link" to="/travel" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Travel</Link>:
                        <Link className="nav-link" to="/travel">Travel</Link>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        path == "contact" ? 
                        <Link className="nav-link" to="/contact" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Contact</Link>:
                        <Link className="nav-link" to="/contact">Contact</Link>
                      }
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
        
    );
}