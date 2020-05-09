import React from 'react';
import Card from './card';
// import flats from '../data/flats';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map(
        flat => (
          <Card
            name={flat.name}
            key={flat.name}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
          />
        )
      )}
    </div>
  );
};

export default FlatList;
