import React, { Component } from 'react';

class Card extends Component {
  pickFlat = () => {
    this.props.pickFlat(this.props.lat, this.props.lng)
  }

  render() {
    return (
      <div className="card" onClick={this.pickFlat} style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
        <div className="card-category">
          {`${this.props.price} ${this.props.priceCurrency}`}
        </div>
        <div className="card-description">
          <h2>
            {this.props.name}
          </h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Card;
