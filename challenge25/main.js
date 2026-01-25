

function scaleImage(size , scale){
    const parts = size.split("x")
    let width = parts[0];
    let height = parts[1];
    

    const scaledWidth = parseInt(width) * scale ;
    const scaledHieght = parseInt(height) * (scale) ;
    
    return `${scaledWidth}x${scaledHieght}`; 
}

let newImage = scaleImage("100x200" , 4);
console.log(newImage);