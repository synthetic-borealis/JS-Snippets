///////////////////////////////////////
// Bozo Sort
//
// Time Complexity: O(Infinity)
///////////////////////////////////////

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let index = Math.ceil(Math.random() * (arr.length - 1));
    while (index == i) {
      index = Math.ceil(Math.random() * (arr.length - 1));
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

function bogoSort(arr) {
  const maxIterations = 3000000;
  let iterations = 0;

  while (!isSorted(arr) && iterations < maxIterations) {
    arr = shuffle(arr);
    iterations += 1;
  }
  return arr;
}

let arr1 = [2, -4, 1, 12, 8];
console.log(arr1);
arr1 = bogoSort(arr1);
console.log(arr1);