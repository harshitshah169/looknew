import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends React.Component {
  render() {
    const style = {
        position: 'relative',
        width: '100%',
        height: '700px'
      }
    const containerStyle = { 
        margin: '40px 0px',
        width: '100%',
        height: '100%',
        position: 'relative',
      }
    return (
      <Map 
        containerStyle={containerStyle}
        style={style} 
        google={this.props.google}
        initialCenter={{
            lat: 19.294905, 
            lng: 72.848269,
          }} 
        zoom={15} 
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Welcome to Looknew</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAAjnl8S7jBlTWLDPefsbbLlv_oqY1tFmI"
})(MapContainer)