import React from "react";

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Glossier</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/"> Home </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/products"> Products </a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" id="button" type="submit">Search</button>
            </form>
            <div class="cart">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Shopping-cart-icon-with-bags-white-background.png" width="40" height="40"/> <a class="carttext" href="">Cart</a>
            </div>
        </div>
        </nav> 
    );
}
 
export default Navbar;




