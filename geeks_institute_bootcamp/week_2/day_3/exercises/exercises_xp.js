// // ===== Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// // Output => I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// // =====  Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     //destructuring
//     let fName = objUser.first;
//     let lName = objUser.last;

//     return `Your full name is ${fName} ${lName}`;
// }

// const result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
// console.log(result);


// ===== Exercise 3: User & id
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// function showUsers(){
//   console.log('STart of function ...')
//   lUsers.forEach(user => {
//     console.log(user);
//   });
//   console.log('... End of function.')
// }

// let lUsers = Object.entries(users);
// showUsers()

// lUsers.forEach(user => {
//   user[1] *= 2;
// });
// showUsers()


// ===== Exercise 4 : Person class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// Output => object


// ===== Exercise 5 : Dog class
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// // Correct answer is : 2
//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


// =====  Exercise 6 : Challenges
// if([2] === [2])
// {
//   console.log("true");
// }

// if({} === {})
// {
//   console.log("true");
// }

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));
