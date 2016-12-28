import React, { Component, PropTypes } from 'react';
import './index.css';

const Card = (props) => {
  return (
    <div className="card">
      <p className="card--name">by {props.name}</p>
      <h4 className="card--desc">{props.newsfeed}</h4>
    </div>
  );
};

Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  newsfeed: React.PropTypes.string.isRequired
};

export default Card;
