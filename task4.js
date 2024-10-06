const url1 = "https://dummyjson.com/users";
const url2 = "https://jsonplaceholder.typicode.com/users";

function fetchData(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => res(data))
      .catch((e) => rej(e));
  });
}

const p1 = fetchData(url1);
const p2 = fetchData(url2);

Promise.any([p1, p2])
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message));
