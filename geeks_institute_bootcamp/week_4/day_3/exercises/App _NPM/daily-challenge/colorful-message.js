// colorful-message.js
const chalk = require("chalk");

function showColorfulMessage() {
  console.log(chalk.blue("Hello in blue!"));
  console.log(chalk.red.bold("Bold red message!"));
  console.log(chalk.green.underline("Green underlined message!"));
  console.log(chalk.bgYellow.black("Yellow background with black text!"));
  console.log(chalk.rgb(123, 45, 67).bold("Custom RGB colored message!"));
}

function showColorfulMessageByName(name, color) {
  // vérifier si chalk a cette couleur
  if (chalk[color]) {
    console.log(chalk[color](`Hello, ${name}! This is your colorful message.`));
  } else {
    console.log(`Color "${color}" not supported. Hello, ${name}!`);
  }
}

// exporter les deux fonctions
module.exports = {
  showColorfulMessage,
  showColorfulMessageByName
};