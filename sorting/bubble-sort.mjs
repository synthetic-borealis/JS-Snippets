///////////////////////////////////////
// Bubble Sort
//
// Time Complexity: O(n^2)
///////////////////////////////////////

function bubbleSort(arr) {
  let swaps;

  do {
    swaps = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps += 1;
      }
    }
  } while (swaps > 0)

  return arr;
}

let testArr = [1, 5, 2, -8, 3];
console.log(testArr);
testArr = bubbleSort(testArr);
console.log(testArr);
