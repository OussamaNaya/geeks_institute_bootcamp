const _ = require("lodash");      
const math = require("./math");    

// Utilisation des fonctions du module math
const sum = math.add(5, 10);       // 15
const product = math.multiply(4, 6); // 24

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

// Utilisation de lodash pour exemple
const numbers = [10, 5, 8, 20, 3];

const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Numbers: ${numbers}`);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

// Combinaison : additionner tous les nombres et multiplier par 2
const total = _.sum(numbers);
const totalDoubled = math.multiply(total, 2);
console.log(`Total sum doubled: ${totalDoubled}`);