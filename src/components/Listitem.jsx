import  { useState } from 'react'
import List from './List'
import PropTypes from 'prop-types';

const Listitem = ({ season }) => {

const [extended, setExtended] = useState(false)

  return (
      <div className='list-card' onClick={() => setExtended((prev) => !prev)}>
        <h2 className='title'>{season.title}</h2>
        {extended && (<List data={season.episodes} />)}
      </div>
  )
}

Listitem.propTypes = {
  season: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Listitem
