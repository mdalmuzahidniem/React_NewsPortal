import React from "react";
import { Navbar, Nav,NavDropdown,Container, Row,Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

export default function TopNav(){

    return(

    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-top">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="navbar-top-left-menu">
                <li className="nav-item">
                  <a href="/" className="nav-link">Advertise</a>
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
                        window.location.pathname === "/home"?
                        <a className="nav-link" href="/home" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Home</a>:
                        <a className="nav-link" href="/home">Home</a>
                      }
                    </li>
                    <li className="nav-item">
                      {
                        window.location.pathname === "/magazine"?
                        <a className="nav-link" href="/magazine" style={{textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "4px"}}>Magazine</a>:
                        <a className="nav-link" href="/magazine">Magazine</a>
                      }
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Art</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">POLITICS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Travel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
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