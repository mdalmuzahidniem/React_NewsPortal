import React from "react";
import { Navbar, Nav,NavDropdown,Container, Row,Col } from 'react-bootstrap';
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default function TopNav(){

    return(
        <div>

          <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-top">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="navbar-top-left-menu">
                    <li className="nav-item">
                      <a href="pages/index-inner.html" className="nav-link">Advertise</a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/aboutus.html" className="nav-link">About</a>
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
                      <a href="#" className="nav-link"><i className="mdi mdi-magnify"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="{{route('login')}}" className="nav-link">Login</a>
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
                    <a className="navbar-brand" href="{{route('home')}}"
                      ><img src="{{url('assets/images/logo.svg')}}" alt=""
                    /></a>
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
                        <li className="nav-item active">
                          <a className="nav-link" href="{{route('home')}}">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/magazine.html">MAGAZINE</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/business.html">Business</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/sports.html">Sports</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/art.html">Art</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/politics.html">POLITICS</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/travel.html">Travel</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/contactus.html">Contact</a>
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
        </div>
    );
}