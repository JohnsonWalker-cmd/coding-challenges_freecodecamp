function sleepDebt(hoursSlept, targetHours) {

    // we assume today's sleep hours is = targetHours

    let totalSleepforweek = targetHours * 7;

    let totalSleepForSixNight = 0;

    for(let i=0; i<hoursSlept.length; i++){
        totalSleepForSixNight+=hoursSlept[i]
    }

    let left = totalSleepforweek-totalSleepForSixNight;
    
    if(left < 0){
        return 0;
    }else {
        return left;
    }
}

