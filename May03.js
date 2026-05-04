function getGreeting(time) {

  const [hours , minutes] = time.split(":").map(Number);

  if(hours >= 5 && hours < 12) return "Good morning"

  if(hours >= 12 && hours < 18) return "Good afternoon"

  if(hours >= 18 && hours < 22) return "Good evening"


  return "Good night";
}