import React, { Component } from "react";
import "./Header.scss";
import NavItem from './NavItem/NavItem';
import logo from "../assets/logo-hotjar.png";


class Header extends Component {
  
    burgerClick(){
        
    }
  
    render() {
    
    const navItem = [
            {key: '1', name: 'Product Tour', link: '#'},
            {key: '2', name: 'Pricing', link: '#'},
            {key: '3', name: 'Testimonials', link: '#'},
            {key: '4', name: 'Blog', link: '#'},
            {key: '5', name: 'Support', link: '#'},
            {key: '6', name: 'Try it free', link: '#'},
            {key: '7', name: 'Sign in', link: '#'}
          ];


      return (
        <header className="Header">
         <nav className="navbar navbar-expand-lg navbar-light unique-color-light">
                <a className="navbar-brand" href="#"><img src={logo} height="30" alt="" /></a>
                <button onclick={this.burgerClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav">
                        {navItem.map(item => {
                            return <NavItem link={item.link} name={item.name} key={item.key}/>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
      );
    }
  }
  
  export default Header;