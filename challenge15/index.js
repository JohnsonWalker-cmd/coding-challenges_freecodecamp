//Two-Pointer Technique – In-place Array Reversal

function arrayswap(arr){
    // set up two pointers 
    let left = 0 ;
    let right = (arr.length ) - 1 ;

    while (left < right){
        [arr[left] , arr[right] ] = [arr[right] , arr[left]]


        left = left + 1 ; // increase left by one
        right = right - 1 ; // decrease right by one


        
    }

    return arr;
    
}


const array = ["A", "B"]
const reversedArray = arrayswap(array)
console.log(reversedArray)

