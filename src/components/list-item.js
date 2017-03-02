import React from 'react'
import moment from 'moment'
import Actor from './actor'

const getActorList = (actors) => {
  return actors.map((actor) => {
    return (<Actor key={actor} actor={actor} />)
  })
}


export default ({movieName, description, rating, actors, theme, releaseDate, rateColor}
) => {
  return (
    <li>
      <div style={{ borderLeft: `8px solid ${theme}` }}>

        <h3><span style={{ color: "red" }}> Movie Name : </span> {movieName + "    "} <span style={{ color: "red" }}> Rating : </span>  <span style={{ color: rateColor }}>| {rating}/5 |</span></h3>
        <h4>{description}</h4>
        <h3><span style={{ color: "red" }}> Actors : </span> </h3>
        <ul >
          {getActorList(actors)}
        </ul>
        <h3><span style={{ color: "red" }}>Release Date :</span> {moment(releaseDate).format("Do MMM YYYY")}</h3>
      </div>
    </li>
  )
}
