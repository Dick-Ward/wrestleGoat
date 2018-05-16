import React, { Component } from 'react';
import wrestlers from "./data/wrestlers"
import WrestlerList from "./containers/wrestlerList"
import WrestleForm from "./containers/wrestlerForm"

class App extends Component {

   state = {
    wrestlers: []
  }


  render() {

    return (
      <div>
      <WrestleForm />
      <WrestlerList wrestlers={this.state.wrestlers}/>
      </div>
    );
  }

  componentDidMount(){
    this.setState({wrestlers})
  }

}

export default App;
