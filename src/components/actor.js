import React from 'react';
export default ({actorName, selected}) => {
  console.log(actorName)
  return (
    (selected) ? (<option selected value={actorName}><span>{actorName}</span></option>) : (<option value={actorName}>{actorName}</option>)
  )
}