'use strict';

/* ========= BUBBLE SORT ========= */
//swap is a helper fn that takes in array values swaps the places of two array values given their indexes
const swap = (array, i, j) => {
  const temp = array[i]; // take the first value store it 
  array[i] = array[j]; //reassign first value to equal the second value
  array[j] = temp; // reassign the second value to the temp
};

const bubbleSort = array => {
  let swaps = 0;
  //the largest value will be at the end of the array, hence the -1
  //go through the array, sorting each value by swapping 
  for (let i=0; i<array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1); 
      swaps++;
    }
  }

  //if the count is more than one, meaning you've sorted it then recursively call the array until base case
  if (swaps > 0) {
    return bubbleSort(array); 
  }
  //if the swap counter is 0, that means it's the best case, a sorted array 
  return array;
};

//Best: O(n)
//Average: O(n^2)
//Worst: O(n^2)

/* ========= MERGE SORT ========= */
//uses divide and conquer approach

const mergeSort = (array) => {
  //if there's only one item in the array, return it
  if (array.length <= 1) {
    return array;
  }

  //find the middle, left, right of the current array
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  //recursively sort each left or right side, until you only have length of 1 in the array (one item)
  left = mergeSort(left);
  right = mergeSort(right);
  //then merge 'em all 
  return merge(left, right, array);
};

const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  //change the result array values as you go through the left side
  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

//Best: O(nlog(n))
//Average: O(nlog(n))
//Worst: O(nlog(n))

/* ========= QUICK SORT ========= */

//Use quicksort rather than mergesort when you need in-place operations (i.e. w/out additional memory allocations, you don't need a buffer to hold your data)

const quickSort = (array, start=0, end=array.length) => {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
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

//Best: O(nlog(n))
//Average: O(nlog(n))
//Worst: O(n^2)