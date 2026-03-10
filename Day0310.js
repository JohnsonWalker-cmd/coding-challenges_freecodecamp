/**
 * Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.


 */

function insertIntoArray(arr, value, index) {
  let newArr = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i === index) {
      newArr.push(value);
    }
    if(i <= arr.length-1){
        newArr.push(arr[i]);
    }
    
  }

  

  return newArr;
}

console.log(insertIntoArray([1, 2, 3, 4], 99, 0));  // front
console.log(insertIntoArray([1, 2, 3, 4], 99, 2));  // middle
console.log(insertIntoArray([1, 2, 3, 4], 99, 4));  // end