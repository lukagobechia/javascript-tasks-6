const url1 = "https://dummyjson.com/users";
const url2 = "https://jsonplaceholder.typicode.com/users";
const p1 = new Promise((res, rej) => {
  fetch(url1)
    .then((resp) => resp.json())
    .then((data) => res(data))
    .catch((e) => rej(e));
});
const p2 = new Promise((res, rej) => {
  fetch(url2)
    .then((resp) => resp.json())
    .then((data) => res(data))
    .catch((e) => rej(e));
});

Promise.any([p1, p2])
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message));
