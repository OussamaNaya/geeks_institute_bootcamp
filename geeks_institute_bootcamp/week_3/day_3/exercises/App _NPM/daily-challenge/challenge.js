const greet = require("./greeting");
const {showColorfulMessageByName} = require("./colorful-message");
const readFile = require("./files/read-file");

let greetingMessage = greet("Oussama");
console.log("greetingMessage : ", greetingMessage);

showColorfulMessageByName(greetingMessage, "red");

readFile();
