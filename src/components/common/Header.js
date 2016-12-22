import React, { PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import './Header.css';

class NavBar extends React.Component {
  render () {
    return (
      <nav className="ak-nav">
        <ul className="primary">
          <li className="ak-nav--item"><IndexLink to="/">Home</IndexLink></li>
          <li className="ak-nav--link"><Link to="about">About</Link></li>
          <li className="ak-nav--content"><Link to="page">Feed</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
