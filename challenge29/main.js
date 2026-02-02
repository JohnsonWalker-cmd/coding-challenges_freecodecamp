

function separateLettersAndNumbers(str) {
    // first we have to loop through our str
    let result = ''; // we storing our results

    for (let i = 0 ; i < str.length - 1 ; i++){
        result+=str[i];

        if(isNaN(str[i]) && !isNaN(str[i + 1]) || !isNaN(str[i + 1]) && isNaN(str[i]) ){
            result+="-";
        }


    }

  return result+=str[str.length - 1];
}

console.log(separateLettersAndNumbers("Route66"))