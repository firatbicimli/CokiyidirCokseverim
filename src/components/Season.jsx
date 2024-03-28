import React from 'react'
import List from './List'
import movie from './../../movieList'
import Listitem from './Listitem'



const Season = () => {
  return (
    <div>
      {movie.map((season, index)=>  
     <Listitem key={index} season={season} />)}
    </div>
  )
}

export default Season
