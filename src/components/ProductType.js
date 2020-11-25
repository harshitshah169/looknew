import React from 'react';
import {Link} from 'react-router-dom';

class ProductType extends React.Component {

    render(){
        return (
            <div className="product-type">
                <Link to={this.props.link}>
                <img src={this.props.imageName} alt="Men's Clothing" className="product-image" href="" />
                <h2 className="product-title">{this.props.productTitle}</h2>
                </Link>
            </div>
        )
    }
}

export default ProductType;