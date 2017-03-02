import React from 'react';
export default ({movieName, description, rating, actors, theme, releaseDate, rateColor}
) => {
  return (
    <li>
      <div style={{ borderLeft: `8px solid ${theme}` }}>
        <span style={{ color: rateColor }}> {rating}/5 </span>
        <h2>{movieName}</h2>
        <h4>{description}</h4>
        <h3>{actors.toString()}</h3>
        <h3>{releaseDate}</h3>
      </div>
    </li>
  )
}