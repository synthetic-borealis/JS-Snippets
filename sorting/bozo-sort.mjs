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

function bozoSort(arr) {
  const maxIterations = 3000000;
  let iterations = 0;

  while (!isSorted(arr) && iterations <= maxIterations) {
    const index1 = Math.ceil(Math.random() * (arr.length - 1));
    let index2 = Math.ceil(Math.random() * (arr.length - 1));
    while (index1 == index2) {
      index2 = Math.ceil(Math.random() * (arr.length - 1));
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    iterations += 1;
  }
  return arr;
}

let arr1 = [2, -4, 1, 12, 8];
console.log(arr1);
arr1 = bozoSort(arr1);
console.log(arr1);