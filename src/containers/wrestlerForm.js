import React from 'react'

class WrestleForm extends React.Component {
  render(){
    return(
   <div className="wrestlerForm">
   <h5>Add a new contender for GOAT</h5>
   <form>
   <label>Name: <input name="name" type="text" /></label>
   <br/>
   <label>Pro:   <input name="pro" type="text" /></label>
   <br/>

   <label>Con: <input name="con" type="text" /></label>
   <br/>
   <input type="submit" />

   </form>
   </div>
 )
}
}

export default WrestleForm
