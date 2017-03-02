import React from 'react';
import ListItem from './list-item'

export const getColor = (rating) => {
  if (rating === 5) return 'green'
  if (rating === 3 || rating === 4) return 'blue'
  return 'red'
}


const getResult = (moviesArray) => {
  return moviesArray.map((movie) => {
    return (
      <div>
        <ListItem key={movie.id} movieName={movie.name} description={movie.description} rating={movie.rating} actors={movie.actors} theme={movie.theme} releaseDate={movie.releaseDate} rateColor={getColor(movie.rating)} />
        <hr />
      </div>
    )
  })
}

export default ({normalisedData, actorName, allMovies}) => {
  let moviesArray = (actorName === 'all') ? allMovies : normalisedData[actorName]
  return (
    <ul >
      {getResult(moviesArray)}
    </ul>
  )
}

