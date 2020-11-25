import React from 'react';
import MapContainer from './MapContainer'
class ContactUs extends React.Component {
    render(){
        return (
            <div>
                <div id="contact">
                <h2 className="heading">Contact us</h2>
                    <div className="contact-container">
                        <p className="contact-description">Follow us on <br/>
                        <a href="https://www.instagram.com/looknew.tk/" target="_blank" style={{fontWeight: 900}}>www.instagram.com/looknew.tk</a><br/>
                        for daily updates of our products</p>
                        <div className="contact-description">
                                <p>Click on the below contact number to whatsapp us.</p> <br/>
                                <p style={{textAlign: "center"}}><a href="http://wa.me/919892882253" target="_blank" style={{fontWeight: 900}}>+91 9892882253</a></p>
                                <p style={{textAlign: "center"}}><a href="http://wa.me/918976002697" target="_blank" style={{fontWeight: 900}}>+91 8976002697</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="copyright">Written and coded by -
                        <a href="https://github.com/harshitshah169/MyWebsites" target="_blank" style={{fontWeight: 900}}>Harshit Shah</a>
                        -
                    </p>
                </div>
                <MapContainer />
          </div>
        )
    }
}

export default ContactUs;