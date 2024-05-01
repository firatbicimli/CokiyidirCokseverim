import movie from './../../movieList'
import Listitem from './Listitem'


const Season = () => {
  return (
    <div className='container'>
      {movie.map((season, index)=>  
     <Listitem key={index} season={season} />)}
    </div>
  )
}

export default Season
