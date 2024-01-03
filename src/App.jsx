// App.js

import React from 'react';
import List from './components/List'; // List bileşenini import et
import { useState } from 'react';
import { useEffect } from 'react';

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
    { id: 43, title: 'Lin Pesto - Mazallah - O', category: 'Şarkı' },
    { id: 44, title: 'Junior Sales - Dificil - O', category: 'Şarkı' },
    { id: 45, title: 'Hooverphonic - Plus Profond - C', category: 'Şarkı' },
    { id: 46, title: 'Hooverphonic - Eden - C - O', category: 'Şarkı' },
    { id: 47, title: 'STRFK - Being No One Going Nowhere - C', category: 'Şarkı' },
    { id: 48, title: 'Play - Oum Shatt - C', category: 'Şarkı' },
    { id: 49, title: 'Dust - Allah-Las - C', category: 'Şarkı' },
    { id: 50, title: 'Warhaus - Memory - C', category: 'Şarkı' },
      ];
    const movieAndBookList4 = [
    { id: 51, title: 'Bodies - O', category: 'Dizi' },
    { id: 52, title: 'Boydguard - C', category: 'Dizi' },
    { id: 53, title: 'Slow Horses - O - C', category: 'Dizi' },
    { id: 54, title: 'La Caza Del Octube Rojo - C', category: 'Film' },
    { id: 55, title: 'Red Dragon - O', category: 'Film' },
    { id: 56, title: 'Shame - C', category: 'Film' },
    { id: 57, title: 'Line of Duty - C', category: 'Dizi' },
    { id: 58, title: 'Wilfred - O', category: 'Dizi' },
    { id: 59, title: 'Operation Fortune - O', category: 'Film' },
    { id: 60, title: 'Bone Collector - O', category: 'Film' },
    { id: 61, title: 'The Covenant - C', category: 'Film' },
    { id: 62, title: 'Race to Summit - C', category: 'Belgesel' },
    { id: 63, title: 'Paul Aster - Kış Günlüğü - C', category: 'Kitap' },
    { id: 64, title: 'Paul Aster - Leviathan - C', category: 'Kitap' },
    { id: 65, title: 'Dijital Varlık Devrimi - O', category: 'Kitap' },
    { id: 66, title: 'Büyü Cadılık ve Okultizm Tarihi - O', category: 'Kitap' },
    { id: 67, title: 'Nation of Language - Gouge Away - C', category: 'Şarkı' },
    { id: 68, title: 'Beirut - At Once - C', category: 'Şarkı' },
    { id: 69, title: 'Sufjan Stevens - Will Anybody Ever Love Me - C', category: 'Şarkı' },
    { id: 70, title: 'David O Dowda - Keep Your Hand - C', category: 'Şarkı' },
    { id: 71, title: 'The Cranberries - Zombie - O', category: 'Şarkı' },
    { id: 72, title: 'The Black Heart Procession - A Cry For Love - O', category: 'Şarkı' },
    { id: 73, title: 'King of Convenience - Boat Behind - O', category: 'Şarkı' },
    { id: 74, title: 'Elena Ladda - Pesa - O', category: 'Şarkı' },
      ];
    const movieAndBookList5 = [
    { id: 75, title: 'The Accountant - O', category: 'Film' },
    { id: 76, title: 'The Way Back - C', category: 'Film' },
    { id: 77, title: 'CashBack - O', category: 'Film' },
    { id: 78, title: 'Warrior - C', category: 'Film' },
    { id: 79, title: 'Yaratılan - O', category: 'Dizi' },
    { id: 80, title: 'Mission Imposible - Dead Reckoning - C', category: 'Film' },
    { id: 81, title: 'Ozark - C', category: 'Dizi' },
    { id: 82, title: 'All The Light We Cannot See - O', category: 'Film' },
    { id: 83, title: 'Sally Rooney - Güzel Dünya Neredesin - C', category: 'Kitap' },
    { id: 84, title: 'Mahir Ünsal Eriş - Acaip - C', category: 'Kitap' },
    { id: 85, title: 'Kerem Öksen - Ölümden Uzak Bir Yere - C', category: 'Kitap' },
    { id: 86, title: 'Tali Sharot - Başkalarının Aklı - C', category: 'Kitap' },
    { id: 87, title: 'John Feinstein - Zaferin Kıyısında - C', category: 'Kitap' },
    { id: 88, title: 'Tahiti boy and the Palmtree Family - The Park - O', category: 'Şarkı' },
    { id: 89, title: 'The Fresh and Onlies - Animal Of One - O', category: 'Şarkı' },
    { id: 90, title: 'Fun Adults Subsolite - Sap Solid - O', category: 'Şarkı' },
    { id: 91, title: 'The Growlers - Empty Bones - O', category: 'Şarkı' },
    { id: 92, title: 'Tora Y Moi - Still Sound - O', category: 'Şarkı' },
    { id: 93, title: 'Grizzly Bear - Ready,Able - O', category: 'Şarkı' },
    { id: 94, title: 'Lou Doillon - To Much - C', category: 'Şarkı' },
    { id: 95, title: 'Ephemerals - Everyday Killers - C', category: 'Şarkı' },
      ];
    const movieAndBookList6 = [
    { id: 96, title: 'The Killer - O', category: 'Film' },
    { id: 97, title: 'Drive - C', category: 'Film' },
    { id: 98, title: 'Les Samurai - C', category: 'Film' },
    { id: 99, title: 'Bourne - O', category: 'Film' },
    { id: 100, title: 'John Wick - O', category: 'Film' },
    { id: 101, title: 'Nikita - O', category: 'Film' },
    { id: 102, title: 'Collateral - O', category: 'Film' },
    { id: 103, title: 'Kill Bill - O', category: 'Film' },
    { id: 104, title: 'In Bruges- O', category: 'Film' },
    { id: 105, title: 'Blast of Silence - C', category: 'Film' },
    { id: 106, title: 'The American - C', category: 'Film' },
    { id: 107, title: 'The Jackal - C', category: 'Film' },
    { id: 108, title: 'Voleuses - O', category: 'Film' },
    { id: 109, title: 'Rocky IV - O', category: 'Film' },
    { id: 110, title: 'Blue Eye Samurai - C', category: 'Film' },
    { id: 111, title: 'Dua Lipa - Houdini - O', category: 'Şarkı' },
    { id: 112, title: 'Inji - Bellydancing - O', category: 'Şarkı' },
    { id: 113, title: 'Claptone feat Zola Blood - Birdsong - O', category: 'Şarkı' },
    { id: 114, title: 'Cosmic Crooner - Tema di Flippo - O', category: 'Şarkı' },
    { id: 115, title: 'Rosey - Love - O', category: 'Şarkı' },
    { id: 116, title: 'Shivaree - Goodnight Moon - O', category: 'Şarkı' },
    { id: 117, title: 'Morcheeba - Enjoy the Ride - O', category: 'Şarkı' },
    { id: 118, title: 'Phobe Killdeer and The Short Straws - The Fade Out Line - C', category: 'Şarkı' },
    { id: 119, title: 'Okay Kaya - Believe - C', category: 'Şarkı' },
    { id: 120, title: 'David Faster Wallace - Sicim Teorisi - C', category: 'Kitap' },
      ];
    const movieAndBookList7 = [
    { id: 121, title: 'Mariage Story - C', category: 'Film' },
    { id: 122, title: 'Heat - O', category: 'Film' },
    { id: 123, title: 'Rififi - C', category: 'Film' },
    { id: 124, title: 'Body of Lies - O', category: 'Film' },
    { id: 125, title:'Tinker Tailor Soldier Spy - C', category: 'Film' },
    { id: 126, title: 'Hot Fuzz - O', category: 'Film' },
    { id: 127, title: 'Baby Driver - C', category: 'Film' },
    { id: 128, title: 'The Last Samurai - C', category: 'Film' },
    { id: 129, title: 'The Father - C', category: 'Film' },
    { id: 130, title: 'Fallen Leaves - C', category: 'Film' },
    { id: 131, title: 'Jack Ryan - C', category: 'Dizi' },
    { id: 132, title: 'Güneş - Yeni Albüm - O', category: 'Şarkı' },
    { id: 133, title: 'Radio Tarifa - Sin Palabras - O', category: 'Şarkı' },
    { id: 134, title: 'Ringo Jets - Yadigar Ejder - O', category: 'Şarkı' },
    { id: 135, title: 'Serhat ft Viktor Lazio - Total Disguise - O', category: 'Şarkı' },
    { id: 136, title: 'Scott Walker - Its Raining Today  - C', category: 'Şarkı' },
    { id: 137, title: 'Belie and Sebastian - Sleep The Clock Around - C', category: 'Şarkı' },
    { id: 138, title: 'John Berger - Bir Zamanlar EUROPA^da - C', category: 'Kitap' },
    { id: 139, title: 'Scott Walker - C', category: 'Belgesel' },
      ];
    const movieAndBookList8 = [
    { id: 140, title: 'Paul George Alperen Şengün - O', category: 'Videocast' },
    { id: 141, title: 'Ölümlü Dünya 2 - O', category: 'Film' },
    { id: 142, title: 'Ford V Ferrari - O', category: 'Film' },
    { id: 143, title: 'Oppenheimer - C', category: 'Film' },
    { id: 144, title: 'Red Eye - O', category: 'Film' },
    { id: 145, title: 'Point Break - C', category: 'Film' },
    { id: 146, title: 'Big Wednesday - C', category: 'Film' },
    { id: 147, title: 'Watchmen - C', category: 'Film' },
    { id: 148, title: 'Gibi - O', category: 'Dizi' },
    { id: 149, title: 'Seinfeld - C', category: 'Dizi' },
    { id: 150, title:'Ayak İşleri - C - O', category: 'Dizi' },
    { id: 151, title: 'Watchmen - C', category: 'Dizi' },
    { id: 152, title: 'Procol Harum - A Whiter Shade Of Pale - O', category: 'Şarkı' },
    { id: 153, title: 'The Sun Prophet - Who Stole The Soul - O', category: 'Şarkı' },
    { id: 154, title: 'Foxygen - America - O', category: 'Şarkı' },
    { id: 155, title: 'R.E.M - Lotus - O', category: 'Şarkı' },
    { id: 156, title: 'Toro Y Moi - Still Sound  - O', category: 'Şarkı' },
    { id: 157, title: 'The Bravery - An Honest Mistake - C', category: 'Şarkı' },
    { id: 158, title: 'The Last Shadow Puppets - My Mistakes Were Made For You - C', category: 'Şarkı' },
    { id: 159, title: 'Yusuf Atılgan - Aylak Adam - O', category: 'Kitap' },
      ];
    const movieAndBookList9 = [
    { id: 160, title: 'Onur Erdem - Wrapped - 2023', category: 'Liste' },
    { id: 161, title: 'Foals - O', category: 'Artist' },
    { id: 162, title: 'Zaho Da Sagaz - O', category: 'Artist' },
    { id: 163, title: 'Evdeki Saat - O', category: 'Artist' },
    { id: 164, title: 'Bayou - O', category: 'Artist' },
    { id: 165, title: 'Güneş - O', category: 'Artist' },
    { id: 166, title: 'Tristesse - O', category: 'Şarkı' },
    { id: 167, title: 'Dodi and Diana - O', category: 'Şarkı' },
    { id: 168, title: 'Chaned to do Rhytm - O', category: 'Şarkı' },
    { id: 169, title: 'Hey Okay - O', category: 'Şarkı' },
    { id: 170, title:'Forever J - O', category: 'Şarkı' },
    { id: 171, title: 'Caner Eler - Wrapped - 2023', category: 'Liste' },
    { id: 172, title: 'Still Corners - C', category: 'Artist' },
    { id: 173, title: 'Nation of Language - C', category: 'Artist' },
    { id: 174, title: 'Radiohead - C', category: 'Artist' },
    { id: 175, title: 'Daft Punk - C', category: 'Artist' },
    { id: 176, title: 'Foals - C', category: 'Artist' },
    { id: 177, title: 'Something About Us - C', category: 'Şarkı' },
    { id: 178, title: 'Arkadaşım Eşşek - C', category: 'Şarkı' },
    { id: 179, title: 'Champ Magnetique - C', category: 'Şarkı' },
    { id: 180, title: 'Fortress - C', category: 'Şarkı' },
    { id: 181, title: 'Haftalık Öneriler', category: 'Şarkı' },
    { id: 182, title: 'Aşkın Nur Yengi - Yalancı Bahar - O', category: 'Şarkı' },
    { id: 183, title: 'Death Cab For Cutie - An Arrow in the Wall - O', category: 'Şarkı' },
    { id: 184, title: 'Zack Zack Zack - Luftballon (Shad Shadows Remix) - O', category: 'Şarkı' },
    { id: 185, title: 'Never Look Away - C', category: 'Film' },
    { id: 186, title: 'Das Leben der Anderen - C', category: 'Film' },
    { id: 187, title: 'Blue Bayou - C', category: 'Film' },
    { id: 188, title: 'Taxi Driver - C', category: 'Film' },
    { id: 189, title: 'Prens - O', category: 'Dizi' },
    { id: 190, title: 'RoadRunner - C', category: 'Belgesel' },
      ];
    const movieAndBookList10 = [
    { id: 191, title: 'BBC 2023 En İyi Dizi Listesi', category: 'Dizi' },
    { id: 192, title: 'The Last Of Us', category: 'Dizi' },
    { id: 193, title: 'Poker Face', category: 'Dizi' },
    { id: 194, title: 'Shrinking', category: 'Dizi' },
    { id: 195, title: 'Succession', category: 'Dizi' },
    { id: 196, title: 'Beef', category: 'Dizi' },
    { id: 197, title: 'Dead Ringer', category: 'Dizi' },
    { id: 198, title: 'The Diplomat', category: 'Dizi' },
    { id: 199, title: 'Happy Valley', category: 'Dizi' },
    { id: 200, title: 'SILO', category: 'Dizi' },
    { id: 201, title: 'The Bear', category: 'Dizi' },
    { id: 202, title:'Dark Winds', category: 'Dizi' },
    { id: 203, title: 'The Other Black Girl', category: 'Dizi' },
    { id: 204, title: 'The Curse', category: 'Dizi' },
    { id: 205, title: 'Slow Horse', category: 'Dizi' },
    { id: 206, title: 'Top Boy', category: 'Dizi' },
    { id: 207, title: 'Dreaming Whilst Block', category: 'Dizi' },
    { id: 208, title: 'Colin From Accounts', category: 'Dizi' },
    { id: 209, title: 'Fellow Travellers', category: 'Dizi' },
    { id: 210, title: 'Haftalık Öneriler', category: 'Film/Dizi/Şarkı/Kitap' },
    { id: 211, title: 'Leave the World Behind - O', category: 'Film' },
    { id: 212, title: 'Planet Of The Apes - C', category: 'Film' },
    { id: 213, title: 'Barry London', category: 'Film' },
    { id: 214, title: 'Primal Fear - C', category: 'Film' },
    { id: 215, title: 'The Hunt - C', category: 'Film' },
    { id: 216, title: 'The Oslo Trilogy - O', category: 'Film' },
    { id: 217, title: 'True Detective - C', category: 'Dizi' },
    { id: 218, title: 'Mirgün Cabas Can Kozanoğlu - İlk Sayfası - C', category: 'Kitap' },
    { id: 219, title: 'Byung Chul Han - Palyatif Toplum - C', category: 'Kitap' },
    { id: 220, title: 'Michael Jackson - Off The Wall - O', category: 'Şarkı' },
    { id: 221, title: 'French 79 - Between the Buttons - O', category: 'Şarkı' },
    { id: 222, title: 'Jamiroquai - Something About You - O', category: 'Şarkı' },
    { id: 223, title: 'Guru & Common - Any Given Sunday OST - O', category: 'Şarkı' },
    { id: 224, title: 'Graham Coxon - In My Room - C', category: 'Şarkı' },
    { id: 225, title: 'Manchester Orchestra - The Silence - C', category: 'Şarkı' },
    { id: 226, title: 'Findlay - Stoned And Alone - C', category: 'Şarkı' },
      ];
    const movieAndBookList11 = [
    { id: 227, title: 'Teras Noir - Ali Atay Serkan Keskin - O', category: 'Videocast' },
    { id: 228, title: 'Mission Imposible - Dead Reckoning Part One - O', category: 'Film' },
    { id: 229, title: 'The Last Schinitzel - O', category: 'Kısa - Film' },
    { id: 230, title: 'Legends Of The Fall - C', category: 'Film' },
    { id: 231, title: 'The Delinquents - C', category: 'Film' },
    { id: 232, title: 'Kuş Uçuşu - O', category: 'Dizi' },
    { id: 233, title: 'Rain Dogs - C', category: 'Dizi' },
    { id: 234, title: 'Maid - O', category: 'Dizi' },
    { id: 235, title: 'Scavengers Reign - C', category: 'Dizi' },
    { id: 236, title: 'Babylon Berlin - C', category: 'Dizi' },
    { id: 237, title: 'Alaca - Olmaz - O', category: 'Şarkı' },
    { id: 238, title: 'Alaca - Bye - O', category: 'Şarkı' },
    { id: 239, title: 'The Walkmen - Lisbon - C', category: 'Şarkı' },
    { id: 240, title: 'Wye Oak - Spiral - C', category: 'Şarkı' },
    { id: 241, title: 'Volker Kutscher - Gereon Rath^ın Sekizinci Vakası Olimpiyat - C', category: 'Kitap' },
      ];
    const movieAndBookList12 = [
    { id: 242, title: 'Barbie - O', category: 'Film' },
    { id: 243, title: 'Money Monster - O', category: 'Film' },
    { id: 244, title: 'Gone Baby Gone - O', category: 'Film' },
    { id: 245, title: 'Anatomy Of A Fall - C', category: 'Film' },
    { id: 246, title: 'Toni Erdman - C', category: 'Film' },
    { id: 247, title: 'The Zone Of Interest - C', category: 'Film' },
    { id: 248, title: 'Slow Horses - C', category: 'Dizi' },
    { id: 249, title: 'Past Lives - C', category: 'Film' },
    { id: 250, title: 'Mastro - C', category: 'Film' },
    { id: 251, title: 'Pink - Family Portrait - O', category: 'Şarkı' },
    { id: 252, title: 'Anouk - Nobody^s Wife - O', category: 'Şarkı' },
    { id: 253, title: 'Fastball - The Way - O', category: 'Şarkı' },
    { id: 254, title: 'Roy Vedas - Fragments of Life - O', category: 'Şarkı' },
    { id: 255, title: 'Roosevelt - Moving On - C', category: 'Şarkı' },
    { id: 256, title: 'Castiebeat - Reasearch - C', category: 'Şarkı' },
    { id: 257, title: 'Porcelain Raft - The Earth Before Us - C', category: 'Şarkı' },
    { id: 258, title: 'Ayfer Tunç - Bir Deliler Evinin Yalan Yanlış Anlatılan Kısa Tarihi - O', category: 'Kitap' },
    { id: 259, title: 'Ayfer Tunç - Osman - O', category: 'Kitap' },
    { id: 260, title: 'Önder Kaya - Avrupa Tarihi Üzerine Yazılar - C', category: 'Kitap' },
    { id: 261, title: 'Hakan Bıçakçı - Alakalı Filmler - C', category: 'Kitap' },
    ];                                                                        
    // İsterseniz buraya başka filmler ve kitaplar ekleyebilirsiniz
  
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(movieAndBookList)

    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)

      const filteredItems = movieAndBookList.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="container">
        <h2>2.sezon 4.bölüm</h2>
        <List data={movieAndBookList4} />
      </div>
      <div className="container">
        <h2>2.sezon 5.bölüm</h2>
        <List data={movieAndBookList5} />
      </div>
      <div className="container">
        <h2>2.sezon 6.bölüm</h2>
        <List data={movieAndBookList6} />
      </div>
      <div className="container">
        <h2>2.sezon 7.bölüm</h2>
        <List data={movieAndBookList7} />
      </div>
      <div className="container">
        <h2>2.sezon 8.bölüm</h2>
        <List data={movieAndBookList8} />
      </div>
      <div className="container">
        <h2>2.sezon 9.bölüm</h2>
        <List data={movieAndBookList9} />
      </div>
      <div className="container">
        <h2>2.sezon 10.bölüm</h2>
        <List data={movieAndBookList10} />
      </div>
      <div className="container">
        <h2>2.sezon 11.bölüm</h2>
        <List data={movieAndBookList11} />
      </div>
      <div className="container">
        <h2>2.sezon 12.bölüm</h2>
        <List data={movieAndBookList12} />
      </div>
      </div>
    </>
  );
}

export default App;
