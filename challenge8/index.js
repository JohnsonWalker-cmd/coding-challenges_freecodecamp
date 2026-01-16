function isSorted(arr){
    n = arr.length
    if(n<= 1){
        return "Ascending and descending"
    }

    let isAscending = true ;
    let isdescending = true ;

    for(let i = 0 ; i < n-1  ; i++){
        if(arr[i] > arr[i + 1]){
            isAscending = false ;
        } else if ( arr[i] <  arr[i + 1]){
            isdescending = false ;
        } else {
            return 0;
        }
    }

    if(isAscending){
        return "Ascending"
    }else if(isdescending){
        return "Descending"
    }else {
        return "nothered"
    }
}