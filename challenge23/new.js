
function isValidHex(str) {
  // a valid css hex color code
  // eg #12aeb , #fff, etc

  // let's check if it begins with #

  if(str[0] !== "#") return false;

  // let's the hex part of the code
  let hexPart = str.slice(1);

  if(hexPart.length !== 3 && hexPart.length !== 6) return false;

  // the hex part are characters so let's loop through them

  for(let i = 0; i<hexPart.length ; i++){
    const char = hexPart[i];
    // individual character is assigned char

    // if it is a digit
    //0-9
    const isDigit = char >= "0" && char<= "9";

    // a-f
    const isLower = char >= "a" && char<= "f";

      // A-F
     const isUpper = char >= "A" && char<= "F";

    // condition is the string isn't any of the characters above

    if (!isDigit && !isLower && !isUpper) return false;
  }
  return true;
}

