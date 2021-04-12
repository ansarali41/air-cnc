import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css'

const mapStyles = {
    width: '100%',
    height: '88vh',
    borderRadius: '2px',
}
const mapPosition = {
    lat: 23.8103,
    lng: 90.4125
}


export class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={mapPosition}
                className="">

                <Marker position={mapPosition} />
                
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCFF-0W7KqZroCvRYQ744etOSxRDPtjfIU")
})(GoogleMap)