import React from 'react'

const getOptions = (actors) => {
  return actors.map((actor, index) => {
    return (<option key={actor} value={actor}>{actor}</option>)
  })
}

export default ({actors, selectActor}) => {
  return (
    <div >
      <div className="jumbotron"> <h1 style={{ margin: "auto" }}>This Weeks Movies </h1></div>
      <div>
        <div><h2>Filter Movies By Actors</h2></div>
        <select onChange={(e) => selectActor(e.target.value)} >
          <option value="all" selected>all</option>
          {getOptions(actors)}
        </select>
      </div>
    </div>
  )
}
