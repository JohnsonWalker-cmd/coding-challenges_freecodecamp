/**
 * Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.
 */
function largestDifference(skater1, skater2) {
  
    let targetLap = 1;
    let maxDiff = -1;

    let totalLaps = Math.min(skater1.length, skater2.length); // 4

    for(let i = 0 ; i < totalLaps; i++){
        let currentDiff = Math.abs(skater1[i] - skater2[i])

        if(currentDiff > maxDiff){
            maxDiff = currentDiff;
            targetLap = i + 1;
        }
    }

  return targetLap;
}
console.log(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]));