//let myevent = new Date(1769472000000);
let myevent = new Date(1);
const myEventString = myevent.toISOString();
console.log(myEventString);
const parts = myEventString.split("T")[0];
const thatDay = parts.split("-")[2]
console.log(thatDay);


/**function oddOrEvenDay(timestamp) {

  return timestamp;
}**/