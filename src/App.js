 import React, { Component } from 'react';
 import logo from './logo.svg';
import Main from './containers/Main'
import Navigator from './containers/Navigator'

class App extends Component {
  render() {
    return (
      <div className="App" style={{
         position:'absolute',
         top:'0px',
         left:'0px',
         height:"100vh",
         width:"100vw",
         background:"#ECEFF1"}}>
        
         <Main/>
         
      </div>
    );
  }
}



export default App;
