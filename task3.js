const url = "https://jsonplaceholder.typicode.com";
function sleep(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
let retryCount = 0;
const maxRetrycount = 5;
async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return;
  } catch (e) {
    await sleep(2000);
    if (retryCount < maxRetrycount) {
      retryCount++;
      console.log("error retrieving data", retryCount);
      fetchData(url);
    } else {
      console.log(
        "\nwe tried retrieving data 5 times. Could not retrieved Users data\n"
      );
      console.log("Error message:\n", e.message);
    }
  }
}

fetchData(url);
