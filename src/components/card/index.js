import React, {
Component
} from 'react';
import './index.css'

const Card = (props) => {
  return (
    <div className="card">
      <h4 className="card--name">{props.name}</h4>
      <p className="card--desc">{props.description}</p>
    </div>
  );
};

Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default Card;
