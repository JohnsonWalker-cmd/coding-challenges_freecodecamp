function isNarcissistic(n){
    const digits = n.toString().split("");
    const power = digits.length;

    let total = 0 ;
    for(let i = 0; i<digits.length ; i++){
        total+=Number(digits[i]) ** power;
    }

    return total === true;   
}