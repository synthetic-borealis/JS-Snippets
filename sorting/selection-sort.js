///////////////////////////////////////
// Selection Sort
//
// Time Complexity: O(n^2)
///////////////////////////////////////

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

let testArr = [2, -4, 1, 12, 8];
console.log(testArr);
testArr = selectionSort(testArr);
console.log(testArr);
