// App.js

import React from 'react';
import List from './components/List'; // List bileşenini import et
import { useState, useEffect } from 'react';
import movie from '../movieList'

function App() {
                                                                       
  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([])


  // fetch the users
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.movieList())
      // save the complete list of users to the new state
      .then(data => setApiUsers(data.movie))
      // if there's an error we log it to the console
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((movie) =>
      movie.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }
  return (
    <>
      <h1>Çok iyidir Çok severim</h1>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <div className="card">
        {movie.map((season)=>  <div className="container">
        <h2>{season.title}</h2>
        <List data={season.episodes} />
      </div> )}
      </div>
    </>
  );
}

export default App;
