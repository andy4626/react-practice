import React, { Component } from 'react';
import Feed from '../feed/index';
import NewsInput from '../input/index';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsfeed: {name:'', newsfeed:''},
      data:[],
      errors:{}
    };
    this.addFeed = this.addFeed.bind(this);
    this.setNewsfeedState = this.setNewsfeedState.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  setNewsfeedState(event){
    let field = event.target.name;
    let value = event.target.value;
    let updatedState = this.state.newsfeed;
    updatedState[field] = value;
    return this.setState({newsfeed: updatedState});
  }

  formIsValid(){
    let formIsValid = true;
    let errors = {};
    console.log(this.state.newsfeed);

    if(this.state.newsfeed.name.length == 0 ){
      errors.name= "C'mon type in your name";
      formIsValid = false;
    }
    if(this.state.newsfeed.newsfeed.length == 0 ){
      errors.newsfeed= "C'mon type in your newsfeed";
      formIsValid = false;
    }
    if(this.state.newsfeed.name.length > 0 && this.state.newsfeed.newsfeed.length > 0){
      errors = {};
      formIsValid = true;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  addFeed(event){
    event.preventDefault();
    if(this.formIsValid()){
      let newData = this.state.data;
      let newNewsfeed = {name:'', newsfeed:''};
      newData.push(this.state.newsfeed);
      this.setState({newsfeed: newNewsfeed, data: newData});
    }
  }

  render(){
    return(
      <div>
      //naming convention
        <NewsInput
          newsfeed={this.state.newsfeed}
          onChange={this.setNewsfeedState}
          onSubmit={this.addFeed}
          errors={this.state.errors}/>
        <Feed data={this.state.data} />
      </div>
    );
  }
}

export default Page;
