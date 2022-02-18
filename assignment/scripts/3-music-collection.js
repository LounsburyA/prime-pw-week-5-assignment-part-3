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
// }
// // for (let prop in person){   //person object stand in
// console.log(`${prop}: ${person[prop]}`);
// }
 
