const url = "https://jsonplaceholder.typicode.com/users";
function fetchData(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        res(data);
      })
      .then((resp) => {
        res(data);
      })
      .catch((e) => rej(e));
  });
}
fetchData(url)
  .then((data) => console.log(data))
  .catch((e) => console.log("error: ", e));
