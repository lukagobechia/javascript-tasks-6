const nums = [1, 2];

// equal probobility of getting one or two
function getOneOrTwo(nums) {
  const randomIndex = Math.floor(Math.random() * 2);
  console.log(nums[randomIndex]);
  return nums[randomIndex];
}

const promise = new Promise((res, rej) => {
  if (getOneOrTwo(nums) === 1) res("Resolved");
  else rej("Rejected");
})
  .then(res => console.log(res))
  .catch(e => console.log(e));

