import React, { Component, PropTypes } from 'react';
import './index.css';
import TextInput from '../common/textInput';

class Input extends Component {
  constructor (props) {
    super(props);
  }


  render () {
    return(
      <form className="form" name="test" onSubmit={this.props.onSubmit}>
        <TextInput
          label="Name"
          name="name"
          value={this.props.newsfeed.name}
          onChange={this.props.onChange}
          error={this.props.errors.name}/>
        <TextInput
          label="Newsfeed"
          name="newsfeed"
          value={this.props.newsfeed.newsfeed}
          onChange={this.props.onChange}
          error={this.props.errors.newsfeed}/>
        <input className="form--submit" type="submit" value="Submit" />
      </form>
    );
  }

}
Input.PropTypes={
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  newsfeed: React.PropTypes.object.isRequired
};

export default Input;
