import React from "react";
import "./Page404.css"

export default function Page404(){

    return(
        <div className="container-fluid error-container">
            <h1 className="error-title">404 Error - Page Not Found</h1>
            <p className="error-message">We're sorry, but the page you are looking for cannot be found.</p>
            <img src="https://via.placeholder.com/500x300" alt="Page Not Found" className="error-image"/> 
            <a href="/home" className="btn btn-primary">Go back to Home</a>
            <br/>
      </div>
    );
}