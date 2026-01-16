function isIntegerHypotenus(a,b){
    let hypotenus ;
    hypotenus = Math.sqrt(a**2 + b**2);

    if(hypotenus % 1 == 0){
        return true ;
    }else {
        return false;
    }
    
}

console.log(isIntegerHypotenus(3,4))