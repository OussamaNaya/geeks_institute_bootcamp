// ===== Exercise 1 : print Full Name
// function printFullName(obj){
//     return `Your full name is ${obj.first} ${obj.last}`
// }

// printFullName({first: 'Elie', last:'Schoppik'}) 

// ===== Exercise 2 : keys and values
// function keysAndValues(obj) {
//   // 1. Récupérer les clés et les trier
//   const keys = Object.keys(obj).sort();

//   // 2. Récupérer les valeurs dans le même ordre que les clés
//   const values = keys.map(key => obj[key]);

//   // 3. Retourner les deux tableaux
//   return [keys, values];
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// ===== Exercise 3 : Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
// Output => 3
