function toConsonantCase(str) {
  return str
  .split("")
  .map(char => {
    if( char ===  "-"){
      return "_";
    }
    if( "aeiouAEIOU" .includes(char)){
      return char.toLowerCase();
    }
    if( char.toLowerCase !== char.toUpperCase){
      return char.toUpperCase();
    }

    return char ;
  })
  .join("")
}