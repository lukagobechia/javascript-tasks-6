const url = "https://jsonplaceholder.typicode.com";
function sleep(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
async function fetchData(url) {
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return;
    } catch (e) {
      console.log("error retrieving data");
      await sleep(2000);
      if (i == 4){
          console.log("\nwe tried retrieving data 5 times. Could not retrieved Users data\n");
          console.log('Error message:\n', e.message)
      }
    }
  }
}

fetchData(url);
