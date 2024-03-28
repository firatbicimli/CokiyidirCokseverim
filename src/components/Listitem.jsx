import React, { useState } from 'react'
import List from './List'

const Listitem = ({ season }) => {

    const [extended, setExtended] = useState(false)

  return (
      <div onClick={() => setExtended((prev) => !prev)}>
        <h2 className='title'>{season.title}</h2>
        {extended && (<List data={season.episodes} />)}
      </div>
  )
}

export default Listitem
