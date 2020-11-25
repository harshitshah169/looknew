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
                    <ProductType imageName={MansClothing} productTitle="Man's Clothing" link="mans-clothing-page"/>
                    <ProductType imageName={MansShoes} productTitle="Man's Shoes" link="mans-shoes-page"/>
                    <ProductType imageName={MansAccessories} productTitle="Man's Accessories" link="mans-accessories-page"/>
                    <ProductType imageName={WomansClothing} productTitle="Woman's Clothing" link="womans-clothing-page"/>
                    <ProductType imageName={WomansShoes} productTitle="Woman's Shoes" link="womans-shoes-page"/>
                    <ProductType imageName={WomansAccessories} productTitle="Woman's Accessories" link="womans-accessories-page"/>
                </div>
            </div>
        )
    }
}

export default ProductContainer;