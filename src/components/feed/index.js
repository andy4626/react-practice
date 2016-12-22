import React, {
Component, PropTypes
} from 'react';
import Card from '../card/index';

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {newsfeed: this.props.newsfeed};
  }

  render(){
    return (
      <div>
        {this.state.newsfeed.map(function(feed, index){
          return <Card key={index} name={feed[0]} description={feed[1]} />;
        })}
        </div>
      );
  }
}

Feed.PropTypes={
  newsfeed: React.PropTypes.array
};


export default Feed;
