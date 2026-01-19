function compareEnergy(caloriesBurned, wattHoursUsed) {

  let caloriestoJoules = caloriesBurned *   4184;

  let wattHourToJoules = wattHoursUsed *    3600;

  

  if(caloriestoJoules > wattHourToJoules){
    return "Workout";
  }else if(caloriestoJoules < wattHourToJoules){
    return "Devices";
  }else if(caloriestoJoules == wattHourToJoules){
    return "Equal"
  }
  
}

