console.log('***** Music Collection *****')
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

console.log(addToCollection('bugs', 'cat', 1995));
  //let album = {title, artist, yearPublished}
  // push album to Collection
  // return album
  //collection.push(title, artist, yearPublished);
  //return true;

console.log(collection);
// let basket = [];
// function addItem(item,cat, taco){
//   basket.push(item, cat, taco);
//   return true;
// }
// console.log(addItem('one', 'two', 'three'));
// console.log(basket);
