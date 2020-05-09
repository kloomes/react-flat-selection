import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../data/flats.js';
import SimpleMap from './map';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
