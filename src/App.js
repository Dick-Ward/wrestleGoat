import React, { Component } from 'react';
import wrestlers from "./data/wrestlers"
import WrestlerList from "./containers/wrestlerList"

class App extends Component {
  render() {
    console.log(wrestlers)
    return (
      <div>
      <WrestlerList />
      </div>
    );
  }
}

export default App;
