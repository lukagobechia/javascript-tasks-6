function promise(arr, ms, status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      status === "resolve" ? res(arr) : rej("rejected");
    }, ms);
  });
}

const p1 = promise([1, 2, 3], 1000, "resolve");
const p2 = promise([4, 5, 6], 2000, "resolve");
const p3 = promise([7, 8, 9], 3000, "rejecte");

Promise.allSettled([p1, p2, p3]).then((res) => {
  const mergeContainer = res
    .filter((i) => i.status === "fulfilled")
    .map((i) => i.value)
    .flat();
  console.log(mergeContainer);
});
