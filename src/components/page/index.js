import React, {
Component
} from 'react';
import Feed from '../feed/index';
import Input from '../input/index';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = { newsfeed: [] };
    this.addFeed = this.addFeed.bind(this);
  }

  addFeed(input){
    let updatedState = this.state.newsfeed;
    updatedState.push(input);
    this.setState({newsfeed: updatedState});
  }

  render(){
    return(
      <div>
        <Input submitFeed={this.addFeed}/>
        <Feed newsfeed={this.state.newsfeed} />
      </div>
    );
  }
}

export default Page;
