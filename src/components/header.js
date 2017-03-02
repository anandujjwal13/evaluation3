import React from 'react'
//import Actor from './actor'
const getOptions = (actors) => {
  return actors.map((actor, index) => {
    return (<option value={actor}>{actor}</option>)
  })
}

export default ({actors, selectActor}) => {
  return (
    <div >
      <h1>This Weeks Movies </h1>
      <div>
        <div>Filter Movies By Actors</div>
        <select onChange={(e) => selectActor(e.target.value)} >
          <option value="all" selected>all</option>
          {getOptions(actors)}
        </select>
      </div>
    </div>
  )
}
