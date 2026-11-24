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

const shortComments = comments.map(
  (comment) => (({ postId, email, body, ...rest } = comment), { return: rest }),
);

console.log(shortComments);
