// app.js
const { readFile, writeFile } = require("./fileManager");

// Lire le contenu de "Hello World.txt"
const helloContent = readFile("Hello World.txt");
console.log("Content of Hello World.txt:", helloContent);

// Écrire dans "Bye World.txt"
writeFile("Bye World.txt", "Writing to the file");

// Vérifier le contenu
const byeContent = readFile("Bye World.txt");
console.log("Content of Bye World.txt after writing:", byeContent);
