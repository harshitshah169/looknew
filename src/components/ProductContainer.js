import React from 'react';
import ProductType from './ProductType'
import MansClothing from '../images/mans-clothing.jpg'
import MansShoes from '../images/mans-shoes.jpg'
import MansAccessories from '../images/mans-accessories.jpg'
import WomansClothing from '../images/womans-clothing.jpg'
import WomansShoes from '../images/womans-shoes.jpg'
import WomansAccessories from '../images/womans-accessories.jpeg'

class ProductContainer extends React.Component {
    render(){
        return (
            <div id="products">
                <h2 className="heading">Choose product</h2>
                <div className="container">
                    <ProductType imageName={MansClothing} productTitle="Men Clothing" link="mans-clothing-page"/>
                    <ProductType imageName={MansShoes} productTitle="Men Shoes" link="mans-shoes-page"/>
                    <ProductType imageName={MansAccessories} productTitle="Men Accessories" link="mans-accessories-page"/>
                    <ProductType imageName={WomansClothing} productTitle="Women Clothing" link="womans-clothing-page"/>
                    <ProductType imageName={WomansShoes} productTitle="Women Shoes" link="womans-shoes-page"/>
                    <ProductType imageName={WomansAccessories} productTitle="Women Accessories" link="womans-accessories-page"/>
                </div>
            </div>
        )
    }
}

export default ProductContainer;