import React, { Component } from "react";
import "./Header.scss";
import logo from "../assets/logo-hotjar.png";

class Header extends Component {
    state = {
      active: ''
    };
  
    render() {
      return (
        <header className="Header">
         <nav class="mb-4 navbar navbar-expand-lg navbar-light unique-color-light">
                <a class="navbar-brand" href="#"><img src={logo} height="30" alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><i class="fa fa-heart"></i> Follow <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-thumbs-up"></i> Collaboration</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-newspaper-o"></i> Media </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                                <a class="dropdown-item" href="#">Facebook</a>
                                <a class="dropdown-item" href="#">Instagram</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
      );
    }
  }
  
  export default Header;