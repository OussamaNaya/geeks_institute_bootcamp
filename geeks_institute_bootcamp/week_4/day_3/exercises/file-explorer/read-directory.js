// read-directory.js
const fs = require("fs");
const path = require("path");

// le répertoire à lire (ici le même dossier)
const directoryPath = __dirname;

try {
  const files = fs.readdirSync(directoryPath);
  console.log("Files in directory:");
  files.forEach(file => console.log(file));
} catch (err) {
  console.error("Error reading directory:", err);
}