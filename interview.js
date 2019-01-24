'use strict';

//input: [0, 1, 1, 0, 1, 0, 1, 1]
//output: [0,0,0,1,1,1,1,1]

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sortArray = arr => {
  let left = 0;
  let right = arr.length -1;

  //if your number is 0, then let 0 stay there
  while(right>left){
    while(arr[left] === 0){
      left++;
    }
    while(arr[right] === 1){
      right--;
    }
    if(arr[left] > arr[right]) {
      swap(arr, left, right); 
    }
    right--;
    left++;
  }

  // while(right > left) {
  //   if(arr[left] < arr[right]) {
  //     left++;
  //     right--;
  //   }
  //   else {
  //     swap(arr, left, right); //ask interviewer if you are given a swap fn
  //     //left++;
  //   }
  // }
  return arr;
};

console.log(sortArray([0, 1, 1, 0, 1, 0, 1, 1]));