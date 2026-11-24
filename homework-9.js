import { comments } from "./comments.js";

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = numArray.filter((num) => num >= 5);

let filmArray = ["Breaking Bad", "Fight Club", "Harry Potter", "Spider Man"];

console.log(filmArray.includes("Fight Club"));

function reversingArray(array) {
  array = array.reverse();
}

reversingArray(filteredArray);

const comEmailComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);

console.log(comEmailComments);

const postIdComments = comments.map((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
    console.log(2);
  } else {
    comment.postId = 1;
    console.log(1);
  }

  {
    return comment;
  }
});

console.log(postIdComments);

const shortComments = comments.map((comment) => {
  const { postId, email, body, ...rest } = comment;
  return rest;
});

const invalidComments = comments.map((comment) => {
  if (comment.body.length > 180) {
    comment.isInvalid = true;
  } else {
    comment.isInvalid = false;
  }
  {
    return comment;
  }
});

const emailComments_1 = comments.reduce(function (array, comment) {
  return [...array, comment.email];
}, []);

const emailComments_2 = comments.map((comment) => comment.email);

const stringComments_1 = emailComments_1.toString();

const stringComments_2 = emailComments_2.join(", ");

console.log(stringComments_2);
