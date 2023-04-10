import React from "react";
import "./Page404.css"

export default function Page404(){

    return(
        <div class="container-fluid error-container">
            <h1 class="error-title">404 Error - Page Not Found</h1>
            <p class="error-message">We're sorry, but the page you are looking for cannot be found.</p>
            <img src="https://via.placeholder.com/500x300" alt="Page Not Found" class="error-image"/> <br/>
            <a href="/home" class="btn btn-primary">Go back to Home</a>
      </div>
    );
}