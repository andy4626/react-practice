import React, { PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import './Header.css';

class NavBar extends React.Component {
  render () {
    return (
      <nav className="nav">
        <ul className="nav--primary">
          <li><IndexLink activeClassName="nav--active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="nav--active" to="about">About</Link></li>
          <li ><Link activeClassName="nav--active" to="page">Feed</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
