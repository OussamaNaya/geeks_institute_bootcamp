const greet = require("./greeting");
const showColorfulMessage = require("./colorful-message");



// utiliser la fonction
const message = greet("Alice");
console.log(message);

// tu peux tester avec un autre nom
console.log(greet("Bob"));

showColorfulMessage();
