import React from 'react'
import List from './List'
 // List bileşenini import et


const Season = ({ data }) => {
  return (
    <div>
      {movie.map((season)=>  
        <div>
        <h2>{season.title}</h2>
        <List  data={season.episodes}  />
      </div> )}
    </div>
  )
}

export default Season
