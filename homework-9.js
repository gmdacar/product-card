const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = numArray.filter((num) => num >= 5);

let filmArray = ["Breaking Bad", "Fight Club", "Harry Potter", "Spider Man"];

console.log(filmArray.includes("Fight Club"));

function reversingArray(array) {
  array = array.reverse();
}

reversingArray(filteredArray);

console.log(filteredArray);
console.log(filmArray);
