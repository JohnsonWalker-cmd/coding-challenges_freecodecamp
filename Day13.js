function getFastestSpeed(times) {

  const segementDistance = [320,280,350,300,250];

  let maxSpeed = 0;
  let fastestSegment = 0;

  for(let i=0 ; i<times.length; i++){
    let currentSpeed = segementDistance[i] / times[i];


    if(currentSpeed > maxSpeed){
      maxSpeed = currentSpeed;
      fastestSegment = i + 1;
    }
  }

  return `The luger's fastest speed was ${maxSpeed.toFixed(2)} m/s on segment ${fastestSegment}.`;
}

// the fastest speed
// the segment that has the fastest speed

