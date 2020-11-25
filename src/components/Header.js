import React from 'react';
import logo from '../images/logo.svg'

class Header extends React.Component {
    render(){
        return (
            <div id="header" className="header">
                <div className="brand">
                    <img src={logo} alt="Logo" id="header-img" className="logo" />
                    <h1 className="title"><a href="#video" className="nav-link">Look New</a></h1>
                </div>
                <i className="menu" id="menu"></i>
                <nav id="nav-bar" className="main-nav">
                    <ul> 
                        <li>
                        <a href="#products" className="nav-link">Products</a>
                        </li>
                        <li>
                        <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;