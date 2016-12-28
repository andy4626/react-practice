import React, { Component } from 'react';
import './index.css';

class AndrewLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState({count: this.state.count + 1});
  }

  subtract () {
    this.setState({count: this.state.count - 1});
  }

  render () {
    return (
      <div className="btn--container">
        <button className="btn" onClick={this.add}>Add one</button>
        <button className="btn" onClick={this.subtract}>Subtract one</button>
        <p>Current Number: {this.state.count}</p>
      </div>
    );
  }
}

export default AndrewLayout;
