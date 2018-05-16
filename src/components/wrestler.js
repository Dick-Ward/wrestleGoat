import React from 'react'

const Wrestler = props => {
  const {wrestlerInfo } = props
  return (
    <div className="wrestlerCard">
      <h3>{wrestlerInfo.name}</h3>
      <ul>
        <li>Pro: {wrestlerInfo.pro}</li>
        <li>Con: {wrestlerInfo.con}</li>
      </ul>
    </div>
  )
}

export default Wrestler
