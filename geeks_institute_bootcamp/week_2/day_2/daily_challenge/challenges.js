// // ====== Daily Challenge 1 : Go Wildcats
// const gameInfo = [
//  {
//    username: "john",
//    team: "red",
//    score: 5,
//    items: ["ball", "book", "pen"]
//  },
//  {
//    username: "becky",
//    team: "blue",
//    score: 10,
//    items: ["tape", "backpack", "pen"]
//  },
//  {
//    username: "susy",
//    team: "red",
//    score: 55,
//    items: ["ball", "eraser", "pen"]
//  },
//  {
//    username: "tyson",
//    team: "green",
//    score: 1,
//    items: ["book", "pen"]
//  },
// ];


// const usernames = [];
// gameInfo.forEach(player => {
//   usernames.push(player.username + "!");
// });

// console.log(usernames);

// const winners = [];
// gameInfo.forEach(player => {
//   if (player.score > 5) {
//     winners.push(player.username);
//   }
// });

// console.log(winners);

// let totalScore = 0;
// gameInfo.forEach(player => {
//   totalScore += player.score;
// });

// console.log(totalScore);

// // ====== Daily Challenge 2 : Car Inventory
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// Part I: Find the first Honda car
function getCarHonda(carInventory) {
  const hondaCar = carInventory.find(car => car.car_make === "Honda");
  
  if (hondaCar) {
    return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}`;
  }
  
  return "No Honda found";
}

// Part II: Sort car inventory by year (ascending)
function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((a, b) => a.car_year - b.car_year);
}

// Testing Part I
console.log("Part I - Get First Honda:");
console.log(getCarHonda(inventory));
// Output: "This is a Honda Accord from 1983"

// Testing Part II
console.log("\nPart II - Sort by Year:");
console.log(sortCarInventoryByYear(inventory));