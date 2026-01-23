let myArray = [ 97, 98, 99, 100]

let total = 0;

const sum = myArray.map((num) => total+=num)
let average = total / myArray.length

console.log(average)