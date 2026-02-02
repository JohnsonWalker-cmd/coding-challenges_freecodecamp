/**problem : Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays. **/

// solution
function flatten(arr) {
   let result = [] ;
  for(let i =0 ; i < arr.length ; i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i])) ;
    }else {
      result.push(arr[i]);
    }
  }
  return result;
}


//console.log(flatten(["A", [[[["B"]]]], "C"]))
console.log(flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]));