import React, {PropTypes} from 'react';
import NavBar from './common/Header';

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
