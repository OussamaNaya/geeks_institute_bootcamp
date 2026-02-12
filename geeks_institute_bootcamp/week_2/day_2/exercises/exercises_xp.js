// ===== Exercise 1 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let isYeah = false;

// colors.forEach((item, index) => {
//    if(item == "Violet")
//    {
//       console.log("Yeah");
//       isYeah = true;
//    }
//    console.log(`${index+1}# choice is ${item}`);
// });

// if(!isYeah)
//    console.log("No...");


// ===== Exercise 2 : Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) => {
//   const position = index + 1;
//   const suffix = position <= 3 ? ordinal[position] : ordinal[0];
//   console.log(`${position}${suffix} choice is ${color}.`);
// });


// ===== Exercise 3 : Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// // result => ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// // ------2------
// const country = "USA";
// console.log([...country]);
// // result => ['U', 'S', 'A']

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// // result => [undefined, undefined]


// ===== Exercise 4 : Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// // const welcomeStudents = 
// const welcomeStudents = users.map((item, index) => {
//    return `Hello ${item.firstName}`;
// })

// console.log(welcomeStudents);

// const fullStackLastNames = users
//    .filter((item) => item.role === 'Full Stack Resident')
//    .map((item) => item.lastName);
   
// console.log(fullStackLastNames);


// ===== Exercise 5 : Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const message = epic.reduce((accumulator, currentValue) => {
//   return accumulator + ' ' + currentValue;
// });

// console.log(message);

// ===== Exercise 6 :  Employees #2
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });