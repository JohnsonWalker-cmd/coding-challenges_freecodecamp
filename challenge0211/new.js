/**
 *  Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

    The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

    Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.
 */
function computeScore(judgeScores, ...penalties) {

    const extremeValues = judgeScores.map(score => {
        let highest = score[i];
        let lowest = score.length -1
    })


  return judgeScore;
}