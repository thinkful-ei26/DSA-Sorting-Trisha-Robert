'use strict';

const string =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const data = string.split(' ').map( num => Number(num));

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/* ========= qSort ========= */
// partition, pivot
// array, start, end, middle

const qSort = (array, start=0, end=array.length)=> {
  if (start >= end) {
    return array;
  }

  let middle = partition(array, start, end);

  //arr unorg
  //assign 'middle' that will be our pivot
  //for loop i < pivot

  array = qSort(array, start, middle); //left side
  array = qSort(array, middle + 1, end); // right side
  return array;
};

//Lumoto's algorithm
const partition = (array, start, end) => {
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

const tempArray = [1, 2, 7, 0];
// console.log(qSort(tempArray));
console.log(qSort(data));

/* ========= mergeSort ========= */
// merge & mergeSort fn
// left, right, middle
// swap

//split the array until you have just arr.length = 1;
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);  
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);   
  return merge(left, right, array);       
};

//merge returns an array, that has both left & right
const merge = (left, right, array)=> {
  let li = 0;
  let ri = 0;
  let oi = 0;
  
  //if left is greater than right
  if(left[li] > right[ri]) { // 9 > 4
    console.log('left:', left[li], 'right: ', right[ri]);
    array[oi] = right[ri]; // arr = [9] => [4]
    array[oi + 1] = left[li];
    // console.log('left > right',arr[oi]);
    //swap(array, left[li], right[ri]);
    oi++;
    ri++;
  }
  //if left is less than right
  if(left[li] < right[ri]) { // 9 > 4
    console.log('left:', left[li], 'right: ', right[ri]);
    array[oi] = left[li]; // arr = [9] => [4]
    array[oi + 1] = right[ri];
    console.log('left < right',arr[oi]);
    //swap(array, left[li], right[ri]);
    oi++;
    li++;
  }

  //two for loops

  return array;  
  
  
};

const arr = [3, 6, 9, 4];

console.log(mergeSort(arr));

/* ========= bucketSort ========= */




/* ========= sort in place ========= */





/* ========= sorting books ========= */




