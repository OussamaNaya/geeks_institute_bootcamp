const chalk = require("chalk");

// Exemple simple de message coloré
console.log(chalk.bgYellow("Hello World in blue!"));
console.log(chalk.red.bold("This is bold red text!"));
console.log(chalk.green.underline("Green and underlined text"));

// Combinaison : fond jaune + texte noir
console.log(chalk.bgYellow.black("Warning: Something important!"));

// Fun : message multicolor
console.log(chalk.rgb(123, 45, 67).bold("Custom RGB colored text"));