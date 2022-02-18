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
  return album;
}
// exampleconsole.log(addToCollection(`Title by Artist, published in year`));
// !test! console.log(addToCollection('bugs', 'cat', 1995));
// 90's MUSIC TIME!!!!!
console.log(addToCollection('Weezer','Blue Albun', 1994 ));
console.log(addToCollection('Weezer','Pinkerton', 1996));
console.log(addToCollection('Wyclef','The Carnival',1997 ));
console.log(addToCollection('Nirvana','Nevermind', 1991 ));
console.log(addToCollection('Cake','Fashion Nugget', 1996 ));
console.log(addToCollection('Alanis Morissette','Jagged Little Pill', 1995));
console.log(collection);
//function to add to array
// let basket = [];
// function addItem(item,cat, taco){
//   basket.push(item, cat, taco);
//   return true;
// }
// console.log(addItem('one', 'two', 'three'));
// console.log(basket);

//  ------SHOW COLLECTION FUNCTION------------

// for (let key in object ){
//   console.log(object[key]);      // for in loop reference
// }    ----- scratch this, not using for in loops yet---
// // for (let prop in person){   //person object stand in
// console.log(`${prop}: ${person[prop]}`);
// }
 //console.log(collection.length);
// function showCollection(array){
//   console.log(collection.length);
//   for( let i = 0; i < collection.length; i++){
//     console.log(collection[i]);
//   }
// }
// console.log(showCollection(collection));
// !TEST!let house = ['dogs','cats','mittens']
function showCollection(array){
  console.log(array.length);
  for( let i = 0; i <array.length; i++){
    console.log(array[i]);
  }return array;
}
console.log(showCollection(collection));
//!TEST!console.log(showCollection(house));


//------------FIND BY ARTIST FUNCTION-------------
//  parts breakdown:
//   'artist' paramater
//    empty array   find[]
//     loop collection  add matching artists to array
