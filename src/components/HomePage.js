import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SectionVideo from './SectionVideo';
import ProductContainer from './ProductContainer';
import ContactUs from './ContactUs';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <ProductContainer />
                <ContactUs />
            </div>
        )
    }
}

export default HomePage;