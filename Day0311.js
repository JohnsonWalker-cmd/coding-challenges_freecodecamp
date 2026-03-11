/**
 * Given a string of words, return a new string where each word is replaced by its length.

    Words in the given string will be separated by a single space
    Keep the spaces in the returned string.
    For example, given "hello world", return "5 5".
 */

function convertWords(str) {
    let words = str.split(" ");
    let wordsArr = [];
    for(let i=0 ; i<words.length; i++){
        let wordlength = words[i].length;
        wordsArr.push(wordlength)
    }

  return wordsArr.join(" ");
}


//convertWords("Thanks and happy coding") 

/*let mystr = "hello world"
let words = mystr.split(" ");
let all = [];
for(let i=0 ; i<words.length ; i++){
    let length = words[i].length;
    all.push(length);

}
console.log(all.join(" "))*/