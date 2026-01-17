function resolutionStreak(days) {
  let streak = 0 ;

  for(let i=0 ; i< days.length ; i++){
    let steps = days[i][0];
    let screenTime = days[i][1];
    let pages = days[i][2];

    if(steps >= 10000 && screenTime <= 120 && pages >= 5){
      streak++;
    }else {
      return `Resolution failed on day ${i + 1}: ${streak} day streak.`;
    }
  }

  return `Resolution on track: ${streak} day streak.`;
}