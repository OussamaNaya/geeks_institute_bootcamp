const fs = require("fs");
const path = require("path");

// fonction pour lire le fichier
function readFileData() {
  const filePath = path.join(__dirname, "file-data.txt");
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("Content of file-data.txt:\n", content);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

// exporter la fonction
module.exports = readFileData;