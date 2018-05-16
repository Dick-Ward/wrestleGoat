import React from 'react'
import Wrestler from '../components/wrestler'

class WrestlerList extends React.Component{
  render(){

    const wrestler = this.props.wrestlers.map(wrestler => {
      return <Wrestler key={wrestler.name} wrestlerInfo={wrestler} />
    })
    return(
      <div>{wrestler}</div>
    
    )
  }
}

export default WrestlerList
