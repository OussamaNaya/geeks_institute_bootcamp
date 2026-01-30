// ===== Exercise 1
// console.log("Hiii !");

// // Part I - Review about arrays
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log("people list : ", people);

// people.shift()
// console.log("people list after shift function : ", people);

// people[people.length-1] = "Jason";
// console.log("people list after replacing Jason : ", people);

// people.push("Oussama");
// console.log("people list after push method : ", people);

// let maryIndex = people.indexOf("Mary");
// console.log("Mary index is : ", maryIndex);

// let peopleCopy = people.slice(1, people.length-1);
// console.log("peopleCopy list : ", peopleCopy);

// let FooIndex = people.indexOf("Foo");
// console.log("Foo index is : ", FooIndex);

// let last = peopleCopy[peopleCopy.length-1];
// console.log("last element : ", last);

// // Part II - Loops
// for (let p of people) {
//     console.log(p);

//     if(p === "Devon")
//         break;
// }

// ===== Exercise 2
// let colors = ["blue", "red", "green", "yellow", "black"];

// let suffixes = ["st", "nd", "rd", "th", "th"];

// for (let i = 0; i < colors.length; i++) {
//   console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
// }


// ===== Exercise 3
// let number;

// do {
//   number = prompt("Enter a number greater than or equal to 10:");
//   console.log("Type of input:", typeof number);

//   number = Number(number); // convertir en nombre
// } while (number < 10);


// ===== Exercise 4
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };

// // 1. Console.log the number of floors
// console.log("Number of floors:", building.numberOfFloors);

// // 2. Console.log how many apartments are on floors 1 and 3
// console.log(
//   "Apartments on floor 1:",
//   building.numberOfAptByFloor.firstFloor
// );
// console.log(
//   "Apartments on floor 3:",
//   building.numberOfAptByFloor.thirdFloor
// );

// // 3. Console.log the name of the second tenant and the number of rooms he has
// let secondTenant = building.nameOfTenants[1]; // Dan
// let roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0];

// console.log(
//   "Second tenant is:",
//   secondTenant,
//   "and he has",
//   roomsOfSecondTenant,
//   "rooms"
// );

// // 4. Check rents and update Dan’s rent if needed
// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
//   console.log("Dan’s rent has been increased to 1200");
// }

// console.log("Updated building object:", building);


// ===== Exercise 5
// const family = {
//   father: "Ahmed",
//   mother: "Fatima",
//   brother: "Youssef",
//   sister: "Amina"
// };

// // Loop to print the keys
// for (let key in family) {
//   console.log("Key:", key);
// }

// // Loop to print the values
// for (let key in family) {
//   console.log("Value:", family[key]);
// }

// ===== Exercise 6
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }

// let message = "";
// for (let detail in details) {
//     message += " " + detail + " " + details[detail];
// }
// console.log(message)

// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log("names list : ", names);

let societyName = "";
for (let name of names) {
    societyName += name[0]; 
}

console.log("societyName : ", societyName);

// convertir en array, trier, puis re-joindre
societyName = societyName.split("").sort().join("");

console.log("after sort:", societyName);