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
console.log(addToCollection(`Title: ${'Blue Album'}`,`by ${'Weezer'}`,`published in ${1994}` ));
console.log(addToCollection(`Title: ${'Pinkerton'}`, `by  ${'Weezer'}`, `published in ${1996}`));
console.log(addToCollection(`Title: ${'The Carnival'}`,`by ${'Wyclef'}`,`published in ${1997}` ));
console.log(addToCollection(`Title: ${'Nevermind'}`,`by ${'Nirvana'}`,`published in ${1991}` ));
console.log(addToCollection(`Title: ${'Fashion Nugget'}`,`by ${'Cake'}`,`published in ${1996}` ));
console.log(addToCollection(`Title: ${'Jagged Little Pill'}`,`by ${'Alanis Morissette'}`,`published in ${1995}` ));

// wrong format
// console.log(addToCollection('Fashion Nugget','Cake', 1996 ));
// console.log(addToCollection('Jagged Little Pill','Alanis Morissette', 1995));

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
// function findByArtist('artist'){
// let find= []
//   for( let i = 0; i <array.length; i++){
//     if thing = artist push to array
//   }
// }
