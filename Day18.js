function calculateStartDelays(jumpScores) {

    let highScore = Math.max(...jumpScores)

    let delayTimes = [];

    for(let i=0 ; i<jumpScores.length; i++){

        if(jumpScores[i] === highScore){
            delayTimes.push(0);
        }else{

            // Math.round - to the nearest integer
            let lowerTimes = Math.round((highScore - jumpScores[i]) * 1.5);
            delayTimes.push(lowerTimes)
        }

    }

  return delayTimes;
}

console.log(calculateStartDelays([120, 110, 125]))