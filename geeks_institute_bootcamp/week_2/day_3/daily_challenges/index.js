const  { first, second} =  require("./export1");
const { animals } = require("./export2");

const myAnimalExports = require("./export2");

console.log(myAnimalExports.animals);



first();
second();

console.log(animals);
