import React, { Component } from 'react';
import wrestlers from "./data/wrestlers"
import WrestlerList from "./containers/wrestlerList"
import WrestleForm from "./containers/wrestlerForm"

class App extends Component {

   state = {
    wrestlers: this.props.wrestlers
  }


  render() {
    console.log(this.state)

    const createWrestlerObject = (wrestlerObjectEric) => {

      this.setState({wrestlers: [...this.state.wrestlers, wrestlerObjectEric]})
    }

    return (
      <div>
      <WrestleForm createWrestlerObject={createWrestlerObject} />
      <WrestlerList wrestlers={this.state.wrestlers}/>
      </div>
    );
  }



}


App.defaultProps = {
    wrestlers
  }

export default App;


// function that adds a wrestler to the list
