import React, {
Component, PropTypes
} from 'react';
import './index.css';

class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {name: '', description: ''};

    // this.onNameChange = this.onNameChange.bind(this);
    // this.onDescChange = this.onDescChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onNameChange(event) {
  //   this.setState({name: event.target.name});
  // }

  // onDescChange(event) {
  //   this.setState({description: event.target.description});
  // }
  //
  // handleChange(property, event){
  //   const values = this.state;
  //   values[property] = event.target.value;
  //   this.setState({name: values.name, description: values.description});
  // }

  onSubmit(event) {
    // console.log(event.target.value);
    // console.log(document.forms['test'])
    let result = [];
    const inputs = document.querySelectorAll(".form--field");
    for(let i = 0; i < inputs.length; i++){
      result.push(inputs[i].value);
      inputs[i].value = '';
    }
    event.preventDefault();
    this.props.submitFeed(result);
  }

  render () {
    return(
      <form className="form" name="test" onSubmit={this.onSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Name" className="form--field" />
          <input className="form--submit" type="submit" value="Submit" />
        </div>
        <div>
          <label>Description:</label>
          <textarea type="text" placeholder="Newsfeed" className="form--field" />
        </div>
      </form>
    );
  }

}
Input.PropTypes={
  submitFeed: React.PropTypes.func.isRequired
};

export default Input;
