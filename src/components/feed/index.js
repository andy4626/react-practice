import React, { Component, PropTypes } from 'react';
import Card from '../card/index';

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {data: this.props.data};
  }

  render(){
    return (
      <div>
        {this.state.data.map(function(feed, index){
          return <Card key={index} name={feed.name} newsfeed={feed.newsfeed} />;
        })}
        </div>
      );
  }
}

Feed.PropTypes={
  data: React.PropTypes.array
};


export default Feed;
