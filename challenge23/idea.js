function isValidHex(str){
    if(!str.startsWith("#")) return false;
    let rest = str.substring(1);
    if(rest.includes("") || rest.includes("_")) return false;

    if((rest.length !== 3 && rest.length !== 6) || !isHex(rest)) return false;

    return true;
}

console.log(isValidHex("#12 3"));