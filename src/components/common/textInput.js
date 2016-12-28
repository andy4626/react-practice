import React, { Component, PropTypes } from 'react';
import './textInput.css';

class TextInput extends Component{
  constructor (props) {
    super(props);
  }

  render(){
    let wrapperClass = 'input--container';
    if(this.props.error && this.props.error.length > 0){
      wrapperClass += " " + "form--error";
    }else{
      wrapperClass = wrapperClass.replace("form--error", "");
    }
    return (
      <div>
        <label className="form--label" htmlFor={this.props.name}>{this.props.label}</label>
        <div className={wrapperClass}>
          <input type="text"
            name={this.props.name}
            className="form--control"
            placeholder={this.props.name}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange} />
            <div className="input--error__message">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

TextInput.PropTypes={
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  error: React.PropTypes.string
};

export default TextInput;
