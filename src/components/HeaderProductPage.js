import React from 'react';
import logo from '../images/logo.svg'

class HeaderProductPage extends React.Component {
    render(){
        return (
            <div id="header" className="header">
                <div className="brand">
                    <img src={logo} alt="Logo" id="header-img" className="logo" />
                    <h1 className="title"><a href="#video" className="nav-link">Look New</a></h1>
                </div>
            </div>
        )
    }
}

export default HeaderProductPage;