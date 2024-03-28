// App.js

import React from 'react';
import List from './components/List'; // List bileşenini import et
import movie from '../movieList'
import Season from './components/Season';



function App() {
                                                                       
  return (
    <>
      <h1>Çok iyidir Çok severim</h1>
      <div className="card">
        {movie.map((season)=>  
        <div className="container">
        <h2>{season.title}</h2>
        <List data={season.episodes} />
      </div> )}
      </div>
    </>
  );
}

export default App;
