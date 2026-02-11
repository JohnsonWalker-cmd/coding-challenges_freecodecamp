function mirror(str) {
    let newstring = str.split("");
    let reversedstring = newstring.reverse();
    let joinArray = reversedstring.join("")


    return str + joinArray;
}
console.log(mirror("freeCodeCamp"));