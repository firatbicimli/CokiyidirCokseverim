// App.js

import React from 'react';
import List from './components/List'; // List bileşenini import et

function App() {
  const movieAndBookList = [
    { id: 1, title: 'Sunshine - C', category: 'Film' },
    { id: 2, title: 'Seabiscut - C - O', category: 'Film' },
    { id: 3, title: 'Brokeback Mountain - O', category: 'Film' },
    { id: 4, title: 'The Eight Mountains - C', category: 'Film' },
    { id: 5, title: 'Boiling Point - C', category: 'Film' },
    { id: 6, title: 'Kulüp 2.sezon - O', category: 'Dizi' },
    { id: 7, title: 'The Bear - O', category: 'Dizi' },
    { id: 8, title: 'The Deepest Breath - C', category: 'Belgesel' },
    { id: 9, title: 'Our Planet II - C', category: 'Belgesel' },
    { id: 10, title: 'Be Water - C', category: 'Belgesel' },
    { id: 11, title: 'The Lost Chronicles - O', category: 'Kitap' },
    { id: 12, title: 'Wes Anderson', category: 'Kitap' },
  ];
      const movieAndBookList2 = [
        { id: 13, title: 'David Beckham - O', category: 'Belgesel' },
    { id: 14, title: 'The Last Dance - O', category: 'Belgesel' },
    { id: 15, title: 'Bobby Robson - O', category: 'Belgesel' },
    { id: 16, title: 'El Casa Figo - C', category: 'Belgesel' },
    { id: 17, title: 'The Two Escobar - C', category: 'Belgesel' },
    { id: 18, title: 'Killer of the Flower Moon - C', category: 'Film' },
    { id: 19, title: 'All of Us Strangers - C', category: 'Film' },
    { id: 20, title: 'Poor Thing - O - C', category: 'Film' },
    { id: 21, title: 'May December - C', category: 'Film' },
    { id: 22, title: 'George Harrison - C', category: 'Belgesel' },
    { id: 23, title: 'Passages - C', category: 'Film' },
    { id: 24, title: 'Fair Play - C', category: 'Film' },
      ];
      const movieAndBookList3 = [
    { id: 25, title: 'Karanlık Gece - C', category: 'Film' },
    { id: 26, title: 'Do Not Disturb - O', category: 'Film' },
    { id: 27, title: 'Oregon - O', category: 'Film' },
    { id: 28, title: 'Portlandia - C', category: 'Dizi' },
    { id: 29, title: 'SILO - C', category: 'Dizi' },
    { id: 30, title: 'Shrinking - C', category: 'Dizi' },
    { id: 31, title: 'Line of Duty - C', category: 'Dizi' },
    { id: 32, title: 'Wilfred - O', category: 'Dizi' },
    { id: 33, title: 'Operation Fortune - O', category: 'Film' },
    { id: 34, title: 'Bone Collector - O', category: 'Film' },
    { id: 35, title: 'The Covenant - C', category: 'Film' },
    { id: 36, title: 'Race to Summit - C', category: 'Belgesel' },
    { id: 37, title: 'Gangster - O', category: 'Kitap' },
    { id: 38, title: 'Bu son duygusu - C', category: 'Kitap' },
    { id: 39, title: 'Dünyanın sonundaki mantar - C', category: 'Kitap' },
    { id: 40, title: 'Paramorfose - This is Why - O', category: 'Şarkı' },
    { id: 41, title: 'Torres - Collect - O', category: 'Şarkı' },
    { id: 42, title: 'Melike Şahin - Diva yorgun - O', category: 'Şarkı' },
    { id: 43, title: 'Lim Pesto - Mazallah - O', category: 'Şarkı' },
    { id: 44, title: 'Junior Sales - Dificil - O', category: 'Şarkı' },
    { id: 45, title: 'Hooverphonic - Plus Profond - C', category: 'Şarkı' },
    { id: 46, title: 'Hooverphonic - Eden - C - O', category: 'Şarkı' },
    { id: 47, title: 'STRFK - Being No One Going Nowhere - C', category: 'Şarkı' },
    { id: 48, title: 'Play - Oum Shatt - C', category: 'Şarkı' },
    { id: 49, title: 'Dust - Allah-Las - C', category: 'Şarkı' },
    { id: 50, title: 'Warhaus - Memory - C', category: 'Şarkı' },
      ];
    // İsterseniz buraya başka filmler ve kitaplar ekleyebilirsiniz
  

  return (
    <>
      <h1>Çok iyidir Çok severim</h1>
      <div className="container">
        <h2>2.sezon 1.bölüm</h2>
        <List data={movieAndBookList} />
      </div>
      <div className="container">
        <h2>2.sezon 2.bölüm</h2>
        <List data={movieAndBookList2} />
      </div>
      <div className="container">
        <h2>2.sezon 3.bölüm</h2>
        <List data={movieAndBookList3} />
      </div>
    </>
  );
}

export default App;
