function isValidTrick(trickName) {

  let firstWords = [
    "Misty" ,
    "Ghost" ,
    "Thunder" ,
    "Solar" ,
    "Sky" ,
    "Phantom" ,
    "Frozen",
    "Polar"
  ]

  let secondWords = [
    "Twister",
    "Icequake" ,
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow"
  ]

  let words = trickName.split(" ");
  let firstword = words[0];
  let secondword = words[1];
  
  if(firstWords.includes(firstword) && secondWords.includes(secondword)) {
    return true;
    
  }

  return false;
}

console.log(isValidTrick("Polar Vortex"))