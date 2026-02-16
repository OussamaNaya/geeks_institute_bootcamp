const fs = require("fs");
const path = require("path");

// fichiers source et destination
const sourceFile = path.join(__dirname, "source.txt");
const destinationFile = path.join(__dirname, "destination.txt");

try {
  // lire le contenu du fichier source
  const content = fs.readFileSync(sourceFile, "utf-8");
  console.log("Content read from source.txt:", content);

  // écrire le contenu dans le fichier destination
  fs.writeFileSync(destinationFile, content);
  console.log("Content copied to destination.txt successfully!");
} catch (err) {
  console.error("Error:", err);
}