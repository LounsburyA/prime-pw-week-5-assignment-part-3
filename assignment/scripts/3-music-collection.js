console.log('***** Music Collection *****')
//let album = {title, artist, yearPublished}
// push album to Collection
// return album
//collection.push(title, artist, yearPublished);

//---------------ADD TO COLLECTION FUCNTION-----------------
let collection = []

function addToCollection(title, artist, yearPublished){
let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
}

  collection.push(album);
  return console.log(album);
}
addToCollection('Blue Album', 'Weezer', 1994)
addToCollection('Pinkerton', 'Weezer', 1996)
addToCollection('Nevermind', 'Nirvana', 1991)
addToCollection('Fashion Nugget', 'Cake', 1996)
addToCollection('The Carnival', 'Wyclef', 1997)
addToCollection('Jagged Little Pill', 'Alanis Morissette', 1995)
// exampleconsole.log(addToCollection(`Title by Artist, published in year`));
// !test! console.log(addToCollection('bugs', 'cat', 1995));
// 90's MUSIC TIME!!!!!

// wrong format
// console.log(addToCollection('Fashion Nugget','Cake', 1996 ));
// console.log(addToCollection('Jagged Little Pill','Alanis Morissette', 1995));

//console.log(collection);
//function to add to array
// let basket = [];
// function addItem(item,cat, taco){
//   basket.push(item, cat, taco);
//   return true;
// }
// console.log(addItem('one', 'two', 'three'));
// console.log(basket);

//  ------SHOW COLLECTION FUNCTION------------


// function showCollection(array){
//   //console.log(collection.length);
//   for( let i = 0; i < collection.length; i++){
//     return console.log(collection[2]);
//   }
// }
// showCollection(collection)

// console.log(showCollection(collection));
// !TEST!let house = ['dogs','cats','mittens']
 function showCollection(array){
   console.log(array.length);
   for( let i = 0; i <array.length; i++){
  console.log(`Title ${array[i].title}, by ${array[i].artist}, published in ${array[i].yearPublished}`);
  }
 }
 showCollection(collection)
// function showCollection(array){
//   console.log(array.length);
//   for( let i = 0; i <array.length; i++){
//     console.log(array[i]);
//   }return array;
// }
//console.log(showCollection(collection));

//!TEST!console.log(showCollection(house));


//------------FIND BY ARTIST FUNCTION-------------
//  parts breakdown:
//   'artist' paramater
//    empty array   find[]
//     loop collection  add matching artists to array
// function findByArtist(artist){
// let find = [];
//   for( let i = 0; i <collection.length; i++){
//     if (collection[i].artist === artist) {
//       find.push(artist[i]);
//     }
//   }
//   return find;
// }
// console.log(findByArtist('Weezer'));
//
function findByArtist(artist){
let find = [];
  for( let i = 0; i <collection.length; i++){
    if (collection[i].artist === artist) {
      find.push(collection[i]);
    }
  }
  return find;
}
console.log(findByArtist('Weezer'));
console.log(findByArtist('Taking back Sunday'));
console.log(findByArtist('Cake'));
