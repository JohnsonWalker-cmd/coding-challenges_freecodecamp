const original = {
  name: "Saka",
  stats: {
    level: 400,
    gpa: 3.8
  }
};

// If I do this:
//const copy = JSON.parse(JSON.stringify(original))
const copy = structuredClone(original);
//const copy = { ...original}
copy.stats.level = 500; 

console.log(original); // This will be 500! Oh no!
console.log(copy);