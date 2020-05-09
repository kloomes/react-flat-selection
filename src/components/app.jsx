import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import flats from '../data/flats.js';
// import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 48.884211,
      lng: 2.34689,
      center: {
        lat: 48.884211,
        lng: 2.34689
      }
    }
  }

  selectFlat = (newLat, newLng) => {
    this.setState({
      lat: newLat,
      lng: newLng,
      center: {
        lat: newLat,
        lng: newLng
      }
    })
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} pickFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.state.center} center={this.state.center} defaultZoom={13} bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}>
          <div className="marker" lat={this.state.lat} lng={this.state.lng}></div>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
