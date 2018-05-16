import React from 'react'

class WrestleForm extends React.Component {
  state = {
    name: "",
    pro: "",
    con: ""
  }

 handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value})
 }

 handleSubmit = (event) => {
   event.preventDefault()
  this.props.createWrestlerObject(this.state)
 }

  render(){


    return(
   <div className="wrestlerForm">
   <h5>Add a new contender for GOAT</h5>
   <form onSubmit={this.handleSubmit}>
   <label>Name: <input onChange={this.handleChange} name="name" type="text" /></label>
   <br/>
   <label>Pro:   <input onChange={this.handleChange}  name="pro" type="text" /></label>
   <br/>

   <label>Con: <input onChange={this.handleChange}  name="con" type="text" /></label>
   <br/>
   <input type="submit"  />

   </form>
   </div>
 )
}
}

export default WrestleForm

// event handler (on submit)
// input needs (on change) - DONE
// STATE - CREATED
// Needs to pop up on screen
//
