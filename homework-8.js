// task-1, объект с информацией о человеке

const person = {
  firstName: "Askar",
  surname: "Gareev",
  country: "Russia",
  city: "Ufa",
  age: 15,
  relationships: false,
  email: "ascar.gareev11@gmail.com",
};

// task-2, объект с информацией о машине

let car = {
  mark: "Haval",
  model: "M6",
  releaseYear: 2017,
  color: "white",
  transmission: "6МТ",
};

car.owner = person;

// task-3, добавление максимальной скорости к объекту машины

function addMaxSpeed(object) {
  if (object.maxspeed) {
    return true;
  } else {
    object.maxspeed = 170;
  }
}

// task-4, вывод значения объекта в консоль

function loggingObjectVariable(object, variable) {
  console.log(object.variable);
}

// task-5, массив с продуктами

const productsName = ["Apple", "Banana", "Beef", "Bread", "Cheese"];

// task-6, массив с книгами

let books = [
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    releaseYear: 1813,
    coverColor: "Cream",
    genre: "Fiction",
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    releaseYear: 1960,
    coverColor: "Brown",
    genre: "Novel",
  },
  {
    name: "1984",
    author: "George Orwell",
    releaseYear: 1949,
    coverColor: "Black",
    genre: "Science Fiction",
  },
];

// task-7, массив с книгами из вселенных, слияние двух массивов

let FantasyBooks = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
    releaseYear: 1997,
    coverColor: "Red",
    genre: "Fantasy",
  },
  {
    name: "Men of Iron",
    author: "Howard Pyle",
    releaseYear: 2017,
    coverColor: "grey",
    genre: "Fantasy",
  },
];

let AllBooks = [...books, ...FantasyBooks];

// task-8, добавление переменной во все объекты внутри массива

function AddingRarity(year) {
  console.log(year);
  if (year >= 2000) {
    return false;
  } else {
    return true;
  }
}

AllBooks.map((object) => (object.isRare = AddingRarity(object.releaseYear)));
